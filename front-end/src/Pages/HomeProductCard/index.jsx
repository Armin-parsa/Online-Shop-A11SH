
// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function index({ id, image, title, description, price, onAddToCart }) {
//   return (
//     <div className="w-full bg-neutral border border-muted rounded-lg shadow-md overflow-hidden flex flex-col">
//       <img src={image} alt={title} className="w-full h-48 object-contain bg-white"/>
//       <div className="p-4 flex flex-col gap-2 flex-1">
//         <h3 className="font-bold text-primary line-clamp-1">{title}</h3>
//         <p className="text-sm text-secondary line-clamp-2">{description}</p>
//         <div className="mt-auto flex items-center justify-between pt-3">
//           <div className="flex flex-col">
//             <span className="line-through text-gray-400 text-sm">${price + 100}</span>
//             <span className="font-bold text-lg text-primary">${price}</span>
//           </div>
//           <span className="bg-red-500 text-white text-xs px-3 py-1 rounded">40%</span>
//         </div>
//         <div className="flex items-center gap-3 mt-3">
//           <button onClick={() => onAddToCart({ id, price, description, title, image })} className="bg-primary text-neutral text-sm px-4 py-2 rounded hover:bg-secondary flex-1">
//             Add to cart
//           </button>
//           <Link to={`/products/${id}`} className="bg-primary text-neutral text-sm px-14 py-2 rounded hover:bg-secondary">
//             Detail
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// } 



import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
const MAX_TILT = 12 // درجه
export default function index({ id, image, title, description, price, onAddToCart }) {
  const wrapRef = useRef(null)
  const cardRef = useRef(null)
  const timerRef = useRef(null)
  const [added, setAdded] = useState(false)
  useEffect(() => () => clearTimeout(timerRef.current), [])
  const handleMove = (e) => {
    if (e.pointerType === 'touch') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const rect = wrapRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const el = cardRef.current
    el.style.setProperty('--rx', `${(0.5 - py) * MAX_TILT * 2}deg`)
    el.style.setProperty('--ry', `${(px - 0.5) * MAX_TILT * 2}deg`)
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
  }
  const handleLeave = () => {
    const el = cardRef.current
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }
  const handleAdd = () => {
    onAddToCart({ id, price, description, title, image })
    setAdded(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setAdded(false), 1200)
  }
  return (
    <div
      ref={wrapRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="group w-full"
      style={{ perspective: '1000px' }}>
      <div
        ref={cardRef}
        className="relative w-full bg-neutral border border-muted rounded-lg shadow-md flex flex-col transition-[transform,box-shadow] duration-200 ease-out group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)]"
        style={{ transformStyle: 'preserve-3d',transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))',}}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: 'translateZ(2px)',
            background:
              'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.35), transparent 55%)',
          }}
        />

       
        <div className="relative h-48 bg-white rounded-t-lg" style={{ transformStyle: 'preserve-3d' }}>
          <div className="w-full h-full p-2" style={{ transform: 'translateZ(60px)' }}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3"
            />
          </div>

          
          <div className="absolute top-3 left-3" style={{ transform: 'translateZ(80px)' }}>
            <span className="block bg-red-500 text-white text-xs px-3 py-1 rounded shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              40%
            </span>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-2 flex-1" style={{ transformStyle: 'preserve-3d' }}>
          <h3
            className="font-bold text-primary line-clamp-1 transition-transform duration-300 group-hover:translate-x-1"
            style={{ transform: 'translateZ(35px)' }}
          >
            {title}
          </h3>
          <p className="text-sm text-secondary line-clamp-2" style={{ transform: 'translateZ(20px)' }}>
            {description}
          </p>

          <div className="mt-auto pt-3" style={{ transform: 'translateZ(40px)' }}>
            <div className="flex flex-col">
              <span className="line-through text-gray-400 text-sm">${price + 100}</span>
              
              <span className="font-bold text-lg text-primary transition-transform duration-300 origin-left group-hover:scale-110">
                
                ${price}
              
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3" style={{ transform: 'translateZ(30px)' }}>
            <button
              onClick={handleAdd}
              className="group/btn relative overflow-hidden bg-primary text-neutral text-xs sm:text-sm px-2 sm:px-3 py-2 rounded flex-1 transition-all duration-200 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95"
              > 
              <span
                aria-hidden="true"
                className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/30 transition-all duration-700 ease-out group-hover/btn:left-[130%]"
              />
              <span className="relative">{added ? 'Added ✓' : 'Add to cart'}</span>
            </button>

            <Link
              to={`/products/${id}`}
              className="group/link inline-flex items-center justify-center gap-2 bg-primary text-neutral text-sm px-5 py-2 rounded transition-all duration-200 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95"
            >
              Detail
              <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}