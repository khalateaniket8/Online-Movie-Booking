
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moviesData from '../data/MoviesData'

const FeaturedSection = () => {
  const navigate = useNavigate()
  const [visibleMovies, setVisibleMovies] = useState(5)

  const showMoreMovies = () => {
    setVisibleMovies((prev) => prev + 5)
  }

  return (
    <div className="w-full p-6 bg-[#080809] text-white">

      <div className="flex items-center justify-between p-5">
        <h1 className="text-2xl font-bold">Now Showing</h1>

        <button
          onClick={() => navigate('/movies')}
          className="flex items-center gap-2 hover:text-red-400 transition"
        >
          View All <i className="ri-arrow-right-line"></i>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {moviesData.slice(0, visibleMovies).map((movie) => (
          <div
            key={movie.id}
            className="overflow-hidden rounded-xl border border-white/10 bg-[#111114] p-3 transition duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-900/20"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="h-64 w-full rounded-lg object-cover"
            />

            <h2 className="mt-3 font-semibold">{movie.title}</h2>

            <p className="mt-1 text-sm text-gray-400">
              {movie.year} · {movie.genre}
            </p>

            <p className="mt-2 text-yellow-400">
              ⭐ {movie.rating}/10
            </p>

            <button
              onClick={() => navigate(`/movies/${movie.id}`)}
              className="mt-3 w-full rounded-lg bg-red-600 py-2 font-semibold hover:bg-red-700 active:scale-95 transition"
            >
              Buy Tickets
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        {visibleMovies < moviesData.length && (
          <button
            onClick={showMoreMovies}
            className="flex items-center gap-2 rounded-xl border border-red-500 px-8 py-3 font-semibold text-white hover:bg-red-600 active:scale-95 transition-all duration-300"
          >
            Show More
            <i className="ri-arrow-down-line"></i>
          </button>
        )}

        {visibleMovies >= moviesData.length && (
          <p className="text-gray-400">
            All movies displayed!
          </p>
        )}
      </div>

    </div>
  )
}

export default FeaturedSection