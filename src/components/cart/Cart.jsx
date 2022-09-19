import React from 'react';
// import { FaRupeeSign } from 'react-icons/fa';
import './cart.css';


function Cart(props) {
  const {image, quantity, productName, price, color, stock}  = props
  return (
    <div className='w-100 p-2 flex '>
      <div className='w-29flex flex-col justify-center'>
        <div className='w-14 m-2'>{image}</div>
        <div className='flex w-24 p-1 justify-between bg-slate-200 rounded-full'>
          <h4 className='p-1 text-xs  cursor-pointer'>➖</h4>
          {quantity}
          <h4 className='p-1 text-xs rounded-full cursor-pointer'>➕</h4>
        </div>
      </div>
      <div className=' text-left  ml-3'>
        <h2>{productName}</h2>
        <h2>&#8377;{price}</h2>
        <h2>Color:{color}</h2>
        <h2 className='text-lime-400 '>{stock}</h2>
      <div>
        <button className='btn1 rounded-full text-xs'>Delete</button>
        <button className='btn2 rounded-full text-xs'>See more like this</button>
      </div>
      </div>
    </div>
  )
}
export default Cart

