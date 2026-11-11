import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

export default function Navbar() {
  return (
    <>
<div className='bg-primary min-h-[50px] flex items-center justify-center px-3 py-2'>
  <button className='bg-neutral text-black px-4 py-1.5 rounded-full mr-5.5 hover:bg-white transition animate-[wiggle_1s_ease-in-out_infinite]'>
      کلیک کنید
    </button>
  <h1 className='text-white text-sm md:text-lg flex items-center justify-center gap-3 flex-wrap text-center'><span>فقط تا امشب 550 هزار تومان تخفیف!</span></h1>
</div>


    
    <nav className="bg-neutral shadow-md px-2 min-[400px]:px-4 sm:px-8 py-3 flex items-center justify-between gap-2 text-primary">
     <Link to="/" className="flex items-center justify-center gap-2 text-lg min-[400px]:text-xl sm:text-2xl font-bold text-primary shrink-0">
  <img src="/icon-light.svg" alt="DigiStore" className="w-10 h-10" />
  DigiStore
</Link>

      <div className="flex items-center gap-2 min-[400px]:gap-3 sm:gap-6 text-xs min-[400px]:text-sm sm:text-base">
        <Link to="/" className="hover:text-secondary transition">Home</Link>
        <Link to="/products" className="hover:text-secondary transition">Products</Link>
        <Link to="/about" className="hover:text-secondary transition">About</Link>
      </div>

      <div className="flex items-center gap-2 min-[400px]:gap-3 shrink-0">
        <Link to="/cart" className="text-base sm:text-xl text-primary hover:text-secondary transition"><FaShoppingCart /></Link>
        <Link to="/profile" className="text-base sm:text-xl text-primary hover:text-secondary transition"><FaUser /></Link>
        <Link to="/login" className="bg-primary text-white px-2 min-[400px]:px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-base hover:bg-secondary transition">Logout</Link>
      </div>
    </nav>
    </>
  )
}