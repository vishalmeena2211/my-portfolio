// ContactUs.js

import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import { useState, useEffect } from 'react';
import PageTransition from '../Components/PageTransition';



const MyPortFolio = () => {


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

    <div className="flex flex-col bg-gray-900 items-center justify-center h-auto  text-white ">
      {/* Get in Touch Heading */}
      <h2 className="md:text-6xl text-4xl font-[900] my-20 leading-3">MY <span className='text-yellow-500'>PORTFOLIO</span></h2>

      {/* Contact Sections */}
      <div className="flex justify-center items-center">

        <ProjectCard/>
       
      </div>
    </div>
    </PageTransition>
  );
};

export default MyPortFolio;
