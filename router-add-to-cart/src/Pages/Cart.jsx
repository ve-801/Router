import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa6";
import { BsFillCartXFill } from "react-icons/bs";

const Cart = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * 0.9; 

  return (
    <div className="p-4 relative flex flex-col justify-center bg-[#f1f3f7] items-center">
      <h1 className="text-2xl font-bold mt-20 mb-4 text-blue-500">Your Cart</h1>
      {cart.length === 0 ? (
        <p className=''>Your cart is empty.</p>
      ) : (
        <div className='min-w-80 w-4/5 rounded-lg shadow-md bg-white'>
          {cart.map(item => (
            <div key={item.id} className="lg:flex mx-10 md:justify-between md:items-center border-b md:py-4">
              <div className='flex-row mt-4 md:flex gap-8 md:flex-row'>
                <div className='flex justify-center mb-3 md:flex'>
                <img src={item.image} alt={item.title} className="min-w-20 min-h-20 max-w-40 max-h-40 lg:min-w-20 lg:min-h-20 lg:max-w-20 lg:max-h-20 object-contain" />
                </div>
                <div className='flex ml-4 text-left flex-col justify-between'>
                <h2 className="text-xl  w-11/12">{item.title}</h2>
                <p className='text-green-500 text-2xl font-bold'>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                
              </div>
              <div className="flex justify-between mx-4 lg:flex-row gap-3 mb-3 lg:mb-0 items-center">
                <div className='flex p-2 rounded-full bg-[#fff6ef]'>
                <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className='border-gray-500 bg-white border-[1px] hover:bg-orange-500 hover:text-white px-3 py-1  rounded-full  border-1'>-</button>
                <h1 className='w-12  text-center'> <span className='text-xl'>{item.quantity}</span></h1>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className='border-gray-500 border-[1px] bg-white hover:bg-orange-500 hover:text-white px-3 py-1  rounded-full  border-1'>+</button>
                </div>     
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-500">Remove</button>

              </div>
            </div>
          ))}
          <div className="mt-4 w-11/12 md:flex justify-around gap-48 mb-5 items-center text-center">
            <div className='text-left ml-12 min-w-64 lg:ml-0'>
            <p className="text-xl font-bold text-blue-500">Total: <span className='line-through opacity-70 text-base text-red-500'>${totalPrice.toFixed(2)}</span> <span className='text-black'>10% OFF</span> </p>
            <p className="text-xl font-bold text-blue-500">
              Discounted Price: <span className='text-green-500 font-bold'>${discountedPrice.toFixed(2)}</span>
            </p>
            </div>
            <div className='flex justify-center'>
            <button
              onClick={clearCart}
              className="bg-red-500 hover:bg-red-600 flex items-center md:flex md:items-center gap-2 text-white px-4 py-2  md:ml-0 rounded-lg mt-2">
              Clear  <BsFillCartXFill />
            </button>
            </div>
            
          </div>
        </div>
      )}
      <button
        onClick={() => navigate('/')}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
        Close
      </button>
    </div>
  );
};

export default Cart;
