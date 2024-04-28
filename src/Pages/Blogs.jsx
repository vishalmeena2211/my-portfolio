// Blogs.js

import React from 'react';
import { useState, useEffect } from 'react';
import PageTransition from '../Components/PageTransition';


const BlogCard = ({ title, content, }) => {
    return (
      <div className="bg-gray-800 rounded-lg w-full h-96 shadow-md mb-4">
        <div className='w-full'>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjv8k9FpJH5AvquxbVyd06B5UludsXYeHuTLTGllucw&s" alt="" className='h-full w-full object-cover rounded-t-lg'/>
        </div>
        <div className='p-4'>
        <h3 className="text-lg font-semibold mb-2">{title} Lorem ipsum dolor sit amet consectetur.</h3>
        <p className="text-gray-400 text-md">{content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ab provident animi laboriosam quidem.</p>
        </div>
      </div>
    );
  };

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);





  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    // Set showPage to true after a delay (adjust as needed)
    const delay = setTimeout(() => {
      setShowPage(true);
    }, 500);

    // Clear the timeout on component unmount
    return () => clearTimeout(delay);
  }, []);




  // Sample blog data
  const blogs = [
    { id: 1, title: 'Blog 1', content: 'Content for Blog 1' },
    { id: 2, title: 'Blog 2', content: 'Content for Blog 2' },
    { id: 3, title: 'Blog 3', content: 'Content for Blog 3' },
    { id: 4, title: 'Blog 4', content: 'Content for Blog 4' },
    { id: 5, title: 'Blog 5', content: 'Content for Blog 5' },
    { id: 6, title: 'Blog 6', content: 'Content for Blog 6' },
    { id: 7, title: 'Blog 7', content: 'Content for Blog 7' },
    { id: 8, title: 'Blog 8', content: 'Content for Blog 8' },
    { id: 9, title: 'Blog 9', content: 'Content for Blog 9' },
    { id: 10, title: 'Blog 10', content: 'Content for Blog 10' },
    { id: 11, title: 'Blog 11', content: 'Content for Blog 11' },
    { id: 12, title: 'Blog 12', content: 'Content for Blog 12' },
    
    // Add more blogs as needed
  ];

  // Number of blogs to show per page
  const blogsPerPage = 6;

  // Calculate the index range for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <PageTransition in={showPage}>
    <div className='text-white bg-gray-900 md:min-h-screen h-auto w-full py-4'>
      {/* Heading */}
      <h2 className="md:text-6xl text-4xl font-[900] leading-3 text-center my-16">MY<span className='text-yellow-500'>BLOGS</span></h2>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-4/5 mx-auto">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} title={blog.title} content={blog.content} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 mx-2 ${
              currentPage === index + 1 ? 'bg-yellow-500 text-white rounded-md' : 'bg-gray-300 text-black rounded-md'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    </PageTransition>
  );
};

export default Blogs;
