import React from 'react';
import { FaEnvelope, FaLock, FaOpencart, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './login.css';

function Login() {

  return (
    <div className='parent'>
   
      <div className='login-container'>

        <div className=' form-container container flex flex-col '>

          <h1><FaOpencart className='logo'/>SHOPKART</h1>

          <div className='flex flex-row'>
            <input type='text' placeholder='Email' className='input border-b-2  mb-6 mt-8' />
            <FaEnvelope className='mail text-slate-500' />
          </div>
          <div className='flex flex-row '>
            <input type='password' placeholder='Password' className='input border-b-2 mb-2 ' />
            <FaLock className='pass text-slate-500' />
          </div>
          <div className='mb-8'>
            <div className='flex flex-row justify-center'>
              <div className='flex flex-row basis-1/2 '>
                <input type="checkbox" className='cb' defaultChecked />
                <h3 className='text-slate-800 text-xs'>Remember me</h3>
              </div>

              <a className=' text-xs  text-slate-800' href='/'>Forgot Password?</a>
            </div>
          </div>
          <div>

            <Link to='/checkOut'className='btn  '>LOGIN</Link>
            <p className='text-slate-800 mt-5 text-sm'>Dont't have an account <a href='/' className='underline underline-offset-2'>Sign-up</a></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login