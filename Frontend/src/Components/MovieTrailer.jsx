
import React from 'react'
import trailerData from '../data/MovieTrailers'

const MovieTrailer = () => {
  return (
    <div className="min-h-screen bg-[#080809] text-white px-5 md:px-10 lg:px-16 py-12 mt-16">

      {/* Header */}
      <div className="mb-10">
        <p className="text-red-500 text-sm font-bold uppercase tracking-[0.3em] mb-3">
          Exclusive Previews
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Movie <span className="text-red-500">Trailers</span>
        </h1>

        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Watch the latest trailers and discover your next favourite movie.
        </p>

        <div className="h-1 w-20 bg-red-600 rounded-full mt-5"></div>
      </div>

      {/* Featured Trailer */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-7 w-1 rounded-full bg-red-600"></span>
          <h2 className="text-xl md:text-2xl font-bold">
            Featured Trailer
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/50">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/TcMBFSGVi1c"
            title="Featured Movie Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Trailer Collection */}
      <div>
        <div className="flex items-center gap-3 mb-7">
          <span className="h-7 w-1 rounded-full bg-red-600"></span>
          <h2 className="text-xl md:text-2xl font-bold">
            Explore Trailers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {trailerData.map((movie) => (
            <div
              key={movie.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111114] hover:border-red-500/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-900/10 transition-all duration-300"
            >
              <div className="overflow-hidden bg-black">
                <iframe
                  className="w-full aspect-video"
                  src={movie.trailerUrl}
                  title={`Trailer ${movie.id}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                    {movie.title || `Movie Trailer ${movie.id}`}
                  </h3>

                  <i className="ri-play-circle-line text-2xl text-red-500 shrink-0"></i>
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  Official Trailer
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default MovieTrailer