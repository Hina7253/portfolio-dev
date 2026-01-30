import React from 'react'
import { motion } from 'framer-motion'

 {
  const projects = [
    {
      id: 1,
      title: "Hospital Management System",
      desc: "This project is a web-based application developed using Java, Spring Boot, and MySQL to simplify hospital operations. It manages patient records, doctor appointments, and staff details efficiently.",
      img: "/project.jpeg",
      live: "#",
      code: "#"
    },
    {
      id: 2,
      title: "Prediction ML App (Python | Machine Learning)",
      desc: "A machine learning project built with Python and scikit-learn, which predicts house prices using the Boston Housing dataset. It applies regression techniques with data preprocessing and evaluation to deliver accurate price insights.",
      img: "/project.jpeg",
      live: "#",
      code: "#"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      desc: "A responsive and modern portfolio built with React and Tailwind CSS to showcase my projects, skills, and achievements. It features a clean UI, smooth navigation, and is optimized for both desktop and mobile users.",
      img: "/project.jpeg",
      live: "#",
      code: "#"
    }
  ];

  return (
    <div name="Portfolio" style={{ backgroundColor: 'rgb(0, 0, 33)' }} className='min-h-screen w-full'>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 pt-16'>
        <h1 className='text-3xl font-bold mt-2 mb-0 text-blue-900 text-center'>Portfolio</h1>
        <span className='underline font-semibold text-white block text-center mb-8'>Here are some work done By me</span>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {projects.map(project => (
            <motion.div
              key={project.id}
              style={{ backgroundColor: 'rgb(0,0,48)', borderColor: '#d1d5db' }}
              className='rounded-xl shadow-lg flex flex-col min-h-[400px] mb-8 border-4 transition-all duration-300'
              whileHover={{
                scale: 1.05,
                borderColor: "#f59e42"
              }}
              transition={{ type: "spring", stiffness: 300, duration: 0.3 }}
            >
              <img src={project.img} alt={project.title} className='w-full h-40 object-cover rounded-t-xl' />
              <div className='p-5 flex flex-col items-center w-full flex-1'>
                <h2 className='text-blue-300 text-xl font-bold mb-2'>{project.title}</h2>
                <p className='text-gray-300 mb-4 text-center'>{project.desc}</p>
                <div className='mt-auto w-full flex justify-center space-x-4'>
                  <a href={project.live} target='_blank' rel='noopener noreferrer'>
                    <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition'>Live Demo</button>
                  </a>
                  <a href={project.code} target='_blank' rel='noopener noreferrer'>
                    <button className='bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition'>Source Code</button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
