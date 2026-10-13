import React from 'react'
import { LayoutDashboard, LayoutDashboardIcon, ListCollapseIcon, ListIcon, SquarePlusIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {

    const user = {
        firstName: 'Admin',
        lastName: 'User',
        imageUrl: "https://static.vecteezy.com/system/resources/previews/036/885/313/non_2x/blue-profile-icon-free-png.png"
    }

    const adminNavLinks = [
        {name: 'Dashboard', path: '/admin', icon: <LayoutDashboardIcon/>},
        {name: 'Add Shows', path: '/admin/add-shows', icon: <SquarePlusIcon/>},
        {name: 'List Shows', path: '/admin/list-shows', icon: <ListIcon/>},
        {name: 'List Booking', path: '/admin/list-bookings', icon: <ListCollapseIcon/>}
    ]
    
  return (
    <div className='h-[calc(100vh-64px) md:flex flex-col items-center pt-8 w-50 border-r border-gray-300/20 text-sm'>
        <div className='h-14 w-14 rounded-full mx-auto overflow-hidden'>
            <img 
            src={user.imageUrl}
            alt='Admin Profile'
            className='h-full w-full object-cover' />
        </div>
        <p className='mt-2 ml-2 text-base'>{user.firstName} {user.lastName}</p>

        <div className='w-full'>
            {adminNavLinks.map((link, index) =>(
               <NavLink key={index} to={link.path} className={({isActive}) => `relative flex items-center max-md:justify-center gap-3 w-full px-5 py-2.5 mt-3 first:mt-6 text-gray-400 ${isActive ? 'bg-primary/15 text-primary' : ''} `}>
                    {({isActive})=>(
                        <>
                        {link.icon}
                        <span>{link.name}</span>
                        </>
                    )}

               </NavLink>
            ))}

        </div>
      
    </div>
  )
}

export default AdminSidebar
