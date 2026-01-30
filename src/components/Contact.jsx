
import { FaUser, FaEnvelope, FaCommentDots, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa'

function Contact() {
  return (
    <div name="Contact"
      style={{ backgroundColor: 'rgb(0, 0, 33)' }}
      className='min-h-screen w-full flex items-center justify-center relative overflow-hidden'
    >
      {/* Animated circles in background */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
      <div className='max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 mt-10 relative z-10'>
        <h2 className='text-3xl font-bold mb-6 text-blue-700 text-center'>Contact Me</h2>
        <form
          action="https://getform.io/f/awnyynnb"
          method="POST"
          className='flex flex-col gap-6'
        >
          <div className='relative'>
            <FaUser className='absolute left-3 top-3 text-blue-400' />
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              className='pl-10 border-2 border-blue-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500 transition'
              required
            />
          </div>
          <div className='relative'>
            <FaEnvelope className='absolute left-3 top-3 text-blue-400' />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='pl-10 border-2 border-blue-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500 transition'
              required
            />
          </div>
          <div className='relative'>
            <FaCommentDots className='absolute left-3 top-3 text-blue-400' />
            <textarea
              name='message'
              placeholder='Your Message'
              className='pl-10 border-2 border-blue-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-blue-500 transition'
              rows={4}
              required
            />
          </div>
          <button
            type='submit'
            className='bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg'
          >
            Send Message
          </button>
        </form>

        {/* Social Icons & Footer */}
        <div className='mt-8 flex flex-col items-center space-y-4'>
          <div className='flex space-x-6'>
            <a href='https://www.linkedin.com/in/hina-569635334/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-blue-700 text-2xl hover:scale-125 transition cursor-pointer' />
            </a>
            <a href='https://github.com/Hina7253' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='text-gray-800 text-2xl hover:scale-125 transition cursor-pointer' />
            </a>
            <a href='https://t.me/yourtelegram' target='_blank' rel='noopener noreferrer'>
              <FaTelegram className='text-blue-500 text-2xl hover:scale-125 transition cursor-pointer' />
            </a>
          </div>
          <div className='text-gray-500 text-sm text-center'>
            Made with <span className='text-red-500'>❤️</span> by Hina<br />
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
