import React from 'react'
// import FloatingComponent from "./FloatingComponent";

const Main = () => {
  return (
    <div id='home' className='relative w-full min-h-[91vh] bg-black flex flex-col justify-center items-center md:items-start px-4 md:px-12 lg:px-24 py-12 md:py-0'>
      {/* Floating Ball */}
      <div
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[140px] h-[140px]
          sm:w-[180px] sm:h-[180px]
          md:w-[250px] md:h-[250px]
          lg:w-[320px] lg:h-[320px]
          max-w-[80vw] max-h-[30vh]
          rounded-full bg-white/20 blur-3xl opacity-50 z-0 animate-floatBall pointer-events-none
        "
      ></div>
      {/* <FloatingComponent count={10} color="bg-sky-400/20" blur="blur-2xl" zIndex="z-0" /> */}
      <div className='flex flex-col gap-6 md:gap-8 max-w-4xl relative z-10'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold text-center md:text-left leading-tight'>
          Hi, I'm Nikhil – <span className='text-white'>Full Stack</span> Web Developer
        </h1>
        <p className='text-gray-400 text-lg md:text-xl lg:text-2xl text-center md:text-left max-w-2xl'>
          I craft interactive, scalable web applications with React & Node.js
        </p>
        <div className="buttons flex flex-col sm:flex-row gap-4 md:gap-6 items-center md:items-start mt-4">
          <a
            href="#projects"
            className='bg-white text-black font-semibold px-8 py-3 rounded-md cursor-pointer relative h-12 w-48 overflow-hidden border border-gray-200 shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-black before:opacity-10 before:duration-700 hover:shadow-white hover:before:-translate-x-49 hover:-translate-y-[2px] flex items-center justify-center text-center'
          >
            View Projects
          </a>
          <a
            href="/Resume.pdf"
            download
            className='bg-black border border-white text-white font-semibold px-8 py-3 rounded-md cursor-pointer relative h-12 w-50 overflow-hidden shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-white hover:before:-translate-x-60 flex items-center justify-center text-center'
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Main