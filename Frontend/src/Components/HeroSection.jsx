
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative h-screen w-full bg-[url("https://wallpaperaccess.com/full/787536.jpg")] bg-cover bg-no-repeat bg-center flex flex-col justify-center overflow-hidden mt-5'>

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent'></div>
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20'></div>

      <div className='relative z-10 px-6 md:px-12 lg:px-16 max-w-4xl'>

        <h1 className='text-3xl md:text-4xl text-red-500 font-extrabold tracking-widest mb-4'>
          <span className='border-2 border-white bg-white text-black px-2 py-1 mr-2'>
            MARVEL
          </span>
          <span className='text-gray-100'>STUDIOS</span>
        </h1>

        <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl leading-tight'>
          Guardians of the Galaxy
        </h1>

        <div className='flex flex-wrap items-center gap-x-3 gap-y-2 mt-5 text-sm md:text-base text-gray-300'>

          <span className='text-red-400 font-semibold'>Action</span>
          <span className='text-gray-500'>|</span>
          <span>Adventure</span>
          <span className='text-gray-500'>|</span>
          <span>Sci-Fi</span>

          <span className='flex items-center gap-1'>
            <i className="ri-calendar-line text-red-400"></i>
            2026
          </span>

          <span className='flex items-center gap-1'>
            <i className="ri-timer-line text-red-400"></i>
            2h 12m
          </span>
        </div>

        <p className='mt-6 max-w-2xl text-sm md:text-lg leading-7 text-gray-300'>
          Join the legendary Guardians on an epic intergalactic adventure
          filled with action, humor, and unforgettable moments.
        </p>

        <div className='flex flex-wrap gap-4 mt-8'>

          <button className='group flex items-center gap-3 px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-1 active:scale-95 transition-all duration-300'>
            Explore Movies
            <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
          </button>

          <button className='flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 hover:border-white/60 active:scale-95 transition-all duration-300'>
            <i className="ri-play-circle-line text-xl"></i>
            Watch Trailer
          </button>

        </div>

      </div>
    </div>
  )
}

export default HeroSection
