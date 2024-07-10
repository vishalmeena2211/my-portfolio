import React from 'react'
import RightSidebar from '../Components/RightSidebar'
import Header from '../Components/Header'
import ContactUs from './ContactUs'
import MyPortFolio from './MyPortFolio'
import Blogs from './Blogs'
import AboutMe from './AboutMe'
import { Routes,Route } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-black'>
      <RightSidebar/>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/about-me' element={<AboutMe/>}/>
        <Route path='/my-work' element={<MyPortFolio/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='*' element={<Header/>}/>
      </Routes>

      
    </div>
  )
}

export default Home
