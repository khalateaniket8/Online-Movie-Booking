
import React, { useEffect, useState } from 'react'
import { listShows } from '../../data/ListShows'
import TitleList from '../../Components/Admin/TitleList'

const ListShows = () => {
  const [shows, setShows] = useState([])

  useEffect(() => {
    setShows(listShows)
  }, [])

  return (
    <div className="min-h-screen bg-[#0f1014] px-6 py-8 text-white">
      <TitleList text1="List" text2="Shows" />

      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-[#1b1c23]">
            <tr>
              <th className="p-4">Movie Name</th>
              <th className="p-4">Show Date & Time</th>
              <th className="p-4">Total Bookings</th>
              <th className="p-4">Earnings</th>
            </tr>
          </thead>

          <tbody>
            {shows.map((show) => (
              <tr key={show.id} className="border-b border-gray-700">
                <td className="p-4">{show.movieName}</td>
                <td className="p-4">{show.showTime}</td>
                <td className="p-4">{show.totalBookings}</td>
                <td className="p-4 text-green-400">
                  ₹{show.earnings.toLocaleString('en-IN')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListShows
