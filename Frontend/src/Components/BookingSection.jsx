
import React, { useState } from 'react'

const BookingSection = ({ movie }) => {
  const today = new Date()

  const minDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  const [date, setDate] = useState('')
  const [showTime, setShowTime] = useState('')
  const [tickets, setTickets] = useState(1)
  const [bookingMessage, setBookingMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const shows = [
    { time: '10:00 AM', seats: 42 },
    { time: '1:30 PM', seats: 28 },
    { time: '4:30 PM', seats: 16 },
    { time: '7:30 PM', seats: 9 },
    { time: '10:00 PM', seats: 35 },
  ]

  const selectedShow = shows.find(
    (show) => show.time === showTime
  )

  const getBookings = () => {
    try {
      return JSON.parse(localStorage.getItem('myBookings')) || []
    } catch {
      return []
    }
  }

  const bookedSeats = selectedShow && date
    ? getBookings()
        .filter(
          (booking) =>
            booking.date === date &&
            booking.showTime === showTime &&
            booking.status !== 'Cancelled'
        )
        .reduce(
          (total, booking) => total + Number(booking.tickets || 0),
          0
        )
    : 0

  const availableSeats = selectedShow
    ? Math.max(0, selectedShow.seats - bookedSeats)
    : 0

  const bookNow = () => {
    setBookingMessage('')
    setMessageType('')

    if (!date || !showTime) {
      setBookingMessage('Please select a date and show time.')
      setMessageType('error')
      return
    }

    if (date < minDate) {
      setBookingMessage('Please select a valid date.')
      setMessageType('error')
      return
    }

    const existingBookings = getBookings()

    const alreadyBooked = existingBookings
      .filter(
        (booking) =>
          booking.date === date &&
          booking.showTime === showTime &&
          booking.status !== 'Cancelled'
      )
      .reduce(
        (total, booking) => total + Number(booking.tickets || 0),
        0
      )

    const remainingSeats = selectedShow.seats - alreadyBooked

    if (tickets > remainingSeats) {
      setBookingMessage('Sorry, not enough seats are available.')
      setMessageType('error')
      return
    }

    const newBooking = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      movieId: movie.id,
      movieTitle: movie.title,
      movieImage: movie.image,
      date,
      showTime,
      tickets,
      status: 'Confirmed',
      bookedAt: new Date().toISOString(),
    }

    try {
      localStorage.setItem(
        'myBookings',
        JSON.stringify([...existingBookings, newBooking])
      )

      window.dispatchEvent(new Event('bookingsUpdated'))

      setBookingMessage(
        `${movie.title} booked successfully! Visit My Bookings to see your ticket details.`
      )
      setMessageType('success')
    } catch {
      setBookingMessage('Unable to save booking. Please try again.')
      setMessageType('error')
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-[#111114] p-5 md:p-8 text-white shadow-xl">

      <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
        QuickShow Booking
      </p>

      <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">
        Book Your Tickets
      </h2>

      <p className="mt-2 text-gray-400">
        Choose your date, show time and number of tickets.
      </p>

      {/* Movie */}
      <div className="mt-6 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-20 w-16 rounded-lg object-cover"
        />

        <div>
          <p className="text-xs text-gray-400">Selected Movie</p>
          <h3 className="mt-1 font-bold">{movie.title}</h3>
          <p className="mt-1 text-sm text-gray-400">
            {movie.language || 'Movie'}
          </p>
        </div>
      </div>

      {/* Date */}
      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-gray-300">
          <i className="ri-calendar-line mr-2 text-red-400"></i>
          Choose Date
        </label>

        <input
          type="date"
          min={minDate}
          value={date}
          onChange={(e) => {
            setDate(e.target.value)
            setBookingMessage('')
            setMessageType('')
          }}
          className="w-full rounded-xl border border-white/10 bg-[#080809] p-3 text-white outline-none focus:border-red-500"
        />
      </div>

      {/* Show Timings */}
      <div className="mt-6">
        <label className="mb-3 block text-sm font-semibold text-gray-300">
          <i className="ri-time-line mr-2 text-red-400"></i>
          Select Show Time
        </label>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {shows.map((show) => (
            <button
              key={show.time}
              type="button"
              onClick={() => {
                setShowTime(show.time)
                setTickets(1)
                setBookingMessage('')
                setMessageType('')
              }}
              className={`rounded-xl border p-3 text-sm font-semibold transition ${
                showTime === show.time
                  ? 'border-red-500 bg-red-600 text-white'
                  : 'border-white/10 bg-white/5 text-gray-300 hover:border-red-500/60'
              }`}
            >
              {show.time}
            </button>
          ))}
        </div>
      </div>

      {/* Available Seats */}
      <div className="mt-6 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <span className="text-gray-300">
          <i className="ri-armchair-line mr-2 text-red-400"></i>
          Seats Available
        </span>

        <span className="font-bold text-green-400">
          {selectedShow
            ? date
              ? `${availableSeats} seats`
              : 'Choose a date'
            : 'Select a show'}
        </span>
      </div>

      {/* Number of Tickets */}
      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-gray-300">
          Number of Tickets
        </label>

        <select
          value={tickets}
          onChange={(e) => {
            setTickets(Number(e.target.value))
            setBookingMessage('')
            setMessageType('')
          }}
          className="w-full rounded-xl border border-white/10 bg-[#080809] p-3 text-white outline-none focus:border-red-500"
        >
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <option
              key={number}
              value={number}
              disabled={number > availableSeats}
            >
              {number} Ticket{number > 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </div>

      {/* Book Now */}
      <button
        type="button"
        onClick={bookNow}
        disabled={Boolean(
          selectedShow && date && availableSeats === 0
        )}
        className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 py-4 font-bold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <i className="ri-ticket-2-line text-xl"></i>
        Book Now
        <i className="ri-arrow-right-line text-xl"></i>
      </button>

      {/* Booking Message */}
      {bookingMessage && (
        <p
          role="status"
          className={`mt-4 rounded-xl border p-4 text-sm leading-6 ${
            messageType === 'success'
              ? 'border-green-500/30 bg-green-500/10 text-green-400'
              : 'border-red-500/30 bg-red-500/10 text-red-400'
          }`}
        >
          {bookingMessage}
        </p>
      )}

    </div>
  )
}

export default BookingSection