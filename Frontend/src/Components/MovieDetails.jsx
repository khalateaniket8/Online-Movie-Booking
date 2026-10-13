
import React from 'react'
import { useParams } from 'react-router-dom'
import moviesData from '../data/MoviesData'
import BookingSection from '../components/BookingSection'

const MovieDetails = () => {
  const { id } = useParams()

  const movie = moviesData.find(
    (item) => String(item.id) === id
  )

  if (!movie) {
    return (
      <div className="mt-20 min-h-[70vh] bg-[#080809] p-10 text-center text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">
          Movie Not Found!
        </h1>
      </div>
    )
  }

  const cast = [
    {
      name: 'Chris Pratt',
      role: 'Star-Lord',
      image:
        'https://tse1.explicit.bing.net/th/id/OIP.wzMfHs8ci3ipaliNh9XH0wHaLH?r=0&w=1333&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      name: 'Zoe Saldaña',
      role: 'Gamora',
      image:
        'https://cdn.britannica.com/17/215017-050-0E006005/American-actress-Zoe-Saldana-2018.jpg',
    },
    {
      name: 'Dave Bautista',
      role: 'Drax',
      image:
        'https://image.tmdb.org/t/p/w300/7SGGUiTE6oc2fh9MjIk5M00dsQd.jpg',
    },
    {
      name: 'Vin Diesel',
      role: 'Groot (Voice)',
      image:
        'https://image.tmdb.org/t/p/w300/nZdVry7lnUkE24PnXakok9okvL4.jpg',
    },
    {
      name: 'Bradley Cooper',
      role: 'Rocket (Voice)',
      image:
        'https://tse1.mm.bing.net/th/id/OIP.Ib7gOgiwKzJRY5cAqoQWWAHaHa?r=0&pid=Api&h=220&P=0',
    },
    {
      name: 'James Gunn',
      role: 'Director',
      image:
        'https://tse1.mm.bing.net/th/id/OIP.CMh1n-Jkx8pbGg7J3p4VBAHaHY?r=0&pid=Api&h=220&P=0',
    },
  ]

  return (
    <div className="relative min-h-screen mt-20 overflow-hidden bg-[#080809] text-white px-5 md:px-16 py-12">

      {/* Background Glow */}
      <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-red-600/10 blur-[120px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Movie Details Card */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 md:p-10 shadow-2xl shadow-black/50">

          {/* Movie Poster */}
          <div className="group relative shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-red-600/30 blur-md opacity-50 group-hover:opacity-100 transition duration-500"></div>

            <img
              src={movie.image}
              alt={movie.title}
              className="relative w-60 md:w-72 h-80 md:h-[420px] object-cover rounded-2xl border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Movie Information */}
          <div className="flex-1 w-full pt-2 md:pt-5">

            <p className="inline-block bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold tracking-[0.2em] px-4 py-2 rounded-full mb-5">
              {movie.language || 'ENGLISH'}
            </p>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {movie.title}
            </h1>

            {/* Rating */}
            <div className="flex flex-wrap items-center gap-3 mt-5">
              <span className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                <i className="ri-star-fill"></i>
                {movie.rating || 'N/A'}
              </span>

              <span className="text-gray-500">|</span>

              <span className="text-sm text-gray-400">
                User Rating
              </span>
            </div>

            {/* Genre and Year */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">
                <i className="ri-film-line text-red-400 mr-2"></i>
                {movie.genre || 'Movie'}
              </span>

              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">
                <i className="ri-calendar-line text-red-400 mr-2"></i>
                {movie.year || 'N/A'}
              </span>
            </div>

            {/* Description */}
            <h2 className="text-lg font-bold mt-8 mb-3">
              About the Movie
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-7 max-w-2xl">
              {movie.description ||
                'Movie details and story information.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-9">

              <a
                href={movie.trailer || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!movie.trailer) {
                    e.preventDefault()
                    alert('Trailer link is not available!')
                  }
                }}
                className="group inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-1 active:scale-95 transition-all duration-300"
              >
                <i className="ri-play-circle-line text-xl group-hover:scale-110 transition-transform"></i>
                Watch Trailer
              </a>

              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById('booking-section')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                }}
                className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 hover:bg-white/10 hover:border-red-500/60 text-white px-6 py-3.5 rounded-xl font-bold hover:-translate-y-1 active:scale-95 transition-all duration-300"
              >
                <i className="ri-ticket-2-line text-xl text-red-400 group-hover:rotate-12 transition-transform"></i>
                Buy Tickets
              </button>

            </div>
          </div>
        </div>

        {/* Movie Booking Section */}
        <div
          id="booking-section"
          className="mt-12 scroll-mt-28"
        >
          <BookingSection movie={movie} />
        </div>

        {/* Cast & Director Section */}
        <div className="mt-16">

          <div className="mb-8">
            <p className="text-red-500 text-sm font-bold uppercase tracking-[0.25em]">
              Meet the Team
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
              Your Favorite{' '}
              <span className="text-red-500">Cast</span>
            </h2>

            <p className="text-gray-400 mt-3">
              The stars and creative mind behind the movie.
            </p>

            <div className="h-1 w-16 bg-red-600 rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-8">

            {cast.map((person) => (
              <div
                key={person.name}
                className="group flex flex-col items-center text-center"
              >
                <div
                  className={`rounded-full p-1 ${
                    person.role === 'Director'
                      ? 'bg-gradient-to-br from-amber-400 to-red-600'
                      : 'bg-gradient-to-br from-red-500 to-transparent'
                  }`}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#080809] group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3
                  className={`font-semibold mt-4 transition-colors ${
                    person.role === 'Director'
                      ? 'text-white group-hover:text-amber-400'
                      : 'text-white group-hover:text-red-400'
                  }`}
                >
                  {person.name}
                </h3>

                <p
                  className={`text-sm mt-1 ${
                    person.role === 'Director'
                      ? 'text-amber-500'
                      : 'text-gray-500'
                  }`}
                >
                  {person.role === 'Director' && (
                    <i className="ri-clapperboard-line mr-1"></i>
                  )}
                  {person.role}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  )
}

export default MovieDetails