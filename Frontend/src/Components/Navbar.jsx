
import { useClerk, UserButton, useUser } from '@clerk/react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const {user} = useUser()
  const{openSignIn} = useClerk()

  const navigate = useNavigate()

  return (
    <div className='fixed top-5 left-9 z-50 h-20 w-full p-6 flex items-center justify-between px-6 py-5 md:px-16 lg:px-36 max-md:top-0 max-md:left-0'>

<h1 className="ml-9 text-3xl md:text-4xl font-extrabold tracking-tight
  text-white cursor-pointer select-none
  hover:scale-105 transition-all duration-300 ease-in-out
  drop-shadow-[0_0_12px_rgba(220,38,38,0.15)]">

  <span className="text-red-600 text-4xl md:text-5xl font-black
    drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]">
    Q
  </span>
  <span className="hover:text-red-400 transition-colors duration-300">
    uickShow
  </span>
</h1>

<div
  className={`z-50 flex flex-row items-center gap-8 px-8 py-3
  rounded-full border border-white/10 bg-white/5 backdrop-blur-xl
  text-white font-medium
  [&>a]:relative [&>a]:transition-all [&>a]:duration-300
  hover:[&>a]:text-red-400
  max-md:absolute max-md:top-0 max-md:left-0
  max-md:h-screen max-md:flex-col max-md:justify-center
  max-md:rounded-none max-md:bg-black/95 max-md:backdrop-blur-2xl
  max-md:text-lg max-md:gap-10 max-md:overflow-hidden
  transition-[width,opacity,visibility] duration-300 ease-in-out
  ${
    isOpen
      ? 'max-md:w-full max-md:visible max-md:opacity-100'
      : 'max-md:w-0 max-md:invisible max-md:opacity-0'
  }`}
>
  <i
    className="absolute top-6 right-6 hidden md:hidden max-md:block
    text-3xl text-gray-300 hover:text-red-500 cursor-pointer
    transition-colors duration-300 ri-close-line"
    onClick={() => setIsOpen(false)}
  ></i>

  <Link onClick={() => setIsOpen(false)} to="/">
    Home
  </Link>

  <Link onClick={() => setIsOpen(false)} to="/movies">
    Movies
  </Link>

  <Link onClick={() => setIsOpen(false)} to="/theaters">
    Theaters
  </Link>

  <Link onClick={() => setIsOpen(false)} to="/releases">
    Releases
  </Link>

  <Link onClick={() => setIsOpen(false)} to="/favorites">
    Favorites
  </Link>
</div>

    <div className='flex flex-row gap-13'>
        <h2><i className="max-md:ml-9 max-md:hidden w-8 h-8 text-2xl cursor-pointer  ri-search-line"></i></h2>
       
       {!user ? (
<button
  onClick={openSignIn}
  className="text-sm md:text-base font-semibold px-5 py-2.5 rounded-xl
  bg-amber-600 text-white border border-amber-500
  hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-600/30
  active:scale-95 transition-all duration-300 ease-in-out
  focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black
  max-md:px-4 max-md:py-2 cursor-pointer"
>
  Log In
</button>
      ) : (
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label='myBookings' labelIcon={<h2><i className="w-15 ri-ticket-2-line"></i></h2>} onClick={() => navigate('/mybookings') } />
          </UserButton.MenuItems>
        </UserButton>
      )
    }
    </div>
    
   
   <h2><i className="max-md:ml-5 w-8 h-8 md:hidden max-md:text-2xl max-md:mr-10 cursor-pointer ri-menu-line" onClick={() => {
    setIsOpen(true)
   }}></i></h2>
    </div>
  )
}

export default Navbar
