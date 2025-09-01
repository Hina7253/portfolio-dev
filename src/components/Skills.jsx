import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: "HTML", img: "/html.png" },
  { name: "CSS", img: "/images.png" },
  { name: "JavaScript", img: "/js.png" },
  { name: "React", img: "/react.jpeg" },
  { name: "Java", img: "/java2.png" },
  { name: "MySQL", img: "/mysql.png" },
]

function Skills() {
  return (
    <div name="Skills"
      style={{ backgroundColor: 'rgb(0, 0, 48)' }}
      className='min-h-screen w-full flex flex-col items-center justify-center'
    >
      <motion.h1
        className='text-4xl font-bold mt-10 mb-10 text-blue-900'
        whileHover={{ color: "#edefeeff" }}
        transition={{ duration: 0.3 }}
      >
        Technical Skills
      </motion.h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 w-full px-8'>
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{
              scale: 1.15,
              borderColor: "#f59e42"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className='flex flex-col items-center w-full'
          >
            <motion.img
              src={skill.img}
              alt={skill.name}
              className={`w-40 h-40 rounded-xl border-2 mb-4 transition-all duration-300 ${
                skill.name === "Java" ? "object-contain bg-white" : "object-cover"
              }`}
              style={{ borderColor: "#a2a3a5ff" }}
              whileHover={{ borderColor: "#f59e42" }}
              transition={{ duration: 0.3 }}
            />
            <span className='mt-2 text-white font-semibold text-xl'>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills