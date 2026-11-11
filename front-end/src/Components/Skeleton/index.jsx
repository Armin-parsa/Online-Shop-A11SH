import React from 'react'

export default function ProductSkeleton() {
  const cards = Array.from({ length: 20 })
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {cards.map((_, i) => (
        <div
          key={i}
          className="w-full bg-neutral border border-muted rounded-lg shadow-md overflow-hidden flex flex-col animate-pulse"
        >
          <div className="w-full h-48 bg-muted/60"></div>

          <div className="p-4 flex flex-col gap-2 flex-1">
            <div className="h-3 w-1/4 bg-muted rounded"></div>
            <div className="h-5 w-3/4 bg-muted rounded"></div>
            <div className="h-3 w-full bg-muted rounded"></div>
            <div className="h-3 w-2/3 bg-muted rounded"></div>

            <div className="mt-auto flex items-center justify-between pt-2">
              <div className="h-6 w-16 bg-muted rounded"></div>
              <div className="h-9 w-28 bg-secondary/50 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}