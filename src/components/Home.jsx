import React from 'react'
import pic from "../../public/photo.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped,Typed } from "react-typed";

function Home() {
  return (
  
    <div name="Home" style={{ backgroundColor: 'rgb(0, 0, 33)' }} className='min-h-screen w-full'>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 pt-16 '>
    
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-10 space-y-2 order-2 md:order-1'>
          <span className='text-white text-xl'>Welcome In My Feed</span>
           <div className=' text-white flex flex-col text-2xl md:text-4xl space-y-1'>
            <h1>Hello, I'm<span className='text-blue-900'> Hina</span> </h1>
            
          {/* <span className='text-red-700 font-bold'>Developer</span> */}
          <ReactTyped
          className='text-blue-900 font-bold'
          strings={["web Developer", "Java Developer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
           </div>
           <br/>
           <p className='text-white text-sm md:text-md text-justify'>Hi! I'm Hina a passionate and curious software developer who loves turning ideas into interactive Applications. I enjoy learning new technologies and building projects that are creative, user-friendly, and functional. Whether it's front-end design or back-end logic, I love the process of problem solving and continuous learning.
        </p>
          <br/>
          {/* social media  platforms */}
          <div className='flex  flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
          <div className='space-y-2'>
            <h1 className='text-white font-bold'>Available on</h1>
            <ul className='flex space-x-5'>
  <li>
    <a href='https://www.linkedin.com/in/hina-569635334/' target='_blank' rel='noopener noreferrer'>
      <FaLinkedin className='text-white text-2xl cursor-pointer' />
    </a>
  </li>
  <li>
    <a href='https://github.com/Hina7253' target='_blank' rel='noopener noreferrer'>
      <FaSquareGithub className='text-white text-2xl cursor-pointer'/>
    </a>
  </li>
  <li>
    <a href='https://www.linkedin.com/in/hina-ali-4b0b1a1b2/' target='_blank' rel='noopener noreferrer'>
      <FaTelegram className='text-white text-2xl cursor-pointer' />
    </a>
  </li>
</ul>
          </div>
          <div className='space-y-2'>
            <h1 className='text-white font-bold'>Currently Working on </h1>
            <div className='flex space-x-5'>
             <SiMongodb  className='text-white text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
             <SiExpress  className='text-white text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            <FaReact className='text-white text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
            <FaNodeJs className='text-white text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
             </div>
          </div>
        </div>
        </div>
        <div className='md:w-1/2 md:ml-48  order-1 flex justify-center order-1 ' >
        <img src={pic} className='rounded-full w-[200px] h-[200px] md:w-[450px] md:h-[450px]' alt="Profile" />
        </div>
        </div>
        </div>
    </div>

  );
}

export default Home;