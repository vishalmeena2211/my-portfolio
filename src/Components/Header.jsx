// Header.js

import React from 'react';
import { useState, useEffect } from 'react';
import PageTransition from '../Components/PageTransition';
import { NavLink } from 'react-router-dom';
import myimg from '../images/Untitled.jpg'

const Header = () => {


  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    // Set showPage to true after a delay (adjust as needed)
    const delay = setTimeout(() => {
      setShowPage(true);
    }, 500);

    // Clear the timeout on component unmount
    return () => clearTimeout(delay);
  }, []);



  return (
    <PageTransition in={showPage}>
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 min-h-screen h-auto bg-black text-white p-1">
      {/* <div className="text-center"> */}
        {/* Rounded Image */}
        <div className='md:w-2/12 md:m-auto md:scale-150 md:h-1/2'>
        <img
          src={myimg} // Replace with your image URL
          alt="Header"
          className="rounded-full md:rounded-none h-[250px] w-[250px] md:h-full md:w-full mx-auto mb-4 object-cover border-4 border-gray-800 shadow-md "
          // style={{ width: '250px', height: '250px' }} // Adjust the size as needed
        />
        </div>

        {/* Header Text */}
        <div className='md:w-7/12 text-center  md:text-start  md:my-auto md:gap-6'>

      
        <h3 className="text-4xl md:text-5xl font-bold mb-2  text-yellow-500">I'M VISHAL MEENA.</h3>
        <h3 className="text-4xl md:text-5xl font-bold mb-2 md:mb-8">PROGRAMMER</h3>
        <p className="text-gray-200 font-semibold w-2/3 md:text-lg mx-auto md:mx-0 mb-4 md:mb-8">Greetings! I'm a third-year Computer Science and Engineering student at Prestige Institute of Management and Research Bhopal. As a dedicated developer and programmer, I specialize in creative problem-solving. Eager to contribute my skills and passion to the ever-evolving world of technology.</p>

        {/* Button */}
        <NavLink to='/about-me'>
        <button className=" text-white px-12 py-3 border border-orange-400 rounded-full">
          MORE ABOUT ME
        </button>
        </NavLink>
      </div>
      {/* </div> */}
    </div>
    </PageTransition>
  );
};

export default Header;
