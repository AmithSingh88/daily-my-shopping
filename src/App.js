import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckoutPage from './pages/checkout/CheckoutPage';
import LoginPage from './pages/loginpage/LoginPage';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/checkOut' element={<CheckoutPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
