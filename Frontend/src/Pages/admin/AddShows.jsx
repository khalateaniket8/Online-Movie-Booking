
import React, { useState } from 'react'
import TitleList from '../../Components/Admin/TitleList'

const AddShows = () => {
  const [showData, setShowData] = useState({
    movieName: '',
    showDate: '',
    showTime: '',
    ticketPrice: '',
    totalSeats: '',
  })

  const [poster, setPoster] = useState(null)
  const [preview, setPreview] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setShowData({
      ...showData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePoster = (e) => {
    const file = e.target.files[0]

    if (file) {
      setPoster(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!poster) {
      setMessage('Please upload a movie poster.')
      return
    }

    const newShow = {
      id: Date.now(),
      ...showData,
      ticketPrice: Number(showData.ticketPrice),
      totalSeats: Number(showData.totalSeats),
      posterName: poster.name,
    }

    const existingShows = JSON.parse(
      localStorage.getItem('adminShows') || '[]'
    )

    localStorage.setItem(
      'adminShows',
      JSON.stringify([...existingShows, newShow])
    )

    setMessage('Show added successfully!')

    setShowData({
      movieName: '',
      showDate: '',
      showTime: '',
      ticketPrice: '',
      totalSeats: '',
    })

    setPoster(null)
    setPreview('')
    e.target.reset()
  }

  return (
    <div className="min-h-screen bg-[#0f1014] px-6 py-8 text-white">
      <TitleList text1="Add" text2="Shows" />

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-3xl rounded-xl border border-gray-800 bg-[#15161c] p-6 md:p-8"
      >
        <h2 className="mb-6 text-xl font-semibold">
          Enter Show Details
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Movie Name
            </label>

            <input
              type="text"
              name="movieName"
              value={showData.movieName}
              onChange={handleChange}
              placeholder="Enter movie name"
              required
              className="w-full rounded-lg border border-gray-700 bg-[#0f1014] px-4 py-3 outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Movie Poster
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handlePoster}
              required
              className="w-full rounded-lg border border-gray-700 bg-[#0f1014] p-3 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-red-600 file:px-3 file:py-2 file:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Show Date
            </label>

            <input
              type="date"
              name="showDate"
              value={showData.showDate}
              onChange={handleChange}
              min={new Date().toLocaleDateString('en-CA')}
              required
              className="w-full rounded-lg border border-gray-700 bg-[#0f1014] px-4 py-3 outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Show Time
            </label>

            <input
              type="time"
              name="showTime"
              value={showData.showTime}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-700 bg-[#0f1014] px-4 py-3 outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Ticket Price (₹)
            </label>

            <input
              type="number"
              name="ticketPrice"
              value={showData.ticketPrice}
              onChange={handleChange}
              placeholder="Enter ticket price"
              min="1"
              required
              className="w-full rounded-lg border border-gray-700 bg-[#0f1014] px-4 py-3 outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Total Seats
            </label>

            <input
              type="number"
              name="totalSeats"
              value={showData.totalSeats}
              onChange={handleChange}
              placeholder="Enter total seats"
              min="1"
              required
              className="w-full rounded-lg border border-gray-700 bg-[#0f1014] px-4 py-3 outline-none focus:border-red-500"
            />
          </div>
        </div>

        {preview && (
          <div className="mt-6">
            <p className="mb-3 text-sm text-gray-300">
              Poster Preview
            </p>

            <img
              src={preview}
              alt="Movie poster preview"
              className="h-52 w-36 rounded-lg object-cover"
            />
          </div>
        )}

        {message && (
          <p className="mt-5 text-sm text-green-400">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="mt-7 w-full rounded-lg bg-red-600 py-3 font-semibold transition hover:bg-red-700 md:w-auto md:px-10"
        >
          Add Show
        </button>
      </form>
    </div>
  )
}

export default AddShows