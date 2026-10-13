import React from 'react'
import moviesData from '../data/MoviesData'

const Favorites = () => {
  return (
    <div className='mt-30 ml-3 cursor-pointer'>
    <h1 className='text-2xl font-bold'>Your Favorites Movies</h1>

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-4 ">
      {moviesData.map((movie) => (
        <div key={movie.id}
            className="overflow-hidden rounded-xl bg-gray-900 p-3 transition duration-300 hover:-translate-y-1">
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
              className="mt-3 w-full rounded-lg bg-red-500 py-2 hover:bg-red-600"
            >
              Buy Tickets
            </button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Favorites
