// components/canvas-board.tsx

"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Plus, MessageSquare as MessageSquareIcon, X, Loader2 } from "lucide-react"
import { AnimatePresence, motion, useSpring, useMotionValueEvent } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

// Import DraggableThought AND the types from it if needed elsewhere
import DraggableThought from "./draggable-thought"
import type { Thought, Reply } from "./draggable-thought" // Make sure types are exported from draggable-thought

// Re-export types if they were defined here before
export type { Thought, Reply }

// Animation constants
const THOUGHT_ENTRANCE_DELAY = 500 // ms - Delay BEFORE the note appears
const THOUGHT_ENTRANCE_DURATION = 300 // ms - Duration OF the note appearing animation
const CLUSTER_REFLOW_DURATION = 400 // ms - Duration for related notes moving to circle

export default function CanvasBoard() {
  // --- CORE STATE ---
  const [thoughts, setThoughts] = useState<Thought[]>([])
  const [isAddingThought, setIsAddingThought] = useState(false)
  const [thoughtContent, setThoughtContent] = useState("")
  const [nextZIndex, setNextZIndex] = useState(1)
  const [boardSize] = useState({ width: 20000, height: 20000 })
  // NEW: Loading state specific to AI interaction
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  // Combined animation lock (covers AI call, panning, clustering)
  const [isAnimating, setIsAnimating] = useState(false)

  // --- BOARD POSITION & DRAGGING STATE ---
  const boardRef = useRef<HTMLDivElement>(null)
  const [isDraggingBoard, setIsDraggingBoard] = useState(false)
  const boardPositionRef = useRef({ x: 0, y: 0 }) // Ref to track current position *during* animation
  const dragStartPos = useRef({ x: 0, y: 0 })
  const boardStartPos = useRef({ x: 0, y: 0 })

  // Springs for smooth board movement
  const springX = useSpring(0, { stiffness: 80, damping: 20 })
  const springY = useSpring(0, { stiffness: 80, damping: 20 })

  // State to trigger spring updates
  const [boardPositionState, setBoardPositionState] = useState({ x: 0, y: 0 })

  // Effect to update springs and ref when state changes
  useEffect(() => {
    springX.set(boardPositionState.x)
    springY.set(boardPositionState.y)
    boardPositionRef.current = boardPositionState // Keep ref in sync
  }, [boardPositionState, springX, springY])

  // --- AI CLUSTERING STATE ---
  // Target position for the board pan (Phase 1)
  const [panTarget, setPanTarget] = useState<{ x: number; y: number } | null>(null)
  // Ref to hold data needed for clustering (Phase 2)
  const clusterRef = useRef<{
    origin: { x: number; y: number }
    relevantIds: string[]
    newThoughtData: Omit<Thought, 'position' | 'zIndex' | 'rotation' | 'isNewlyAdded'> // Store new note details
  } | null>(null)

  const defaultColor = "bg-[#FEF9C3]" // Keep consistent color

  // --- INITIALIZATION ---
  useEffect(() => {
    // Sample thoughts (same as your original)
    const sampleThoughts: Thought[] = [
       {
        id: "1",
        content: "The best ideas come when you least expect them.",
        color: defaultColor,
        position: { x: 9800, y: 9750 }, rotation: -2, zIndex: 1, createdAt: new Date(), replies: [ { id: "r1", content: "So true! I had my best idea in the shower.", createdAt: new Date(), }, ],
      },
      {
        id: "2",
        content: "Simplicity is the ultimate sophistication.",
        color: defaultColor,
        position: { x: 10100, y: 9900 }, rotation: 1, zIndex: 2, createdAt: new Date(), replies: [],
      },
      {
        id: "3",
        content: "Design is not just what it looks like and feels like. Design is how it works.",
        color: defaultColor,
        position: { x: 9900, y: 10050 }, rotation: -1, zIndex: 3, createdAt: new Date(), replies: [],
      },
    ]
    setThoughts(sampleThoughts)
    setNextZIndex(4)
    // Center board initially
    const centerX = -boardSize.width / 2 + window.innerWidth / 2
    const centerY = -boardSize.height / 2 + window.innerHeight / 2
    setBoardPositionState({ x: centerX, y: centerY })
    // Initialize springs directly too to avoid initial jump
    springX.set(centerX, false)
    springY.set(centerY, false)
    boardPositionRef.current = { x: centerX, y: centerY };
  }, [boardSize.width, boardSize.height, defaultColor, springX, springY]) // Add springs to dependency array


  // --- BOARD DRAGGING HANDLERS (Your Original Logic) ---
  const handleBoardMouseDown = (e: React.MouseEvent) => {
    // Prevent dragging if AI processing, animating, adding, or not clicking background
    if (
      isAnimating ||
      isAiProcessing ||
      isAddingThought ||
      !(e.target as HTMLElement).classList.contains("board-background")
    ) {
      return;
    }
    // Prevent drag if clicking on a thought itself (handled by DraggableThought)
    if ((e.target as HTMLElement).closest('.thought-draggable-outer')) {
        return;
    }


    setIsDraggingBoard(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    // Use the ref for the most up-to-date position during potential spring animations
    boardStartPos.current = boardPositionRef.current;
    document.addEventListener("mousemove", handleBoardMouseMove);
    document.addEventListener("mouseup", handleBoardMouseUp);
    document.body.style.cursor = "grabbing";
    e.preventDefault();
  };

  const handleBoardMouseMove = (e: MouseEvent) => {
    if (!isDraggingBoard) return;
    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;
    // Update the state, which will then update the springs via useEffect
    setBoardPositionState({
      x: boardStartPos.current.x + dx,
      y: boardStartPos.current.y + dy,
    });
  };

  const handleBoardMouseUp = () => {
    if (isDraggingBoard) {
      setIsDraggingBoard(false);
      document.removeEventListener("mousemove", handleBoardMouseMove);
      document.removeEventListener("mouseup", handleBoardMouseUp);
      document.body.style.cursor = "default";
    }
  };

  // --- AI CLUSTER COMPLETION CHECK (Phase 2 Trigger) ---
  // Listen for spring changes to check if the pan has settled
  useMotionValueEvent(springX, "change", (latestX) => {
      // Check if panTarget exists before calling tryCluster
      if (panTarget) {
          tryCluster(latestX, springY.get());
      }
  });
  useMotionValueEvent(springY, "change", (latestY) => {
      // Check if panTarget exists before calling tryCluster
      if (panTarget) {
          tryCluster(springX.get(), latestY);
      }
  });

  // Function to execute Phase 2 (clustering) when pan finishes
  function tryCluster(currentX: number, currentY: number) {
    // Only proceed if we have a target, cluster data, and are close enough
    if (!panTarget || !clusterRef.current) return
    const { x: targetX, y: targetY } = panTarget

    // Check if the current spring values are very close to the target
    if (Math.abs(currentX - targetX) < 1 && Math.abs(currentY - targetY) < 1) {

      // Prevent multiple triggers if already processing cluster
      if (!clusterRef.current) return;

      const { origin, relevantIds, newThoughtData } = clusterRef.current
      const clusterRadius = relevantIds.length > 1 ? 280 : 0 // Radius for the circle, adjust as needed (0 if only 1 related note)
      const numRelevant = relevantIds.length
      let zIndexCounter = nextZIndex; // Use a local counter for this batch

      // Create the new thought object first
      const newThought: Thought = {
        ...newThoughtData,
        position: { ...origin }, // Place at the exact center
        rotation: Math.random() * 6 - 3,
        zIndex: zIndexCounter++, // Highest z-index initially
        createdAt: new Date(),
        isNewlyAdded: true, // Mark for entrance animation
      };

      setThoughts((prevThoughts) => {
          const updatedThoughts = prevThoughts.map((t) => {
            // Update position and zIndex for relevant thoughts
            if (relevantIds.includes(t.id)) {
              const i = relevantIds.indexOf(t.id);
              // Calculate angle for circular layout
              // Offset angle slightly so first item isn't straight up if desired (e.g. -Math.PI / 2)
              const angle = (2 * Math.PI * i) / numRelevant - (Math.PI / 2) ;
              return {
                ...t,
                position: {
                  x: origin.x + Math.cos(angle) * clusterRadius,
                  y: origin.y + Math.sin(angle) * clusterRadius,
                },
                zIndex: zIndexCounter++, // Assign increasing z-index
                // Explicitly ensure isNewlyAdded is false for these repositioned notes
                isNewlyAdded: false,
              };
            }
            // Keep other thoughts as they are, ensure isNewlyAdded is false
            return { ...t, isNewlyAdded: false };
          });
          // Add the new thought to the array
          return [...updatedThoughts, newThought];
      });

      setNextZIndex(zIndexCounter); // Update the global zIndex counter

      // --- Cleanup ---
      // Clear the target and ref now that clustering is done
      setPanTarget(null);
      clusterRef.current = null;

      // Schedule cleanup for the new thought's 'isNewlyAdded' flag and isAnimating state
      const cleanupTimeout = THOUGHT_ENTRANCE_DELAY + Math.max(THOUGHT_ENTRANCE_DURATION, CLUSTER_REFLOW_DURATION);
      setTimeout(() => {
        setThoughts((currentThoughts) =>
          currentThoughts.map((t) =>
            t.id === newThought.id ? { ...t, isNewlyAdded: false } : t
          )
        );
        setIsAnimating(false); // Release the animation lock
        console.log("Clustering and animation finished.");
      }, cleanupTimeout);
    }
  }


  // --- ADD THOUGHT HANDLER (AI-Powered Version) ---
  const addThought = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!thoughtContent.trim() || isAnimating || isAiProcessing) return;

    setIsAnimating(true); // Lock interactions during the whole process
    setIsAiProcessing(true); // Show loading indicator
    setIsAddingThought(false); // Close the input form immediately

    const currentThoughtContent = thoughtContent; // Capture content before clearing
    setThoughtContent(""); // Clear input now

    try {
      // 1) Get relevant thought IDs from our API
      console.log("Calling /api/rankRelevant for:", currentThoughtContent);
      const briefThoughts = thoughts.map((t) => ({ id: t.id, content: t.content }));
      const response = await fetch("/api/rankRelevant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newThought: currentThoughtContent, existing: briefThoughts }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Failed to parse error response" }));
        throw new Error(`API Error (${response.status}): ${errorData?.error || response.statusText}`);
      }

      const { relevantIds } = await response.json() as { relevantIds: string[] };
      console.log("Received relevant IDs:", relevantIds);
      setIsAiProcessing(false); // Hide loading indicator

      // 2) Compute centroid of the relevant thoughts
      const relevantThoughts = thoughts.filter((t) => relevantIds.includes(t.id));
      let centroidX: number;
      let centroidY: number;

      if (relevantThoughts.length > 0) {
        let sumX = 0;
        let sumY = 0;
        relevantThoughts.forEach((t) => {
          sumX += t.position.x;
          sumY += t.position.y;
        });
        centroidX = sumX / relevantThoughts.length;
        centroidY = sumY / relevantThoughts.length;
      } else {
        // Fallback: Find a place near the current viewport center if no relevant notes
        // Or use the old findNewPosition logic (simpler here: place near viewport center)
        const viewportCenterX = -boardPositionRef.current.x + window.innerWidth / 2;
        const viewportCenterY = -boardPositionRef.current.y + window.innerHeight / 2;
        centroidX = viewportCenterX + (Math.random() * 200 - 100); // Add slight randomness
        centroidY = viewportCenterY + (Math.random() * 200 - 100);
        console.log("No relevant thoughts found, placing near viewport center:", {centroidX, centroidY})
      }

      // 3) Calculate target board position to center the centroid
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const targetBoardX = -centroidX + viewportWidth / 2;
      const targetBoardY = -centroidY + viewportHeight / 2;

      // 4) Store data needed for Phase 2 (clustering)
      const newThoughtId = Math.random().toString(36).substring(2, 9);
      clusterRef.current = {
        origin: { x: centroidX, y: centroidY },
        relevantIds,
        newThoughtData: { // Store everything except position/zIndex etc.
            id: newThoughtId,
            content: currentThoughtContent,
            color: defaultColor,
            createdAt: new Date(), // Will be slightly off from actual creation, but close enough
            replies: [],
        }
      };

      // 5) Set the pan target and trigger the board animation (Phase 1)
      setPanTarget({ x: targetBoardX, y: targetBoardY });
      console.log("Panning board to:", { targetBoardX, targetBoardY });
      // Update state to trigger useEffect -> spring.set
      setBoardPositionState({ x: targetBoardX, y: targetBoardY });
      // Also set springs directly for potentially faster response, with adjusted stiffness/damping for pan
      springX.set(targetBoardX, { type: "spring", stiffness: 60, damping: 18 });
      springY.set(targetBoardY, { type: "spring", stiffness: 60, damping: 18 });

      // Note: isAnimating remains true until tryCluster finishes and runs its timeout

    } catch (error) {
      console.error("Failed to add thought:", error);
      setIsAiProcessing(false);
      setIsAnimating(false); // Unlock on error
      // Optionally: Show an error message to the user
      // Restore input content if desired?
      // setThoughtContent(currentThoughtContent);
      setIsAddingThought(true); // Re-open the form on error maybe?
    }
  };


  // --- OTHER HANDLERS (Your Original Logic) ---

  // Update thought position after dragging
  const updateThoughtPosition = (id: string, position: { x: number; y: number }) => {
    // Prevent updates during the AI clustering animation phase
    if (isAnimating && clusterRef.current) return;

    setThoughts((prev) =>
      prev.map((thought) =>
        thought.id === id ? { ...thought, position, zIndex: nextZIndex } : thought
      ),
    )
    setNextZIndex((prev) => prev + 1)
  }

  // Delete a thought
  const deleteThought = (id: string) => {
     // Prevent updates during the AI clustering animation phase
    if (isAnimating && clusterRef.current) return;
    setThoughts((prev) => prev.filter((thought) => thought.id !== id))
  }

  // Add a reply to a thought
  const addReply = (thoughtId: string, content: string) => {
     // Prevent updates during the AI clustering animation phase
    if (isAnimating && clusterRef.current) return;

    const newReply: Reply = {
      id: Math.random().toString(36).substring(2, 9),
      content,
      createdAt: new Date(),
    }
    setThoughts((prev) =>
      prev.map((thought) =>
        thought.id === thoughtId
          ? { ...thought, replies: [...thought.replies, newReply], zIndex: nextZIndex }
          : thought,
      ),
    )
    setNextZIndex((prev) => prev + 1)
  }

  // --- RENDER ---
  return (
    // Add pointer cursor styles based on dragging state
    <div
        className={`relative h-screen w-screen overflow-hidden bg-stone-100 ${
            isDraggingBoard ? 'cursor-grabbing' : 'cursor-grab' // Change cursor for board drag
        }`}
        onMouseDown={handleBoardMouseDown} // Attach mouse down here
        // Prevent browser drag behavior
        onDragStart={(e) => e.preventDefault()}
    >
      {/* The movable board area */}
      <motion.div
        ref={boardRef}
        className="absolute"
        style={{
          width: boardSize.width,
          height: boardSize.height,
           // Use the springs for smooth movement
          x: springX,
          y: springY,
          // Your background pattern
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23784c2c' fillOpacity='0.1' fillRule='evenodd'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='30' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='70' cy='10' r='2'/%3E%3Ccircle cx='90' cy='10' r='2'/%3E%3Ccircle cx='10' cy='30' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='50' cy='30' r='2'/%3E%3Ccircle cx='70' cy='30' r='2'/%3E%3Ccircle cx='90' cy='30' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='30' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3Ccircle cx='70' cy='50' r='2'/%3E%3Ccircle cx='90' cy='50' r='2'/%3E%3Ccircle cx='10' cy='70' r='2'/%3E%3Ccircle cx='30' cy='70' r='2'/%3E%3Ccircle cx='50' cy='70' r='2'/%3E%3Ccircle cx='70' cy='70' r='2'/%3E%3Ccircle cx='90' cy='70' r='2'/%3E%3Ccircle cx='10' cy='90' r='2'/%3E%3Ccircle cx='30' cy='90' r='2'/%3E%3Ccircle cx='50' cy='90' r='2'/%3E%3Ccircle cx='70' cy='90' r='2'/%3E%3Ccircle cx='90' cy='90' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "50px 50px",
          backgroundPosition: "center",
          // Ensure clicks pass through to the background div if needed, but background itself is draggable
          pointerEvents: 'auto',
        }}
      >
        {/* This div captures clicks intended ONLY for the board background */}
        {/* Make it slightly smaller than the motion div if edge dragging causes issues */}
        <div
            className="board-background absolute h-full w-full pointer-events-auto"
            // Add inline style to ensure it covers the area if needed, but should inherit
            style={{ cursor: isDraggingBoard ? 'grabbing' : 'grab' }}
        >
          {/* Render all the thoughts */}
          {/* Use layout prop for smoother transitions when positions change */}
          <AnimatePresence>
            {thoughts.map((thought) => (
              <DraggableThought
                key={thought.id} // Key is crucial for AnimatePresence and updates
                thought={thought}
                isNewlyAdded={!!thought.isNewlyAdded} // Ensure boolean
                onPositionChange={updateThoughtPosition}
                onDelete={deleteThought}
                onAddReply={addReply}
                // Pass animation duration for consistency if needed inside DraggableThought
                 layout // Enable automatic layout animation for position changes
                 layoutRoot // Treat each thought as a layout root for performance
                 // Define transition specifically for layout changes (clustering)
                 transition={{ type: 'spring', duration: CLUSTER_REFLOW_DURATION / 1000, bounce: 0.2 }}
              />
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Bottom-centered Add Thought Button/Form (Your Original Structure) */}
      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <AnimatePresence mode="wait">
          {!isAddingThought ? (
            // Button to open the add form
            <motion.div
              key="add-button"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                onClick={() => !isAnimating && setIsAddingThought(true)} // Prevent opening if animating
                className="flex h-14 w-14 items-center justify-center rounded-full bg-black/80 backdrop-blur-sm p-0 shadow-xl hover:bg-black transition-all hover:scale-105 border border-white/10"
                disabled={isAnimating || isAiProcessing} // Disable during whole process
                aria-label="Add new thought"
              >
                {/* Show loader when AI is processing */}
                {isAiProcessing ? (
                    <Loader2 className="h-6 w-6 animate-spin" />
                ) : (
                    <Plus className="h-6 w-6" />
                )}
              </Button>
            </motion.div>
          ) : (
            // The form to add a new thought
            <motion.div
              key="add-form"
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="relative" // Keep relative for glow
            >
              {/* Glow effect for the form */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-400/30 to-yellow-300/30 opacity-70 blur-sm"></div>
              {/* Form element */}
              <form onSubmit={addThought} className="relative flex w-[500px] max-w-[90vw] items-center overflow-hidden rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-amber-100">
                <div className="flex items-center pl-5 text-amber-500">
                  <MessageSquareIcon className="h-5 w-5" />
                </div>
                <Textarea
                  value={thoughtContent}
                  onChange={(e) => setThoughtContent(e.target.value)}
                  placeholder="What's on your mind? Press Enter to add..."
                  className="min-h-[54px] flex-1 resize-none border-0 bg-transparent px-4 py-4 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      addThought() // Call the updated addThought
                    } else if (e.key === "Escape") {
                      setIsAddingThought(false)
                      setThoughtContent("") // Clear content on escape
                    }
                  }}
                  rows={1}
                  disabled={isAiProcessing || isAnimating} // Disable input during processing
                />
                {/* Clear button */}
                {thoughtContent && !isAiProcessing && ( // Hide clear button when processing
                  <Button
                    type="button"
                    onClick={() => { setThoughtContent("") }}
                    variant="ghost" size="icon"
                    className="mx-1 h-8 w-8 rounded-full hover:bg-gray-100"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                    <span className="sr-only">Clear</span>
                  </Button>
                )}
                {/* Submit button */}
                <Button
                  type="submit"
                  className="m-1.5 h-11 w-11 rounded-full bg-amber-500 p-0 hover:bg-amber-600 transition-all hover:scale-105 shadow-sm"
                  disabled={!thoughtContent.trim() || isAnimating || isAiProcessing}
                  aria-label="Submit new thought"
                >
                  {/* Show loader inside submit button as well */}
                  {isAiProcessing ? (
                     <Loader2 className="h-5 w-5 animate-spin" />
                  ) :(
                    <Plus className="h-5 w-5" />
                  )}

                  <span className="sr-only">Add thought</span>
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
