import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='h-screen flex flex-col '>
      <AdminNavbar/>

      <div className='flex flex-1 overflow-hidden'>
        <AdminSidebar/>
      
      <div className='flex-1 p-6 md:px-10 overflow-y-auto'>
        <Outlet/>
      </div>
    </div>
    </div>
  )
}

export default Layout
