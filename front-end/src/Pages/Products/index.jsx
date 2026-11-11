import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard'
import ProductSkeleton from '../../Components/Skeleton'
import { ImSpinner2 } from 'react-icons/im'
import Navbar from '../../Components/Navbar'
export default function Products({cart,setCart}) {
  const [products, setProducts] = useState()

const addToCart = (product) => {
  const findProduct = cart.find((item) => item.id === product.id)
  if (findProduct) {
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })
setCart(newCart)
  } else {
    setCart([...cart, { ...product, quantity: 1 }])
  }
}
  useEffect(() => {
    (async () => {
      try {
        const categories = ['smartphones', 'laptops', 'mobile-accessories', 'tablets']
        let all = []
        for (let i = 0; i < categories.length; i++) {
          const res = await fetch(`https://dummyjson.com/products/category/${categories[i]}`)
          const data = await res.json()
          all = [...all, ...data.products]
        }
        setProducts(all)
      } catch (error) {
        console.log(error.message)
      }
    })()
  }, [])
  const items = products?.map((item) => {
    return <ProductCard id={item.id} image={item.thumbnail} title={item.title} description={item.description} price={item.price} category={item.category} onAddToCart={addToCart}/>
  })
  if (!items) {
    return <ProductSkeleton />
  }
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>{items}</div>
    </>
  )
}
