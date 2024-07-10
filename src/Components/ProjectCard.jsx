// ProjectCards.js

import React, { useState } from 'react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import backgroundImage1 from '../images/1.jpg';



import { RxCross2 } from "react-icons/rx";

import { GoProjectRoadmap } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { VscOpenPreview } from "react-icons/vsc";
import { IoPerson } from "react-icons/io5";

import OverLay from './OverLay';





const Card = () => {
  return (
    <div className="text-white bg-gray-800 md:w-2/5 w-full  mx-auto p-4 rounded-md shadow-md">
      {/* Top Heading */}
      <h2 className="text-2xl font-bold mb-4">Project</h2>

      {/* Two Rows with Two Divs Each */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex gap-4 items-center p-1 rounded-md shadow-md">
          {/* First Div Content */}
          <GoProjectRoadmap/>
          <p className="text-white"> Project : Website</p>
        </div>
        <div className="flex gap-4 items-center p-1 rounded-md shadow-md">
          {/* Second Div Content */}
          <IoPerson/>
          <p className="text-white">Client : Vishal Meena</p>
        </div>
        {/* Add two more divs for the second row */}
        <div className="flex gap-4 items-center p-1 rounded-md shadow-md">
          {/* Third Div Content */}
          <FaCode/>
          <p className="text-white">Langages : Photoshop, Figma</p>
        </div>
        <div className="flex gap-4 items-center p-1 rounded-md shadow-md">
          {/* Fourth Div Content */}
          <VscOpenPreview/>
          <p className="text-white">Preview : <a href="https://vishalmeena2211.github.io/hostsite">hostsite</a></p>
        </div>
      </div>

      {/* Image taking full width and 3/5 height of the container */}
      <div className="relative overflow-hidden" style={{ height: '10%' }}>
        <img
          src={backgroundImage1} // Replace with your image URL
          alt="Project"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

SwiperCore.use([Navigation]);
const ProjectCard = () => {
    const [sliderOpen, setSliderOpen] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);



    const [direction, setDirection] = useState(null);
   
  
    const handleMouseEnter = (event,index) => {
      const { clientX, clientY, target } = event;
    const { left, top, width, height } = target.getBoundingClientRect();

    // Calculate the angle between the mouse position and the center of the card
    const angle = Math.atan2(clientY - (top + height / 2), clientX - (left + width / 2));
    const angleDeg = (angle * 180) / Math.PI;
    console.log(angleDeg)

    // Determine the direction based on the angle
    if (angleDeg >= -45 && angleDeg < 45) {
      setDirection('right');
    } else if (angleDeg >= 45 && angleDeg < 135) {
      setDirection('down');
    } else if (angleDeg >= -135 && angleDeg < -45) {
      setDirection('up');
    } else {
      setDirection('left');
    }
  

    

    setHoveredCards((prevHoveredCards) => {
      const newHoveredCards = [...prevHoveredCards];
      newHoveredCards[index] = true;
      return newHoveredCards;
    });
      // setIsHovered(true);
    };
  
    const handleMouseLeave = (index) => {
      setHoveredCards((prevHoveredCards) => {
        const newHoveredCards = [...prevHoveredCards];
        newHoveredCards[index] = false;
        return newHoveredCards;
      });
      // setIsHovered(false);
    };
  



    const projects = [
        { id: 1, title: 'Project 1', description: 'Mern Full Stack', background: backgroundImage1 },
        { id: 2, title: 'Project 2', description: ' Machine Learning', background: backgroundImage1 },
        { id: 3, title: 'Project 3', description: 'Django Project', background: backgroundImage1 },
        { id:4, title: 'Project 4', description: 'HTML CSS ONLY', background: backgroundImage1 },
        { id:5, title: 'Project 5', description: 'TIC TAC TOE', background: backgroundImage1 },
        { id: 6, title: 'Project 6', description: 'SNAKE GAME', background: backgroundImage1 },
        
        
        // Add more projects as needed
      ];
      const [hoveredCards, setHoveredCards] = useState(Array(projects.length).fill(false));
  
    const handleCardClick = (index) => {
      setSelectedCardIndex(index);
      setSliderOpen(true);
    };
  
    const handleSliderClose = () => {
      setSliderOpen(false);
    };
  
    return (
      <div className='h-full'>
        {/* Project Cards (3 in a row, 3 in a column) */}
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 h-auto w-full ">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative cursor-pointer w-full "
            onClick={() => handleCardClick(index)}
            onMouseEnter={(e) => handleMouseEnter(e,index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              className="bg-cover bg-center h-64 md:w-96 w-64 rounded-md"
              style={{ backgroundImage: `url(${project.background})` }}
            />
            <div className="p-4 absolute bottom-0 left-0 w-full  bg-opacity-80">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-white">{project.description}</p>
            </div>
            <OverLay isHovered={hoveredCards[index]} direction={direction} />
          </div>
        ))}
        </div>
  
        {/* Slider */}
        {sliderOpen && (
          <div className="fixed  top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
            <Swiper
              spaceBetween={20}
              navigation
              initialSlide={selectedCardIndex}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              onSwiperSlide={(swiperSlide) => console.log(swiperSlide)}
            >
              
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <Card/>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="absolute top-32 md:top-10 right-10 z-50  p-3 rounded-md text-white"
              onClick={handleSliderClose}
            >
              <RxCross2 className='text-3xl  bg-gray-600 rounded-md'/>
            </button>
          </div>
        )}
      </div>
    );
  };
  

export default ProjectCard;
