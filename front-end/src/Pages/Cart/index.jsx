  import React from 'react'
  import Navbar from '../../Components/Navbar'

  export default function Cart({ cart, setCart }) {

    const totalPrice = cart.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)

    const items = cart.map((item, index) => {
      return (
        <div key={`${item.id}-${index}`} className="bg-neutral border border-muted rounded-lg p-4">
          <img src={item.image} alt={item.title} className="w-full h-48 object-contain bg-white rounded"/>
          <h3 className="font-bold text-primary mt-3">{item.title}</h3>
          <p className="text-secondary mt-2">Price: ${item.price}</p>
          <p className="text-secondary mt-2">Quantity: {item.quantity}</p>
          <button onClick={() => {
              const newCart = cart.filter((item, Pr) => Pr !== index)
              setCart(newCart)
            }}
            className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700">Remove</button>
        </div>
      )
    })

    return (
      <>
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-6">Shopping Cart</h2>
          {cart.length === 0 ? (<p className="text-secondary">Your cart is empty.</p>):(
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{items}</div>
              <div className="mt-8 p-4 flex bg-neutral border border-muted rounded-lg">
                <p className="text-xl font-bold text-primary">Total Price: ${totalPrice.toFixed(2)}</p>
                <button className='ml-[1050px] rounded-2xl border w-[120px] h-[40px] bg-green-600'>Pay Now</button>
              </div>
            </>
          )}
        </div>
      </>
    )
  }