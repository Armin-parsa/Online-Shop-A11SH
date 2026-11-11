import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SkeletonDetail from '../../Components/SkeletonDetail'
import Navbar from '../../Components/Navbar'

export default function ProductDetails({onAddToCart}) {
  const { id } = useParams()
  const [products, setProduct] = useState()

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        setProduct(data)
      } catch (error) {
        console.log(error.message)
      }
    })()
  }, [id])
  if (!products) {
    return <SkeletonDetail />
  }
  return (<>
  <Navbar/>
    <div className="min-h-screen bg-neutral/30 p-6 md:p-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-md p-6 md:p-10">
        <div className="bg-neutral/40 rounded-xl flex items-center justify-center p-6">
          <img src={products.thumbnail} alt={products.title} className="w-full h-72 md:h-96 object-contain"/>
        </div>

        <div className="flex flex-col gap-5 justify-center">
          <p className="text-sm text-secondary font-medium capitalize">{products.category}</p>
          <h1 className=" text-3xl font-bold text-primary">{products.title}</h1>
          <p className="text-secondary leading-7">{products.description}</p>
          <div className="border-t border-neutral pt-5">
            <p className="text-sm text-secondary mb-2">Price</p>
            <p className="text-3xl font-bold text-primary">${products.price}</p>
          </div>

          <button onClick={() => onAddToCart({id: products.id,price: products.price,description: products.description,title: products.title,category: products.category,image: products.thumbnail,})} className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition">Add to Cart</button>
          <p className="text-sm text-muted text-center">DigiStore · Your digital shopping destination</p>
        </div>
      </div>
    </div>
    </>
  )
}