import React from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import { FaAward, FaTags, FaHeadset, FaShoppingBag } from 'react-icons/fa'
export default function About() {
  return   (
    <>
    <Navbar/>
    <div className='bg-neutral min-h-screen py-1'>
      <h1 className='text-3xl mt-[50px] text-center text-primary'>What are you searching for ?</h1>
      <div className="relative overflow-hidden bg-[url('/hero_v2.png')] bg-cover bg-center bg-no-repeat w-[90%] max-w-4xl mx-auto my-12 rounded-2xl shadow-lg p-10">
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="relative z-10">
          <h3 className="text-4xl font-bold text-white text-center mb-2">About Us</h3>
          <div className="w-20 h-1 bg-neutral mx-auto rounded mb-8"></div>
          <div className="flex flex-col gap-5 text-left leading-relaxed text-white">
            <p>Welcome to DigiStore, your trusted destination for modern electronics. We started with a simple idea: everyone deserves access to reliable technology at a fair price. Today, we offer a carefully selected range of smartphones, laptops, tablets, and accessories, from everyday essentials to high-performance devices built for work, study, and play.</p>
            <p>Our journey began in a small shop with a handful of products and a big goal: to make buying electronics simple and stress-free. Too often, customers are overwhelmed by confusing specifications, unclear warranties, and inflated prices. We wanted to change that. Over the years, we have grown into a store that thousands of people rely on, but our values have never changed. We still treat every customer the way we would want to be treated ourselves.</p>
            <p>Every product on our shelves is chosen with care. We work directly with trusted brands and authorized suppliers, so you can be confident that what you buy is genuine. Whether you need a new phone, a powerful laptop for your studies, a tablet for entertainment, or a charger and cable to keep your devices running, you will find it here. Our team tests and reviews our products regularly, so we can give you honest advice instead of a hard sales pitch.</p>
          </div>
        </div>
      </div>



<section className='bg-neutral grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 md:p-10 max-w-6xl mx-auto'>
  <div className='bg-primary min-h-[150px] rounded-xl p-6 shadow-md hover:bg-secondary transition duration-300'>
    <FaAward className='text-3xl text-muted mb-4' />
    <h3 className='text-white text-xl font-bold mb-2'>Quality Products</h3>
    <p className='text-neutral'>Reliable electronics for your everyday needs.</p>
  </div>
  <div className='bg-primary min-h-[150px] rounded-xl p-6 shadow-md hover:bg-secondary transition duration-300'>
    <FaTags className='text-3xl text-muted mb-4' />
    <h3 className='text-white text-xl font-bold mb-2'>Best Prices</h3>
    <p className='text-neutral'>Great products at competitive prices.</p>
  </div>
  <div className='bg-primary min-h-[150px] rounded-xl p-6 shadow-md hover:bg-secondary transition duration-300'>
    <FaHeadset className='text-3xl text-muted mb-4' />
    <h3 className='text-white text-xl font-bold mb-2'>Customer Support</h3>
    <p className='text-neutral'>We are here to help you choose the right product.</p>
  </div>
  <div className='bg-primary min-h-[150px] rounded-xl p-6 shadow-md hover:bg-secondary transition duration-300'>
    <FaShoppingBag className='text-3xl text-muted mb-4' />
    <h3 className='text-white text-xl font-bold mb-2'>Easy Shopping</h3>
    <p className='text-neutral'>A simple and convenient shopping experience.</p>
  </div>

</section>




      <Footer />

    </div>
    </>
  )
}