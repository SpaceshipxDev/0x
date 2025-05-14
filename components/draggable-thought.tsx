// components/draggable-thought.tsx 

"use client"

import type React from "react" // Keep React import
import { useEffect, useRef, useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { MessageSquare, Send, Trash } from "lucide-react"
import { AnimatePresence, motion, MotionProps } from "framer-motion" // Import MotionProps

import { Button } from "@/components/ui/button"
// Removed direct import of CanvasBoard types, define/export them here or import from a shared types file
// Define types here if not shared
export type Reply = {
  id: string
  content: string
  createdAt: Date
}

export type Thought = {
  id: string
  content: string
  color: string
  position: { x: number; y: number }
  rotation: number
  zIndex: number
  createdAt: Date
  replies: Reply[]
  isNewlyAdded?: boolean
}


// Define the delay constant locally for entrance animation
const THOUGHT_ENTRANCE_DELAY = 500 // ms
const THOUGHT_ENTRANCE_DURATION = 300 // ms

// Extend props to include layout-related props from Motion
interface DraggableThoughtProps extends Omit<MotionProps, 'onDragStart' | 'onDragEnd' | 'onPositionChange'> {
  thought: Thought
  isNewlyAdded: boolean
  onPositionChange: (position: { x: number; y: number }) => void
  onDelete: () => void
  onAddReply: (thoughtId: string, content: string) => void
}

// Use React.forwardRef if you needed to access the DOM node from the parent
export default function DraggableThought({
  thought,
  isNewlyAdded,
  onPositionChange,
  onDelete,
  onAddReply,
  // Accept layout related props passed from parent
  layout,
  layoutRoot,
  transition,
  ...rest // Pass any other motion props down
}: DraggableThoughtProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [isReplying, setIsReplying] = useState(false)
  const [replyContent, setReplyContent] = useState("")
  const [showReplies, setShowReplies] = useState(false)

  const thoughtRef = useRef<HTMLDivElement>(null)
  const replyInputRef = useRef<HTMLTextAreaElement>(null)

  const pinColor = "bg-amber-500"

  // Focus reply input when opened
  useEffect(() => {
    if (isReplying && replyInputRef.current) {
      replyInputRef.current.focus()
    }
  }, [isReplying])

  // Handle end of drag using Framer Motion
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: { point: { x: number, y: number }, offset: { x: number; y: number } }) => {
    // Framer motion's offset accumulates. We need the final absolute position
    // relative to the board, not just the offset from the start of the drag.
    // The initial position is handled by `style`, drag updates transform.
    // We need to calculate the final absolute position based on the initial position + drag offset
    const finalPosition = {
        // Correct calculation using initial position + offset
       x: thought.position.x + info.offset.x,
       y: thought.position.y + info.offset.y,
    }
    onPositionChange(finalPosition)
    setIsDragging(false)
  }

  // Pointer Down Handler for Drag Activation (prevents drag on interactive elements)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const targetElement = e.target as HTMLElement
    // Allow drag ONLY if the target is the draggable element itself or the pin/inner note
    // Check if the click is on interactive elements like buttons, textarea, or reply content
    const isInteractive = targetElement.closest('button, textarea, input, .reply-content, a')

    if (isInteractive) {
      // If it's interactive, prevent drag start completely
       console.log("Pointer down on interactive element, preventing drag start.");
       // We might not need to do anything explicit here if dragListener=false handles it
      return
    } else {
       // If clicking on draggable area (note body, pin), allow drag
       console.log("Pointer down on draggable area, allowing drag.");
       // Set touchAction to none *on the element that received the pointer down*
       // This is required for pointer events to work correctly with dragging
       targetElement.style.touchAction = 'none';
       // We don't need to manually call startDrag as Framer Motion's listener (even if false initially)
       // seems to pick it up correctly when pointer events are managed this way.
    }
  }


  // --- RENDER ---
  return (
    // Apply layout props here
    <motion.div
      ref={thoughtRef}
      // Added specific class for parent check in board mouse down
      className={`thought-draggable-outer absolute flex flex-col ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      style={{
        left: `${thought.position.x}px`, // Use position for initial placement
        top: `${thought.position.y}px`,
        zIndex: isDragging ? 10000 : thought.zIndex, // Higher zIndex when dragging
        width: "240px",
        // Reset transform when not dragging so 'left'/'top' are the source of truth
        // Framer Motion applies transform during drag
        transform: isDragging ? undefined : 'translateX(0px) translateY(0px)',
      }}
      drag
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      dragListener={false} // IMPORTANT: Use manual pointer down handling
      onPointerDown={handlePointerDown} // Use our custom pointer down handler
      initial={isNewlyAdded ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
      animate={{
        scale: isDragging ? 1.05 : 1, // Scale up slightly when dragging
        opacity: 1,
        boxShadow: isNewlyAdded
          ? "0 0 30px rgba(245, 158, 11, 0.6)" // Enhanced shadow for new notes
          : (isDragging ? "0 10px 20px rgba(0,0,0,0.2)" : "none"), // Shadow when dragging
      }}
       // Default transition for entrance/drag scale
      transition={
        isNewlyAdded
          ? { type: "spring", stiffness: 300, damping: 20, delay: THOUGHT_ENTRANCE_DELAY / 1000 }
          : { type: "spring", stiffness: 400, damping: 25 } // For hover/drag scale adjustments
      }
       // Apply layout props passed from parent
      layout={layout}
      layoutRoot={layoutRoot}
      // Apply hover scale effect to the OUTER container
      whileHover={!isDragging ? { scale: 1.03 } : {}} // Only apply hover scale if not dragging
      onMouseEnter={() => !isDragging && setShowControls(true)} // Don't show controls if dragging
      onMouseLeave={() => setShowControls(false)}
      {...rest} // Spread remaining motion props
    >
      {/* Pin */}
      <div
        className={`${pinColor} mx-auto -mb-2 z-10 h-5 w-5 rounded-full shadow-md`}
         // Allow drag start via the pin, handled by parent's onPointerDown
         // style={{ touchAction: 'none' }} // Managed by handlePointerDown
      />
      {/* Inner Note container - Rotation, Content, Styling */}
      <motion.div
        className={`${thought.color} rounded-lg p-4 shadow-md overflow-hidden`} // overflow hidden might be needed
        style={{
          transform: `rotate(${thought.rotation}deg)`,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
          transformOrigin: "center center",
        }}
         // Allow drag start via note body, handled by parent's onPointerDown
         // style={{ touchAction: 'none' }} // Managed by handlePointerDown
      >
        {/* Content */}
        <div className="mb-3 text-gray-800 break-words whitespace-pre-wrap">{thought.content}</div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
          <div>{formatDistanceToNow(new Date(thought.createdAt), { addSuffix: true })}</div>
           {/* Reply count / Toggle Replies Button */}
          {thought.replies.length > 0 && (
            <button
              className="flex cursor-pointer items-center gap-1 rounded p-0.5 hover:text-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:ring-offset-1"
              onClick={(e) => {
                e.stopPropagation() // Prevent drag start
                setShowReplies(!showReplies)
              }}
              aria-label={`${thought.replies.length} ${thought.replies.length === 1 ? 'reply' : 'replies'}. ${showReplies ? "Hide" : "Show"} replies.`}
              aria-expanded={showReplies}
              type="button"
            >
              <MessageSquare className="h-3 w-3" />
              <span>{thought.replies.length}</span>
            </button>
          )}
        </div>

        {/* Hover Controls (Delete/Reply) */}
        <AnimatePresence>
          {showControls && !isDragging && ( // Don't show controls when dragging
            <motion.div
              initial={{ opacity: 0, y: -5, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -5, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="absolute -right-2 -top-2 flex gap-1 z-20" // Ensure controls are above note
            >
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-red-100"
                onClick={(e) => { e.stopPropagation(); onDelete(); }} // Stop propagation + delete
                aria-label="Delete thought"
                title="Delete thought"
              >
                <Trash className="h-3.5 w-3.5 text-red-500" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-blue-100"
                 onClick={(e) => {
                    e.stopPropagation(); // Stop propagation
                    const replying = !isReplying;
                    setIsReplying(replying);
                    // Automatically show replies when starting to reply
                    if (replying) { setShowReplies(true); }
                }}
                aria-label="Reply to thought"
                title="Reply to thought"
              >
                <MessageSquare className="h-3.5 w-3.5 text-blue-500" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div> {/* End Inner Note Container */}

       {/* Replies Section */}
       <AnimatePresence>
         {(showReplies || isReplying) && thought.replies.length > 0 && ( // Show if explicitly toggled OR if currently replying
           <motion.div
             initial={{ opacity: 0, height: 0, marginTop: 0 }}
             animate={{ opacity: 1, height: "auto", marginTop: "0.5rem" }}
             exit={{ opacity: 0, height: 0, marginTop: 0 }}
             transition={{ duration: 0.25 }}
             className="overflow-hidden"
             style={{ transformOrigin: "top" }}
           >
             <div className="ml-5 border-l-2 border-amber-200/80 pl-3 space-y-2.5"> {/* Added space-y */}
               {thought.replies.map((reply) => (
                 <div key={reply.id} className="reply-content rounded-md bg-white/80 p-2.5 text-sm shadow-xs backdrop-blur-sm border border-gray-100"> {/* Added class + style */}
                   <p className="text-gray-700 break-words whitespace-pre-wrap">{reply.content}</p>
                   <div className="mt-1 text-xs text-gray-500/90">
                     {formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })}
                   </div>
                 </div>
               ))}
             </div>
           </motion.div>
         )}
       </AnimatePresence>

       {/* Reply Input Form */}
       <AnimatePresence>
         {isReplying && (
           <motion.form
             onSubmit={(e) => { e.stopPropagation(); handleSubmitReply(e); }} // Stop propagation
             initial={{ opacity: 0, y: -10, marginTop: 0 }}
             animate={{ opacity: 1, y: 0, marginTop: "0.75rem" }} // Adjusted margin
             exit={{ opacity: 0, y: -10, marginTop: 0 }}
             transition={{ duration: 0.2 }}
             className="w-[calc(100%-1.25rem)] ml-auto mr-0" // Align form width/position
           >
             <div className="group relative">
               <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-amber-400/70 to-amber-300/70 opacity-30 blur-sm transition duration-200 group-focus-within:opacity-70 group-hover:opacity-50"></div>
               <div className="relative flex items-center overflow-hidden rounded-xl bg-white shadow-md border border-amber-100/50"> {/* subtle border */}
                 <textarea
                   ref={replyInputRef}
                   value={replyContent}
                   onChange={(e) => setReplyContent(e.target.value)}
                   placeholder="Add reply..." // Shorter placeholder
                   className="min-h-[40px] flex-grow resize-none border-0 bg-transparent px-3 py-2 text-sm focus:outline-none" // Adjusted padding/size
                   onKeyDown={(e) => {
                     // Don't propagate keyboard events that we handle
                     if ((e.key === "Enter" && !e.shiftKey) || e.key === "Escape") {
                        e.stopPropagation();
                     }
                     if (e.key === "Enter" && !e.shiftKey) {
                       e.preventDefault()
                       handleSubmitReply()
                     } else if (e.key === "Escape") {
                       setIsReplying(false)
                       setReplyContent("")
                     }
                   }}
                   rows={1}
                 />
                 <Button
                   type="submit"
                   disabled={!replyContent.trim()}
                   className="m-1 h-8 w-8 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 transition-all duration-200 flex-shrink-0" // Added flex-shrink-0
                   aria-label="Send reply"
                   title="Send reply"
                 >
                   <Send className="h-3.5 w-3.5" /> {/* Adjusted icon size */}
                 </Button>
               </div>
             </div>
           </motion.form>
         )}
       </AnimatePresence>
    </motion.div> // End Outer Draggable Container
  )
}
