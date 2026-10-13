
import React, { useEffect, useState } from 'react'
import TitleList from '../../Components/Admin/TitleList'

const dummyBookings = [
  {
    id: 'BK1001',
    userName: 'Aniket Khalate',
    movieName: 'The Batman',
    showTime: '15 Oct 2026, 01:30 PM',
    seats: ['A1', 'A2'],
    amount: 400,
    status: 'Confirmed',
  },
  {
    id: 'BK1002',
    userName: 'Rahul Patil',
    movieName: 'Avengers: Endgame',
    showTime: '16 Oct 2026, 06:00 PM',
    seats: ['B3', 'B4', 'B5'],
    amount: 600,
    status: 'Confirmed',
  },
  {
    id: 'BK1003',
    userName: 'Priya Sharma',
    movieName: 'Joker',
    showTime: '17 Oct 2026, 03:30 PM',
    seats: ['C2'],
    amount: 200,
    status: 'Cancelled',
  },
]

const ListBooking = () => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    setBookings(dummyBookings)
  }, [])

  return (
    <div className="min-h-screen bg-[#0f1014] px-6 py-8 text-white">
      <TitleList text1="List" text2="Bookings" />

      <div className="mt-8 overflow-x-auto rounded-lg border border-gray-800">
        <table className="w-full min-w-[1000px] text-left">
          <thead className="bg-[#1b1c23] text-gray-300">
            <tr>
              <th className="p-4">Booking ID</th>
              <th className="p-4">User Name</th>
              <th className="p-4">Movie Name</th>
              <th className="p-4">Show Date & Time</th>
              <th className="p-4">Seats</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t border-gray-800 hover:bg-[#181920]"
              >
                <td className="p-4 text-gray-400">
                  {booking.id}
                </td>

                <td className="p-4">
                  {booking.userName}
                </td>

                <td className="p-4 font-medium">
                  {booking.movieName}
                </td>

                <td className="p-4 text-gray-400">
                  {booking.showTime}
                </td>

                <td className="p-4">
                  {booking.seats.join(', ')}
                </td>

                <td className="p-4 text-green-400">
                  ₹{booking.amount.toLocaleString('en-IN')}
                </td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      booking.status === 'Confirmed'
                        ? 'bg-green-500/15 text-green-400'
                        : 'bg-red-500/15 text-red-400'
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}

            {bookings.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="p-8 text-center text-gray-400"
                >
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListBooking