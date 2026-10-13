import React from 'react'

const AdminNavbar = () => {
  return (
    <div className='w-full border-b p-2'>

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
    </div>
  )
}

export default AdminNavbar
