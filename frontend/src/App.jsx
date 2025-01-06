import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import About from './pages/About';
import Home from './pages/Home';
import Placeorder from './pages/Placeorder';
import Orders from './pages/Orders';
import Product from './pages/Product';
import Login from './pages/Login';
import Navbar from './Components/navbar';
import Footer from './Components/Footer';
const App = () => {
  return (
    
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Collection' element={<Collection/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Placeorder' element={<Placeorder/>}></Route>
        <Route path='/Orders' element={<Orders/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
