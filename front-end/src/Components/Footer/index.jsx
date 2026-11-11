import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-primary text-white mt-16'>
      <div className='max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
        <div>
          <h2 className='text-2xl font-bold mb-4'>Digi<span className='text-muted'>Store</span></h2>
          <p className='text-neutral leading-7'>
            Your favorite place to discover digital products
            with great quality and competitive prices.
          </p>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
          <ul className='flex flex-col gap-3 text-neutral'>
            <li><Link to='/' className='hover:text-white transition'>Home</Link></li>
            <li><Link to='/products' className='hover:text-white transition'>Products</Link></li>
            <li><Link to='/about' className='hover:text-white transition'>About Us</Link></li>
            <li><Link to='/profile' className='hover:text-white transition'>My Profile</Link></li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-4'>Categories</h3>
          <ul className='flex flex-col gap-3 text-neutral'>
            <li>Laptops</li>
            <li>Headphones</li>
            <li>Phones</li>
            <li>Chargers</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
          <ul className='flex flex-col gap-3 text-neutral'>
            <li>Email: support@digistore.com</li>
            <li>Customer Support</li>
            <li>Online Shopping</li>
          </ul>
        </div>
      </div>

      <div className='border-t border-secondary px-6 py-5 text-center text-sm text-neutral'>
        <p>© {new Date().getFullYear()} DigiStore. All rights reserved.</p>
      </div>

    </footer>
  )
}
