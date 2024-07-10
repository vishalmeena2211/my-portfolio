// RightSidebar.js

import React, { useEffect, useState } from 'react';
import { FaHome, FaPencilAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdWork, MdEmail } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Overlay.css';



const MobileMenu = ({ isOpen, onClose, isActive }) => {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames={`overlay-left`} unmountOnExit>
      <div
        className={`${isOpen ? 'w-screen' : 'w-0 -z-10'
          } md:hidden h-screen fixed z-40 transition-all ease-in duration-300 backdrop-blur-xl bg-gray-800 flex flex-col items-start justify-start py-20 gap-10 text-white`}
      >

        <div className='flex flex-col justify-between text-lg font-semibold pl-6 text-start gap-3'>
          <NavLink to='/' onClick={onClose} className={`flex gap-4 hover:text-yellow-500 ${isActive('/') && 'text-yellow-500'} items-center my-1`}>
            <FaHome />
            <span>HOME</span>
          </NavLink>
          <hr className='w-screen opacity-10' />
          <NavLink to='/about-me' onClick={onClose} className={`flex gap-4 hover:text-yellow-500 ${isActive('/about-me') && 'text-yellow-500'} items-center my-1`}>
            <MdEmail />
            <span>ABOUT ME</span>
          </NavLink>
          <hr className='w-screen opacity-10' />
          <NavLink to='/my-work' onClick={onClose} className={`flex gap-4 hover:text-yellow-500 ${isActive('/my-work') && 'text-yellow-500'} items-center my-1`}>
            <MdWork />
            <span>WORKS</span>
          </NavLink>
          <hr className='w-screen opacity-10' />
          <NavLink to='/contact' onClick={onClose} className={`flex gap-4 hover:text-yellow-500 ${isActive('/contact') && 'text-yellow-500'} items-center my-1`}>
            <IoPerson />
            <span>CONTACT</span>
          </NavLink>
          <hr className='w-screen opacity-10' />
          <NavLink to='/blogs' onClick={onClose} className={`flex gap-4 hover:text-yellow-500 ${isActive('/blogs') && 'text-yellow-500'} items-center my-1`}>
            <FaPencilAlt />
            <span>BLOG</span>
          </NavLink>
        </div>
      </div>
    </CSSTransition>


  );
};

const RightSidebar = () => {


  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  useEffect(() => {
    setMobileMenuOpen(false);

  }, [])



  return (
    <>

      <div className="fixed top-0 right-0 h-full hidden md:flex flex-col items-end gap-3 justify-center p-4 text-white">
        <NavLink to='/' className={`rounded-full relative bg-gray-700 w-12 hover:w-32 hover:bg-yellow-600 ${isActive('/') && 'bg-yellow-500'} group transition-width ease-in-out duration-300 mb-2 flex justify-end items-center overflow-hidden `}>
          <span className='-translate-x-14 absolute group-hover:block font-semibold  text-lg' >HOME</span>
          <FaHome className='text-2xl m-3' />
        </NavLink>
        <NavLink to='/about-me' className={`rounded-full relative bg-gray-700 w-12 hover:w-32 hover:bg-yellow-600 group transition-width ${isActive('/about-me') && 'bg-yellow-500'} ease-in-out duration-300 mb-2 flex justify-end items-center overflow-hidden`}>
          {/* Icon 2 */}
          <span className='-translate-x-14 absolute group-hover:block font-semibold  text-lg' >ABOUT</span>
          <IoPerson className='text-2xl m-3' />
        </NavLink>
        <NavLink to='/my-work' className={`rounded-full relative bg-gray-700 w-12 hover:w-32 hover:bg-yellow-600 group transition-width ${isActive('/my-work') && 'bg-yellow-500'} ease-in-out duration-300 mb-2 flex justify-end items-center overflow-hidden`}>
          {/* Icon 3 */}
          <span className='-translate-x-14 absolute group-hover:block font-semibold  text-lg' >WORK</span>
          <MdWork className='text-2xl m-3' />
        </NavLink>
        <NavLink to='/contact' className={`rounded-full relative bg-gray-700 w-12 hover:w-36 hover:bg-yellow-600 group transition-width ${isActive('/contact') && 'bg-yellow-500'} ease-in-out duration-300 mb-2 flex justify-end items-center overflow-hidden`}>
          {/* Icon 4 */}
          <span className='-translate-x-12 absolute group-hover:block font-semibold  text-lg' >CONTACT</span>
          <MdEmail className='text-2xl m-3' />
        </NavLink>
        <NavLink to='/blogs' className={`rounded-full relative bg-gray-700 w-12 hover:w-32 hover:bg-yellow-600 group transition-width ${isActive('/blogs') && 'bg-yellow-500'} ease-in-out duration-300 mb-2 flex justify-end items-center overflow-hidden`}>
          {/* Icon 5 */}
          <span className='-translate-x-14 absolute group-hover:block font-semibold  text-lg' >BLOG</span>
          <FaPencilAlt className='text-2xl m-3' />
        </NavLink>
      </div>
      <button className="fixed z-50 top-10 right-10 md:hidden flex flex-col items-end justify-start text-3xl rounded-md p-1 bg-gray-700 text-white" onClick={toggleMobileMenu} >
        {isMobileMenuOpen ? <RxCross2 /> : <IoIosMenu />}
      </button>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} isActive={isActive} />
    </>
  );
};

export default RightSidebar;
