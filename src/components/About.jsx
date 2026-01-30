import React from 'react';

{
  return (
    <div name="About" style={{ backgroundColor: 'rgb(0, 0, 48)' }} className='min-h-screen'>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
        <div className='flex flex-col md:flex-row items-center'>
          {/* Left: Image */}
          <div className='md:w-1/2 flex justify-center mb-8 md:mb-0'>
            <img src="/cover.jpg" className='rounded-full w-[300px] h-[300px] md:w-[420px] md:h-[420px]' alt="Profile" />
          </div>
          {/* Right: Text */}
          <div className='md:w-1/2'>
            <h1 className='text-3xl font-bold mb-5 text-blue-900'>About</h1>
            <p className='text-white'>
              Hello! I’m Hina Kumari, a curious mind with a passion for technology and problem-solving. Currently, I’m pursuing my Bachelor’s in Computer Applications, where I’m constantly exploring new ideas and sharpening my skills in programming and software development.
            </p>
            <p className='text-white mt-4'>
              I believe learning is a continuous journey, and that’s why I always keep myself open to new tools, technologies, and concepts. Coding for me is not just about writing logic — it’s about creating something useful, impactful, and meaningful.
            </p>
            <p className='text-white mt-4'>
              Apart from academics, I enjoy experimenting with designs, improving my logical thinking, and building a mindset that balances creativity with structure. These qualities help me stay focused, adaptable, and eager to grow.
            </p>
            <p className='text-white mt-4'>
              My long-term goal is to become a professional software developer who can contribute to innovative solutions while continuing to learn and evolve in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


