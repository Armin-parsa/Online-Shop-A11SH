// ProductCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, price, description, title, category, image,onAddToCart,priceOf }) {
  
  return (
    <div className="w-full bg-neutral border border-muted rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-contain bg-white" />

      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="text-xs uppercase text-secondary">{category}</span>
        <h3 className="font-bold text-primary line-clamp-1">{title}</h3>
        <p className="text-sm text-secondary line-clamp-2">{description}</p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-bold text-lg text-primary">${price}</span>
          <div className="flex items-center gap-3">

  
</div>
          <button onClick={()=>onAddToCart({id,price,description,title,category,image})} className="bg-primary text-neutral text-sm px-4 py-2 rounded hover:bg-secondary">Add to cart</button>
          <Link to={`/products/${id}`} className="bg-primary text-neutral text-sm px-7 py-2 rounded hover:bg-secondary">Detail</Link>
        </div>
      </div>
    </div>
  )
}