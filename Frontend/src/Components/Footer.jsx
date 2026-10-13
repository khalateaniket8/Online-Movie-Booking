
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0b0f] text-gray-400 px-6 md:px-16 pt-12 pb-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-white">
            Quick<span className="text-red-500">Show</span>
          </h1>

          <p className="mt-4 text-sm leading-6">
            Discover the latest movies, watch trailers and book your
            favourite movie tickets online.
          </p>

          <div className="flex gap-4 mt-5 text-xl">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"
              className="hover:text-red-500">
              <i className="ri-instagram-line"></i>
            </a>

            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"
              className="hover:text-red-500">
              <i className="ri-youtube-line"></i>
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"
              className="hover:text-red-500">
              <i className="ri-facebook-circle-line"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            <li><Link to="/movies" className="hover:text-red-500">Movies</Link></li>
            <li><Link to="/theaters" className="hover:text-red-500">Theaters</Link></li>
            <li><Link to="/releases" className="hover:text-red-500">Upcoming Movies</Link></li>
            <li><Link to="/favorites" className="hover:text-red-500">My Favorites</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">
            Support
          </h2>

          <ul className="space-y-3 text-sm">
            <li><a href="mailto:support@quickshow.com" className="hover:text-red-500">Contact Us</a></li>
            <li><a href="mailto:support@quickshow.com" className="hover:text-red-500">Help Center</a></li>
            <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-red-500">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">
            Get Updates
          </h2>

          <p className="text-sm leading-6 mb-4">
            Stay updated with the latest movie releases and trailers.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Newsletter subscription demo!')
            }}
            className="flex"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="min-w-0 w-full rounded-l-lg bg-gray-900 border border-gray-700 px-3 py-3 text-sm text-white outline-none focus:border-red-500"
            />

            <button
              type="submit"
              className="rounded-r-lg bg-red-600 px-4 text-white hover:bg-red-700"
            >
              <i className="ri-send-plane-fill"></i>
            </button>
          </form>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
        <p>© {new Date().getFullYear()} QuickShow. All rights reserved.</p>

        <p>
          Made with <i className="ri-heart-fill text-red-500"></i> for movie lovers
        </p>
      </div>

    </footer>
  )
}

export default Footer
