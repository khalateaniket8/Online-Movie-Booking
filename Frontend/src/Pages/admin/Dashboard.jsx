import { ChartLine, CircleDollarSign, CirclePlay, User } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { dummyDashboardData, recentBookings } from '../../data/dummyDashboardAdmin';
import Title from '../../Components/Admin/Title';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    const currency = import.meta.env.VITE_CURRENCY

    const [dashboardData, setDashboardData] = useState({
      totalBookings: 0,
      totalRevenue: 0,
      activeShows: [],
      totalUsers: 0
    });
    
    const [loading, setLoading] = useState(true);

    const dashboardCards = [
      {title: "Total Bookings", value: dashboardData.totalBookings || 0, icon: <ChartLine />},
      {title: "Total Revenue", value: dashboardData.totalRevenue || 0, icon: <CircleDollarSign />},
      {title: "Active Shows", value: dashboardData.activeShows || 0, icon: <CirclePlay />},
      {title:"Total Users", value: dashboardData.totalUsers ||0, icon:  <User />}
    ]

     const fetchDashboardData = async() => {
      setDashboardData(dummyDashboardData)
      setLoading(false)
     };

     useEffect(() => {
      fetchDashboardData();
     }, []);

     if(loading) {
      return (
        <div className='flex min-h-screen items-center justify-center'>
          <p className='text-xl animate-pulse'>Loading Dashboard....</p>
        </div>
      )
     }

  return (
    <div>
      <Title text1="Admin" text2="Dashboard"/>

      <div className='flex flex-wrap gap-5 w-full mt-5'>
        {dashboardCards.map((card, index) => (
          <div key={index} className='flex items-center justify-between px-4 py-3 border border-gray-900 rounded-md max-w-50 bg-gray-900 w-full'>
            <div>
              <h1>{card.title}</h1>
              <p className='font-bold'>{card.value}</p>
              </div>

              <div>
                {card.icon}
                </div>
           
          </div>
        ))}
      </div>

      <p className='mt-10 text-lg font-medium'>Active Shows</p>
      <div className='flex flex-wrap gap-5 w-full mt-8'>
        {recentBookings.map((show) => (
          <div
          className='border-2 border-gray-900 rounded-2xl'
          key={show._id}>
         <img className='w-70 h-70'  src={show.movieImage} />
         <h1 className='ml-2 mb-3'>{show.movieTitle}</h1>

         <div className='flex justify-between m-4'>
          <h2>${show.price}</h2>
          <p>⭐{show.rating}</p>
          </div>

          <div className='gap-3 flex flex-row ml-10'>
            <p>{show.showDate}  |</p>
            <p >{show.showTime}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Dashboard
