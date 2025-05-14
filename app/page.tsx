// app/page.tsx

import CanvasBoard from "@/components/canvas-board"

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-stone-100">
      <CanvasBoard />
    </main>
  )
}
