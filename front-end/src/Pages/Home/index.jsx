import React, { useEffect, useState,useRef  } from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'
import HomeProductCard from '../HomeProductCard'
import ProductSkeleton from '../../Components/Skeleton'
import { FiHeadphones } from 'react-icons/fi'
import SupportPage from '../Support'
export default function Home({onAddToCart}) {
  const sliderRef = useRef(null)
const scrollSlider = (direction) => {
  if (sliderRef.current) {
    sliderRef.current.scrollBy({
      left: direction * 260,
      behavior: 'smooth'
    })
  }
}
  const [product,setProduct]=useState([])
  useEffect(()=>{
    (async()=>{
      try {
        const res=await fetch('https://dummyjson.com/products')
        const data=await res.json()
        setProduct(data.products)
      } catch (error) {
        console.log(error.message)
      }
    })()
  },[])
const prices = [199, 299, 399, 499]
const items = product.slice(0, 10).map((item, index) => (
  <div key={item.id} className='shrink-0 w-[230px] sm:w-[240px] md:w-[250px]'>
    <HomeProductCard id={item.id} image={item.thumbnail} title={item.title} description={item.description} category={item.category} price={prices[index % prices.length]} onAddToCart={onAddToCart}/>
  </div>
))
// if(!items){
//   <ProductSkeleton/>
// }
  return (
    <>
      <Navbar />
      <section className="relative bg-[url('/digistore.png')] bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center justify-center px-5 py-20 text-center">
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">Welcome to DigiStore</h1>
          <p className="max-w-3xl mx-auto mb-15 text-base md:text-lg leading-8 text-white">
            Discover digital products from different categories and brands.
            Find your favorite products with great quality and competitive prices.
            Choose the best option for you and enjoy convenient shopping.
          </p>

          <Link to={'/products'} className="mt-8  px-8 py-3 bg-neutral text-primary font-semibold rounded-lg hover:bg-muted transition">Explore Products</Link>
        </div>
      </section>
<Link to={'/support'}>
<button className='fixed bottom-10 right-10 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300'>
  <FiHeadphones size={35} />
</button>
</Link>

      <section className="px-5 py-14 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          <div className="bg-muted p-4 rounded-xl text-center text-primary font-semibold hover:bg-secondary hover:text-white transition cursor-pointer">
            <img src="/laptops_category.png" alt="Laptop" className="w-full h-32 object-contain mb-3" />
            <h3 className="text-xl">Laptop</h3>
          </div>
          <div className="bg-muted p-4 rounded-xl text-center text-primary font-semibold hover:bg-secondary hover:text-white transition cursor-pointer">
            <img src="/phones_category.png" alt="Laptop" className="w-full h-32 object-contain mb-3" />
            <h3 className="text-xl">Phones</h3>
          </div>
          <div className="bg-muted p-4 rounded-xl text-center text-primary font-semibold hover:bg-secondary hover:text-white transition cursor-pointer">
            <img src="/headphones_category.png" alt="Laptop" className="w-full h-32 object-contain mb-3 " />
            <h3 className="text-xl">HeadPhone</h3>
          </div>
          <div className="bg-muted p-4 rounded-xl text-center text-primary font-semibold hover:bg-secondary hover:text-white transition cursor-pointer">
            <img src="/chargers_category.png" alt="Laptop" className="w-full h-32 object-contain mb-3" />
            <h3 className="text-xl">Chargers</h3>
          </div>
        </div>

<h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-primary flex justify-center items-center gap-3 mb-8 mt-16 md:mt-[120px]'>
  Special Offers

  <span className='w-[65px] sm:w-[90px] h-[32px] sm:h-[40px] text-sm sm:text-base text-white flex items-center justify-center rounded-2xl bg-red-700'>
    +25%
  </span>
</h1>
<section className='bg-neutral mt-10 rounded-3xl p-3 sm:p-5 md:p-6'>
  <div className='flex items-center gap-2 sm:gap-4'>
    <button onClick={() => scrollSlider(-1)} className='bg-primary text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-secondary transition shrink-0 flex items-center justify-center'>❮</button>
    <div ref={sliderRef} className='flex-1 min-w-0 overflow-x-auto scroll-smooth' style={{ scrollbarWidth: 'none' }}>
      <div className='flex gap-3 sm:gap-5 pb-4 w-max'>{items}</div>
    </div>
    <button onClick={() => scrollSlider(1)} className='bg-primary text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-secondary transition shrink-0 flex items-center justify-center'>❯</button>
  </div>
</section>



<section className='grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-10 max-w-7xl mx-auto mt-[100px]'>
  <Link to={'/products'}>
  <img src="/headPhoneBanner.png" alt="Headphone Banner" className='w-full h-auto rounded-xl shadow-md hover:scale-[1.02] transition duration-300'/>
  </Link>
  <Link to={'/products'}>
  <img src="/phoneBanner.jpg" alt="phoneBanner.jpg" className='w-full h-auto rounded-xl shadow-md hover:scale-[1.02] transition duration-300'/>
  </Link>
</section>
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10 mt-[60px]">Exprience of our shop</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-[50px]">
          <div className="bg-neutral p-6 md:p-8 rounded-xl text-center text-primary font-semibold hover:bg-secondary hover:text-white transition cursor-pointer text-xl">+1500 Products</div>
          <div className="bg-neutral p-6 md:p-8 rounded-xl text-center text-primary font-semibold hover:bg-secondary hover:text-white transition cursor-pointer text-xl">+15 Y Exprience</div>
          <div className="bg-neutral p-6 md:p-8 rounded-xl text-center text-primary font-semibold hover:bg-secondary hover:text-white transition cursor-pointer text-xl">+100 Worker</div>
          <div className="bg-neutral p-6 md:p-8 rounded-xl text-center text-primary font-semibold hover:bg-secondary hover:text-white transition cursor-pointer text-xl">15 Branches</div>

        </div>
      </section>


<section dir="ltr" className="bg-neutral min-h-[90px] m-3 md:m-6 rounded-2xl px-4 md:px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-5">
  <div className='flex flex-wrap justify-center gap-3 w-full md:w-auto'>
    <div className='w-full sm:w-[200px] bg-yellow-50 h-[50px] rounded-2xl flex items-center justify-between px-4' dir='rtl'>
      <span className='text-sm font-bold'>دریافت از بازار</span>
      <img src="/bazar.png" alt="بازار" className='w-8 h-8 object-contain' />
    </div>
    <div className='w-full sm:w-[200px] bg-yellow-50 h-[50px] rounded-2xl flex items-center justify-between px-4' dir='rtl'>
      <span className='text-sm font-bold'>دریافت از فروشگاه</span>
      <img src="/googleStore.png" alt="فروشگاه" className='w-8 h-8 object-contain' />
    </div>
    <div className='w-full sm:w-[200px] bg-yellow-50 h-[50px] rounded-2xl flex items-center justify-between px-4' dir='rtl'>
      <span className='text-sm font-bold'>دریافت از مایکت</span>
      <img src="/micet.png" alt="مایکت" className='w-8 h-8 object-contain' />
    </div>
  </div>
  <div className="flex items-center gap-3 justify-center">
    <div className="flex flex-col items-end text-right" dir="rtl">
      <h2 className="text-xl md:text-2xl font-extrabold text-primary leading-tight">دانلود اپلیکیشن</h2>
      <p className="text-xs md:text-sm text-secondary mt-1">خرید سریع‌تر، مستقیم از گوشی شما</p>
    </div>
    <img src="/icon-light.svg" alt="DigiStore" className="w-12 h-12 md:w-15 md:h-15" />
  </div>
</section>





      <Footer />
    </>
  )
}
