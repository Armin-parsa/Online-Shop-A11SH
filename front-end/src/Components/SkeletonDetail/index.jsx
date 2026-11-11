import React from 'react'

export default function ProductSkeleton() {
  return (
    <div className="p-6 animate-pulse bg-neutral/20 min-h-screen">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-md p-6 md:p-10">

        {/* Image */}
        <div className="bg-neutral rounded-xl h-72 md:h-96 flex items-center justify-center">
          <div className="w-40 h-40 bg-muted/60 rounded-xl"></div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-5 justify-center">

          <div className="h-4 w-24 bg-secondary/40 rounded"></div>

          <div className="space-y-3">
            <div className="h-7 w-full bg-primary/20 rounded"></div>
            <div className="h-7 w-3/4 bg-primary/20 rounded"></div>
          </div>

          <div className="h-4 w-32 bg-muted rounded"></div>

          <div className="space-y-3">
            <div className="h-4 w-full bg-neutral rounded"></div>
            <div className="h-4 w-full bg-neutral rounded"></div>
            <div className="h-4 w-4/5 bg-neutral rounded"></div>
            <div className="h-4 w-2/3 bg-neutral rounded"></div>
          </div>

          <div className="h-8 w-28 bg-secondary/40 rounded"></div>

          <div className="flex gap-3 mt-2">
            <div className="h-12 w-24 bg-muted/50 rounded-lg"></div>
            <div className="h-12 flex-1 bg-primary/40 rounded-lg"></div>
          </div>

          <div className="border-t border-neutral pt-5 space-y-3">
            <div className="h-4 w-40 bg-muted/60 rounded"></div>
            <div className="h-4 w-32 bg-muted/60 rounded"></div>
          </div>

        </div>
      </div>
    </div>
  )
}