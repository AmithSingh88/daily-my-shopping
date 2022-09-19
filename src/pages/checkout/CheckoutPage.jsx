import React from 'react'
import Product from '../../assets/Product'
import Cart from '../../components/cart/Cart'
import './checkout.css';
import { FcMenu, } from "react-icons/fc";
import { FaOpencart } from 'react-icons/fa';
import { MdAccountCircle } from "react-icons/md";
import { FiSearch, FiCamera } from "react-icons/fi";
import Rtx from '../../assets/Rtx';
import Suit from '../../assets/Suit';

function CheckoutPage() {
  return (
    <div className='cartParent '>

      <div className='container w-96 p-3 bg-white rounded-lg' >
        <div className='flex justify-between'>
          <FcMenu className='text-3xl mt-1 ml-1' />
          <div className='flex text-xl'>
            <FaOpencart className='sk text-4xl mr-1 text-indigo-500' />
            <h1 className='pt-1 text-2xl'>SHOPKART</h1>
          </div>
          <MdAccountCircle className='text-3xl mt-1 text-slate-500' />
        </div>
        <div className='flex justify-around bg-slate-100 border rounded-full my-3'>
          <FiSearch className='text-2xl mt-1 ml-0 pl-0 text-slate-500' />
          <input type='text' className='search w-60 h-8 p-0 pl-1 m-0 bg-slate-100 border-0' />
          <FiCamera className='text-2xl mt-1 mr-1 pl-0 text-slate-500' />
        </div>
        <Cart
          image={<Product />}
          quantity={1}
          productName='Watch'
          price='10000'
          color='black'
          stock='in stock'
        />
        <hr/>
        <Cart
          image={<Rtx/>}
          quantity={1}
          productName='Graphics card'
          price='10000'
          color='black,Grey'
          stock='in stock'
        />
        <hr/>
        <Cart
          image={<Suit />}
          quantity={1}
          productName='Suite'
          price='10000'
          color='black'
          stock='in stock'
        />
        <hr/>

        <h3>Subtotal  &#8377; :30,000</h3>
        <button className='text-white my-3 bg-indigo-400 px-5 py-3 rounded-full'>Proceed to buy (3 items)</button>
      </div>
    </div>
  )
}

export default CheckoutPage