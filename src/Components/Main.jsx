import React from 'react'
import FloatingComponent from "./FloatingComponent";

const Main = () => {
  return (
    <div id='home' className='w-full h-[91vh] bg-[#0F1627] flex flex-col gap-8 p-50'>
      <FloatingComponent count={10} color="bg-sky-400/20" blur="blur-2xl" zIndex="z-0" />
      <h1 className='text-6xl text-white font-bold'>Hi, I'm Nikhil – Full Stack Web Developer</h1>
      <p className='text-[#8795AA] text-[21px]'>I craft interactive, scalable web applications with React & Node.js</p>
      <div className="buttons gap-10 flex">
        <a
          href="#projects"
          className='bg-[#6A9BF8] text-[#551A8B] font-semibold px-6 py-3 rounded-md cursor-pointer relative h-12 w-40 overflow-hidden border border-green-500 shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-300 hover:before:-translate-x-40 hover:-translate-y-[2px] flex items-center justify-center'
        >
          View Projects
        </a>
        <a
          href="/Resume.pdf"
          download
          className='bg-[#0E1627] border border-[#38BDF8] text-[#38BDF8] font-semibold px-6 py-3 rounded-md cursor-pointer relative h-12 overflow-hidden shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-300 hover:before:-translate-x-60 flex items-center justify-center'
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Main