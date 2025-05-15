module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/components/draggable-thought.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/draggable-thought.tsx 
__turbopack_context__.s({
    "default": (()=>DraggableThought)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/formatDistanceToNow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.js [app-ssr] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)"); // Import MotionProps
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// Define the delay constant locally for entrance animation
const THOUGHT_ENTRANCE_DELAY = 500 // ms
;
const THOUGHT_ENTRANCE_DURATION = 300 // ms
;
function DraggableThought({ thought, isNewlyAdded, onPositionChange, onDelete, onAddReply, // Accept layout related props passed from parent
layout, layoutRoot, transition, ...rest // Pass any other motion props down
 }) {
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showControls, setShowControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isReplying, setIsReplying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replyContent, setReplyContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showReplies, setShowReplies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const thoughtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const replyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pinColor = "bg-amber-500";
    // Focus reply input when opened
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isReplying && replyInputRef.current) {
            replyInputRef.current.focus();
        }
    }, [
        isReplying
    ]);
    // Handle end of drag using Framer Motion
    const handleDragEnd = (event, info)=>{
        // Framer motion's offset accumulates. We need the final absolute position
        // relative to the board, not just the offset from the start of the drag.
        // The initial position is handled by `style`, drag updates transform.
        // We need to calculate the final absolute position based on the initial position + drag offset
        const finalPosition = {
            // Correct calculation using initial position + offset
            x: thought.position.x + info.offset.x,
            y: thought.position.y + info.offset.y
        };
        onPositionChange(finalPosition);
        setIsDragging(false);
    };
    // Pointer Down Handler for Drag Activation (prevents drag on interactive elements)
    const handlePointerDown = (e)=>{
        const targetElement = e.target;
        // Allow drag ONLY if the target is the draggable element itself or the pin/inner note
        // Check if the click is on interactive elements like buttons, textarea, or reply content
        const isInteractive = targetElement.closest('button, textarea, input, .reply-content, a');
        if (isInteractive) {
            // If it's interactive, prevent drag start completely
            console.log("Pointer down on interactive element, preventing drag start.");
            // We might not need to do anything explicit here if dragListener=false handles it
            return;
        } else {
            // If clicking on draggable area (note body, pin), allow drag
            console.log("Pointer down on draggable area, allowing drag.");
            // Set touchAction to none *on the element that received the pointer down*
            // This is required for pointer events to work correctly with dragging
            targetElement.style.touchAction = 'none';
        // We don't need to manually call startDrag as Framer Motion's listener (even if false initially)
        // seems to pick it up correctly when pointer events are managed this way.
        }
    };
    // --- RENDER ---
    return(// Apply layout props here
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: thoughtRef,
        // Added specific class for parent check in board mouse down
        className: `thought-draggable-outer absolute flex flex-col ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`,
        style: {
            left: `${thought.position.x}px`,
            top: `${thought.position.y}px`,
            zIndex: isDragging ? 10000 : thought.zIndex,
            width: "240px",
            // Reset transform when not dragging so 'left'/'top' are the source of truth
            // Framer Motion applies transform during drag
            transform: isDragging ? undefined : 'translateX(0px) translateY(0px)'
        },
        drag: true,
        dragMomentum: false,
        onDragStart: ()=>setIsDragging(true),
        onDragEnd: handleDragEnd,
        dragListener: false,
        onPointerDown: handlePointerDown,
        initial: isNewlyAdded ? {
            scale: 0.8,
            opacity: 0
        } : {
            scale: 1,
            opacity: 1
        },
        animate: {
            scale: isDragging ? 1.05 : 1,
            opacity: 1,
            boxShadow: isNewlyAdded ? "0 0 30px rgba(245, 158, 11, 0.6)" // Enhanced shadow for new notes
             : isDragging ? "0 10px 20px rgba(0,0,0,0.2)" : "none"
        },
        // Default transition for entrance/drag scale
        transition: isNewlyAdded ? {
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: THOUGHT_ENTRANCE_DELAY / 1000
        } : {
            type: "spring",
            stiffness: 400,
            damping: 25
        } // For hover/drag scale adjustments
        ,
        // Apply layout props passed from parent
        layout: layout,
        layoutRoot: layoutRoot,
        // Apply hover scale effect to the OUTER container
        whileHover: !isDragging ? {
            scale: 1.03
        } : {},
        onMouseEnter: ()=>!isDragging && setShowControls(true),
        onMouseLeave: ()=>setShowControls(false),
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${pinColor} mx-auto -mb-2 z-10 h-5 w-5 rounded-full shadow-md`
            }, void 0, false, {
                fileName: "[project]/components/draggable-thought.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `${thought.color} rounded-lg p-4 shadow-md overflow-hidden`,
                style: {
                    transform: `rotate(${thought.rotation}deg)`,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                    transformOrigin: "center center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 text-gray-800 break-words whitespace-pre-wrap",
                        children: thought.content
                    }, void 0, false, {
                        fileName: "[project]/components/draggable-thought.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-xs text-gray-500 mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(thought.createdAt), {
                                    addSuffix: true
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/draggable-thought.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            thought.replies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex cursor-pointer items-center gap-1 rounded p-0.5 hover:text-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-400 focus:ring-offset-1",
                                onClick: (e)=>{
                                    e.stopPropagation() // Prevent drag start
                                    ;
                                    setShowReplies(!showReplies);
                                },
                                "aria-label": `${thought.replies.length} ${thought.replies.length === 1 ? 'reply' : 'replies'}. ${showReplies ? "Hide" : "Show"} replies.`,
                                "aria-expanded": showReplies,
                                type: "button",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/draggable-thought.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: thought.replies.length
                                    }, void 0, false, {
                                        fileName: "[project]/components/draggable-thought.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/draggable-thought.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/draggable-thought.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: showControls && !isDragging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -5,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: -5,
                                scale: 0.9
                            },
                            transition: {
                                duration: 0.15
                            },
                            className: "absolute -right-2 -top-2 flex gap-1 z-20" // Ensure controls are above note
                            ,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "h-7 w-7 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-red-100",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onDelete();
                                    },
                                    "aria-label": "Delete thought",
                                    title: "Delete thought",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                        className: "h-3.5 w-3.5 text-red-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/draggable-thought.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/draggable-thought.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "h-7 w-7 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-blue-100",
                                    onClick: (e)=>{
                                        e.stopPropagation(); // Stop propagation
                                        const replying = !isReplying;
                                        setIsReplying(replying);
                                        // Automatically show replies when starting to reply
                                        if (replying) {
                                            setShowReplies(true);
                                        }
                                    },
                                    "aria-label": "Reply to thought",
                                    title: "Reply to thought",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        className: "h-3.5 w-3.5 text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/draggable-thought.tsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/draggable-thought.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/draggable-thought.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/draggable-thought.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/draggable-thought.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: (showReplies || isReplying) && thought.replies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0,
                        marginTop: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto",
                        marginTop: "0.5rem"
                    },
                    exit: {
                        opacity: 0,
                        height: 0,
                        marginTop: 0
                    },
                    transition: {
                        duration: 0.25
                    },
                    className: "overflow-hidden",
                    style: {
                        transformOrigin: "top"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-5 border-l-2 border-amber-200/80 pl-3 space-y-2.5",
                        children: [
                            " ",
                            thought.replies.map((reply)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "reply-content rounded-md bg-white/80 p-2.5 text-sm shadow-xs backdrop-blur-sm border border-gray-100",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 break-words whitespace-pre-wrap",
                                            children: reply.content
                                        }, void 0, false, {
                                            fileName: "[project]/components/draggable-thought.tsx",
                                            lineNumber: 257,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-xs text-gray-500/90",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatDistanceToNow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistanceToNow"])(new Date(reply.createdAt), {
                                                addSuffix: true
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/draggable-thought.tsx",
                                            lineNumber: 258,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, reply.id, true, {
                                    fileName: "[project]/components/draggable-thought.tsx",
                                    lineNumber: 256,
                                    columnNumber: 18
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/draggable-thought.tsx",
                        lineNumber: 254,
                        columnNumber: 14
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/draggable-thought.tsx",
                    lineNumber: 246,
                    columnNumber: 12
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/draggable-thought.tsx",
                lineNumber: 244,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isReplying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].form, {
                    onSubmit: (e)=>{
                        e.stopPropagation();
                        handleSubmitReply(e);
                    },
                    initial: {
                        opacity: 0,
                        y: -10,
                        marginTop: 0
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        marginTop: "0.75rem"
                    },
                    exit: {
                        opacity: 0,
                        y: -10,
                        marginTop: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "w-[calc(100%-1.25rem)] ml-auto mr-0" // Align form width/position
                    ,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -inset-0.5 rounded-xl bg-gradient-to-r from-amber-400/70 to-amber-300/70 opacity-30 blur-sm transition duration-200 group-focus-within:opacity-70 group-hover:opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/components/draggable-thought.tsx",
                                lineNumber: 280,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center overflow-hidden rounded-xl bg-white shadow-md border border-amber-100/50",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        ref: replyInputRef,
                                        value: replyContent,
                                        onChange: (e)=>setReplyContent(e.target.value),
                                        placeholder: "Add reply..." // Shorter placeholder
                                        ,
                                        className: "min-h-[40px] flex-grow resize-none border-0 bg-transparent px-3 py-2 text-sm focus:outline-none" // Adjusted padding/size
                                        ,
                                        onKeyDown: (e)=>{
                                            // Don't propagate keyboard events that we handle
                                            if (e.key === "Enter" && !e.shiftKey || e.key === "Escape") {
                                                e.stopPropagation();
                                            }
                                            if (e.key === "Enter" && !e.shiftKey) {
                                                e.preventDefault();
                                                handleSubmitReply();
                                            } else if (e.key === "Escape") {
                                                setIsReplying(false);
                                                setReplyContent("");
                                            }
                                        },
                                        rows: 1
                                    }, void 0, false, {
                                        fileName: "[project]/components/draggable-thought.tsx",
                                        lineNumber: 282,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        disabled: !replyContent.trim(),
                                        className: "m-1 h-8 w-8 rounded-lg bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 transition-all duration-200 flex-shrink-0" // Added flex-shrink-0
                                        ,
                                        "aria-label": "Send reply",
                                        title: "Send reply",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/draggable-thought.tsx",
                                                lineNumber: 310,
                                                columnNumber: 20
                                            }, this),
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/draggable-thought.tsx",
                                        lineNumber: 303,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/draggable-thought.tsx",
                                lineNumber: 281,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/draggable-thought.tsx",
                        lineNumber: 279,
                        columnNumber: 14
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/draggable-thought.tsx",
                    lineNumber: 271,
                    columnNumber: 12
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/draggable-thought.tsx",
                lineNumber: 269,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/draggable-thought.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this) // End Outer Draggable Container
    );
}
}}),
"[project]/components/canvas-board.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/canvas-board.tsx
__turbopack_context__.s({
    "default": (()=>CanvasBoard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/textarea.tsx [app-ssr] (ecmascript)");
// Import DraggableThought AND the types from it if needed elsewhere
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$draggable$2d$thought$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/draggable-thought.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// Animation constants
const THOUGHT_ENTRANCE_DELAY = 500 // ms - Delay BEFORE the note appears
;
const THOUGHT_ENTRANCE_DURATION = 300 // ms - Duration OF the note appearing animation
;
const CLUSTER_REFLOW_DURATION = 400 // ms - Duration for related notes moving to circle
;
function CanvasBoard() {
    // --- CORE STATE ---
    const [thoughts, setThoughts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isAddingThought, setIsAddingThought] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [thoughtContent, setThoughtContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [nextZIndex, setNextZIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [boardSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 20000,
        height: 20000
    });
    // NEW: Loading state specific to AI interaction
    const [isAiProcessing, setIsAiProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Combined animation lock (covers AI call, panning, clustering)
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- BOARD POSITION & DRAGGING STATE ---
    const boardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDraggingBoard, setIsDraggingBoard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const boardPositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    }) // Ref to track current position *during* animation
    ;
    const dragStartPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const boardStartPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    // Springs for smooth board movement
    const springX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(0, {
        stiffness: 80,
        damping: 20
    });
    const springY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(0, {
        stiffness: 80,
        damping: 20
    });
    // State to trigger spring updates
    const [boardPositionState, setBoardPositionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Effect to update springs and ref when state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        springX.set(boardPositionState.x);
        springY.set(boardPositionState.y);
        boardPositionRef.current = boardPositionState // Keep ref in sync
        ;
    }, [
        boardPositionState,
        springX,
        springY
    ]);
    // --- AI CLUSTERING STATE ---
    // Target position for the board pan (Phase 1)
    const [panTarget, setPanTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Ref to hold data needed for clustering (Phase 2)
    const clusterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const defaultColor = "bg-[#FEF9C3]" // Keep consistent color
    ;
    // --- INITIALIZATION ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Sample thoughts (same as your original)
        const sampleThoughts = [
            {
                id: "1",
                content: "The best ideas come when you least expect them.",
                color: defaultColor,
                position: {
                    x: 9800,
                    y: 9750
                },
                rotation: -2,
                zIndex: 1,
                createdAt: new Date(),
                replies: [
                    {
                        id: "r1",
                        content: "So true! I had my best idea in the shower.",
                        createdAt: new Date()
                    }
                ]
            },
            {
                id: "2",
                content: "Simplicity is the ultimate sophistication.",
                color: defaultColor,
                position: {
                    x: 10100,
                    y: 9900
                },
                rotation: 1,
                zIndex: 2,
                createdAt: new Date(),
                replies: []
            },
            {
                id: "3",
                content: "Design is not just what it looks like and feels like. Design is how it works.",
                color: defaultColor,
                position: {
                    x: 9900,
                    y: 10050
                },
                rotation: -1,
                zIndex: 3,
                createdAt: new Date(),
                replies: []
            }
        ];
        setThoughts(sampleThoughts);
        setNextZIndex(4);
        // Center board initially
        const centerX = -boardSize.width / 2 + window.innerWidth / 2;
        const centerY = -boardSize.height / 2 + window.innerHeight / 2;
        setBoardPositionState({
            x: centerX,
            y: centerY
        });
        // Initialize springs directly too to avoid initial jump
        springX.set(centerX, false);
        springY.set(centerY, false);
        boardPositionRef.current = {
            x: centerX,
            y: centerY
        };
    }, [
        boardSize.width,
        boardSize.height,
        defaultColor,
        springX,
        springY
    ]) // Add springs to dependency array
    ;
    // --- BOARD DRAGGING HANDLERS (Your Original Logic) ---
    const handleBoardMouseDown = (e)=>{
        // Prevent dragging if AI processing, animating, adding, or not clicking background
        if (isAnimating || isAiProcessing || isAddingThought || !e.target.classList.contains("board-background")) {
            return;
        }
        // Prevent drag if clicking on a thought itself (handled by DraggableThought)
        if (e.target.closest('.thought-draggable-outer')) {
            return;
        }
        setIsDraggingBoard(true);
        dragStartPos.current = {
            x: e.clientX,
            y: e.clientY
        };
        // Use the ref for the most up-to-date position during potential spring animations
        boardStartPos.current = boardPositionRef.current;
        document.addEventListener("mousemove", handleBoardMouseMove);
        document.addEventListener("mouseup", handleBoardMouseUp);
        document.body.style.cursor = "grabbing";
        e.preventDefault();
    };
    const handleBoardMouseMove = (e)=>{
        if (!isDraggingBoard) return;
        const dx = e.clientX - dragStartPos.current.x;
        const dy = e.clientY - dragStartPos.current.y;
        // Update the state, which will then update the springs via useEffect
        setBoardPositionState({
            x: boardStartPos.current.x + dx,
            y: boardStartPos.current.y + dy
        });
    };
    const handleBoardMouseUp = ()=>{
        if (isDraggingBoard) {
            setIsDraggingBoard(false);
            document.removeEventListener("mousemove", handleBoardMouseMove);
            document.removeEventListener("mouseup", handleBoardMouseUp);
            document.body.style.cursor = "default";
        }
    };
    // --- AI CLUSTER COMPLETION CHECK (Phase 2 Trigger) ---
    // Listen for spring changes to check if the pan has settled
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(springX, "change", (latestX)=>{
        // Check if panTarget exists before calling tryCluster
        if (panTarget) {
            tryCluster(latestX, springY.get());
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(springY, "change", (latestY)=>{
        // Check if panTarget exists before calling tryCluster
        if (panTarget) {
            tryCluster(springX.get(), latestY);
        }
    });
    // Function to execute Phase 2 (clustering) when pan finishes
    function tryCluster(currentX, currentY) {
        // Only proceed if we have a target, cluster data, and are close enough
        if (!panTarget || !clusterRef.current) return;
        const { x: targetX, y: targetY } = panTarget;
        // Check if the current spring values are very close to the target
        if (Math.abs(currentX - targetX) < 1 && Math.abs(currentY - targetY) < 1) {
            // Prevent multiple triggers if already processing cluster
            if (!clusterRef.current) return;
            const { origin, relevantIds, newThoughtData } = clusterRef.current;
            const clusterRadius = relevantIds.length > 1 ? 280 : 0 // Radius for the circle, adjust as needed (0 if only 1 related note)
            ;
            const numRelevant = relevantIds.length;
            let zIndexCounter = nextZIndex; // Use a local counter for this batch
            // Create the new thought object first
            const newThought = {
                ...newThoughtData,
                position: {
                    ...origin
                },
                rotation: Math.random() * 6 - 3,
                zIndex: zIndexCounter++,
                createdAt: new Date(),
                isNewlyAdded: true
            };
            setThoughts((prevThoughts)=>{
                const updatedThoughts = prevThoughts.map((t)=>{
                    // Update position and zIndex for relevant thoughts
                    if (relevantIds.includes(t.id)) {
                        const i = relevantIds.indexOf(t.id);
                        // Calculate angle for circular layout
                        // Offset angle slightly so first item isn't straight up if desired (e.g. -Math.PI / 2)
                        const angle = 2 * Math.PI * i / numRelevant - Math.PI / 2;
                        return {
                            ...t,
                            position: {
                                x: origin.x + Math.cos(angle) * clusterRadius,
                                y: origin.y + Math.sin(angle) * clusterRadius
                            },
                            zIndex: zIndexCounter++,
                            // Explicitly ensure isNewlyAdded is false for these repositioned notes
                            isNewlyAdded: false
                        };
                    }
                    // Keep other thoughts as they are, ensure isNewlyAdded is false
                    return {
                        ...t,
                        isNewlyAdded: false
                    };
                });
                // Add the new thought to the array
                return [
                    ...updatedThoughts,
                    newThought
                ];
            });
            setNextZIndex(zIndexCounter); // Update the global zIndex counter
            // --- Cleanup ---
            // Clear the target and ref now that clustering is done
            setPanTarget(null);
            clusterRef.current = null;
            // Schedule cleanup for the new thought's 'isNewlyAdded' flag and isAnimating state
            const cleanupTimeout = THOUGHT_ENTRANCE_DELAY + Math.max(THOUGHT_ENTRANCE_DURATION, CLUSTER_REFLOW_DURATION);
            setTimeout(()=>{
                setThoughts((currentThoughts)=>currentThoughts.map((t)=>t.id === newThought.id ? {
                            ...t,
                            isNewlyAdded: false
                        } : t));
                setIsAnimating(false); // Release the animation lock
                console.log("Clustering and animation finished.");
            }, cleanupTimeout);
        }
    }
    // --- ADD THOUGHT HANDLER (AI-Powered Version) ---
    const addThought = async (e)=>{
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
            const briefThoughts = thoughts.map((t)=>({
                    id: t.id,
                    content: t.content
                }));
            const response = await fetch("/api/rankRelevant", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    newThought: currentThoughtContent,
                    existing: briefThoughts
                })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({
                        error: "Failed to parse error response"
                    }));
                throw new Error(`API Error (${response.status}): ${errorData?.error || response.statusText}`);
            }
            const { relevantIds } = await response.json();
            console.log("Received relevant IDs:", relevantIds);
            setIsAiProcessing(false); // Hide loading indicator
            // 2) Compute centroid of the relevant thoughts
            const relevantThoughts = thoughts.filter((t)=>relevantIds.includes(t.id));
            let centroidX;
            let centroidY;
            if (relevantThoughts.length > 0) {
                let sumX = 0;
                let sumY = 0;
                relevantThoughts.forEach((t)=>{
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
                console.log("No relevant thoughts found, placing near viewport center:", {
                    centroidX,
                    centroidY
                });
            }
            // 3) Calculate target board position to center the centroid
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const targetBoardX = -centroidX + viewportWidth / 2;
            const targetBoardY = -centroidY + viewportHeight / 2;
            // 4) Store data needed for Phase 2 (clustering)
            const newThoughtId = Math.random().toString(36).substring(2, 9);
            clusterRef.current = {
                origin: {
                    x: centroidX,
                    y: centroidY
                },
                relevantIds,
                newThoughtData: {
                    id: newThoughtId,
                    content: currentThoughtContent,
                    color: defaultColor,
                    createdAt: new Date(),
                    replies: []
                }
            };
            // 5) Set the pan target and trigger the board animation (Phase 1)
            setPanTarget({
                x: targetBoardX,
                y: targetBoardY
            });
            console.log("Panning board to:", {
                targetBoardX,
                targetBoardY
            });
            // Update state to trigger useEffect -> spring.set
            setBoardPositionState({
                x: targetBoardX,
                y: targetBoardY
            });
            // Also set springs directly for potentially faster response, with adjusted stiffness/damping for pan
            springX.set(targetBoardX, {
                type: "spring",
                stiffness: 60,
                damping: 18
            });
            springY.set(targetBoardY, {
                type: "spring",
                stiffness: 60,
                damping: 18
            });
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
    const updateThoughtPosition = (id, position)=>{
        // Prevent updates during the AI clustering animation phase
        if (isAnimating && clusterRef.current) return;
        setThoughts((prev)=>prev.map((thought)=>thought.id === id ? {
                    ...thought,
                    position,
                    zIndex: nextZIndex
                } : thought));
        setNextZIndex((prev)=>prev + 1);
    };
    // Delete a thought
    const deleteThought = (id)=>{
        // Prevent updates during the AI clustering animation phase
        if (isAnimating && clusterRef.current) return;
        setThoughts((prev)=>prev.filter((thought)=>thought.id !== id));
    };
    // Add a reply to a thought
    const addReply = (thoughtId, content)=>{
        // Prevent updates during the AI clustering animation phase
        if (isAnimating && clusterRef.current) return;
        const newReply = {
            id: Math.random().toString(36).substring(2, 9),
            content,
            createdAt: new Date()
        };
        setThoughts((prev)=>prev.map((thought)=>thought.id === thoughtId ? {
                    ...thought,
                    replies: [
                        ...thought.replies,
                        newReply
                    ],
                    zIndex: nextZIndex
                } : thought));
        setNextZIndex((prev)=>prev + 1);
    };
    // --- RENDER ---
    return(// Add pointer cursor styles based on dragging state
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative h-screen w-screen overflow-hidden bg-stone-100 ${isDraggingBoard ? 'cursor-grabbing' : 'cursor-grab' // Change cursor for board drag
        }`,
        onMouseDown: handleBoardMouseDown,
        // Prevent browser drag behavior
        onDragStart: (e)=>e.preventDefault(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: boardRef,
                className: "absolute",
                style: {
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
                    pointerEvents: 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "board-background absolute h-full w-full pointer-events-auto",
                    // Add inline style to ensure it covers the area if needed, but should inherit
                    style: {
                        cursor: isDraggingBoard ? 'grabbing' : 'grab'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: thoughts.map((thought)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$draggable$2d$thought$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                thought: thought,
                                isNewlyAdded: !!thought.isNewlyAdded,
                                onPositionChange: updateThoughtPosition,
                                onDelete: deleteThought,
                                onAddReply: addReply,
                                // Pass animation duration for consistency if needed inside DraggableThought
                                layout: true,
                                layoutRoot: true,
                                // Define transition specifically for layout changes (clustering)
                                transition: {
                                    type: 'spring',
                                    duration: CLUSTER_REFLOW_DURATION / 1000,
                                    bounce: 0.2
                                }
                            }, thought.id, false, {
                                fileName: "[project]/components/canvas-board.tsx",
                                lineNumber: 423,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/canvas-board.tsx",
                        lineNumber: 421,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/canvas-board.tsx",
                    lineNumber: 414,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/canvas-board.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-6 left-1/2 z-50 -translate-x-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: !isAddingThought ? // Button to open the add form
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            y: 20,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        exit: {
                            y: 20,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>!isAnimating && setIsAddingThought(true),
                            className: "flex h-14 w-14 items-center justify-center rounded-full bg-black/80 backdrop-blur-sm p-0 shadow-xl hover:bg-black transition-all hover:scale-105 border border-white/10",
                            disabled: isAnimating || isAiProcessing,
                            "aria-label": "Add new thought",
                            children: isAiProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "h-6 w-6 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/components/canvas-board.tsx",
                                lineNumber: 461,
                                columnNumber: 21
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/components/canvas-board.tsx",
                                lineNumber: 463,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/canvas-board.tsx",
                            lineNumber: 453,
                            columnNumber: 15
                        }, this)
                    }, "add-button", false, {
                        fileName: "[project]/components/canvas-board.tsx",
                        lineNumber: 446,
                        columnNumber: 13
                    }, this) : // The form to add a new thought
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            y: 20,
                            opacity: 0,
                            scale: 0.95
                        },
                        animate: {
                            y: 0,
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            y: 20,
                            opacity: 0,
                            scale: 0.95
                        },
                        transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 30
                        },
                        className: "relative" // Keep relative for glow
                        ,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-400/30 to-yellow-300/30 opacity-70 blur-sm"
                            }, void 0, false, {
                                fileName: "[project]/components/canvas-board.tsx",
                                lineNumber: 478,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: addThought,
                                className: "relative flex w-[500px] max-w-[90vw] items-center overflow-hidden rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-amber-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center pl-5 text-amber-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/canvas-board.tsx",
                                            lineNumber: 482,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/canvas-board.tsx",
                                        lineNumber: 481,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                        value: thoughtContent,
                                        onChange: (e)=>setThoughtContent(e.target.value),
                                        placeholder: "What's on your mind? Press Enter to add...",
                                        className: "min-h-[54px] flex-1 resize-none border-0 bg-transparent px-4 py-4 text-base focus-visible:ring-0 focus-visible:ring-offset-0",
                                        autoFocus: true,
                                        onKeyDown: (e)=>{
                                            if (e.key === "Enter" && !e.shiftKey) {
                                                e.preventDefault();
                                                addThought() // Call the updated addThought
                                                ;
                                            } else if (e.key === "Escape") {
                                                setIsAddingThought(false);
                                                setThoughtContent("") // Clear content on escape
                                                ;
                                            }
                                        },
                                        rows: 1,
                                        disabled: isAiProcessing || isAnimating
                                    }, void 0, false, {
                                        fileName: "[project]/components/canvas-board.tsx",
                                        lineNumber: 484,
                                        columnNumber: 17
                                    }, this),
                                    thoughtContent && !isAiProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        onClick: ()=>{
                                            setThoughtContent("");
                                        },
                                        variant: "ghost",
                                        size: "icon",
                                        className: "mx-1 h-8 w-8 rounded-full hover:bg-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-4 w-4 text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/canvas-board.tsx",
                                                lineNumber: 510,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Clear"
                                            }, void 0, false, {
                                                fileName: "[project]/components/canvas-board.tsx",
                                                lineNumber: 511,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/canvas-board.tsx",
                                        lineNumber: 504,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "m-1.5 h-11 w-11 rounded-full bg-amber-500 p-0 hover:bg-amber-600 transition-all hover:scale-105 shadow-sm",
                                        disabled: !thoughtContent.trim() || isAnimating || isAiProcessing,
                                        "aria-label": "Submit new thought",
                                        children: [
                                            isAiProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-5 w-5 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/canvas-board.tsx",
                                                lineNumber: 523,
                                                columnNumber: 22
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/canvas-board.tsx",
                                                lineNumber: 525,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: "Add thought"
                                            }, void 0, false, {
                                                fileName: "[project]/components/canvas-board.tsx",
                                                lineNumber: 528,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/canvas-board.tsx",
                                        lineNumber: 515,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/canvas-board.tsx",
                                lineNumber: 480,
                                columnNumber: 15
                            }, this)
                        ]
                    }, "add-form", true, {
                        fileName: "[project]/components/canvas-board.tsx",
                        lineNumber: 469,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/canvas-board.tsx",
                    lineNumber: 443,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/canvas-board.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/canvas-board.tsx",
        lineNumber: 386,
        columnNumber: 5
    }, this));
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a8427813._.js.map