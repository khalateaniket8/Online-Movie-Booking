
import React, { useState } from 'react'

const seatRows = ['A', 'B', 'C', 'D', 'E']
const seatsPerRow = 8
const ticketPrice = 200

const BookingSection = ({ movie }) => {
  const [date, setDate] = useState('')
  const [showTime, setShowTime] = useState('')
  const [selectedSeats, setSelectedSeats] = useState([])
  const [message, setMessage] = useState('')

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    )
  }

  const totalAmount = selectedSeats.length * ticketPrice

  const payNow = () => {
    if (!date || !showTime || selectedSeats.length === 0) {
      setMessage('Please select date, show time and seats.')
      return
    }

    const existingBookings = JSON.parse(
      localStorage.getItem('myBookings') || '[]'
    )

    const newBooking = {
      id: Date.now(),
      movieId: movie.id,
      movieTitle: movie.title,
      movieImage: movie.image,
      date,
      showTime,
      seats: selectedSeats,
      tickets: selectedSeats.length,
      totalAmount,
      status: 'Confirmed',
      bookedAt: new Date().toISOString()
    }

    localStorage.setItem(
      'myBookings',
      JSON.stringify([...existingBookings, newBooking])
    )

    window.dispatchEvent(new Event('bookingsUpdated'))

    setMessage(
      `Booking confirmed! Seats: ${selectedSeats.join(', ')} | Total: ₹${totalAmount}`
    )

    setSelectedSeats([])
  }

  return (
    <div className="bg-[#111114] border border-white/10 rounded-2xl p-6 md:p-8 text-white">
      <h2 className="text-2xl font-bold mb-6">Book Your Tickets</h2>

      <label className="block mb-2 text-gray-300">Select Date</label>
      <input
        type="date"
        min={new Date().toISOString().split('T')[0]}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full bg-[#202024] border border-white/10 rounded-lg p-3 mb-5 text-white"
      />

      <label className="block mb-2 text-gray-300">Select Show Time</label>
      <div className="flex flex-wrap gap-3 mb-6">
        {['10:00 AM', '1:30 PM', '4:30 PM', '7:30 PM', '10:00 PM'].map(
          (time) => (
            <button
              key={time}
              onClick={() => setShowTime(time)}
              className={`px-4 py-2 rounded-lg border ${
                showTime === time
                  ? 'bg-red-600 border-red-600'
                  : 'border-white/20 hover:border-red-500'
              }`}
            >
              {time}
            </button>
          )
        )}
      </div>

      <div className="bg-[#202024] rounded-xl p-4 mb-6">
        <div className="text-center text-gray-400 mb-4">SCREEN</div>
        <div className="h-1 bg-red-500 rounded-full mb-8 shadow-[0_0_15px_#ef4444]" />

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 max-w-lg mx-auto">
          {seatRows.flatMap((row) =>
            Array.from({ length: seatsPerRow }, (_, i) => {
              const seat = `${row}${i + 1}`
              const isSelected = selectedSeats.includes(seat)

              return (
                <button
                  key={seat}
                  onClick={() => toggleSeat(seat)}
                  className={`py-2 rounded-md text-sm border ${
                    isSelected
                      ? 'bg-red-600 border-red-600 text-white'
                      : 'border-green-500 text-green-400 hover:bg-green-500/20'
                  }`}
                >
                  {seat}
                </button>
              )
            })
          )}
        </div>

        <div className="flex justify-center gap-5 mt-6 text-xs text-gray-300">
          <span>🟩 Available</span>
          <span>🟥 Selected</span>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-white/10 pt-5 mb-5">
        <div>
          <p className="text-gray-400 text-sm">Selected Seats</p>
          <p className="font-medium">
            {selectedSeats.length
              ? selectedSeats.join(', ')
              : 'No seats selected'}
          </p>
        </div>

        <div className="text-right">
          <p className="text-gray-400 text-sm">
            ₹{ticketPrice} × {selectedSeats.length}
          </p>
          <p className="text-2xl font-bold text-green-400">
            ₹{totalAmount}
          </p>
        </div>
      </div>

      <button
        onClick={payNow}
        className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition"
      >
        Pay Now ₹{totalAmount}
      </button>

      {message && (
        <p className="mt-4 text-center text-sm text-green-400">
          {message}
        </p>
      )}

      <p className="text-gray-500 text-xs text-center mt-4">
        Demo payment only. No real money will be charged.
      </p>
    </div>
  )
}

export default BookingSection