import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import Theaters from './Pages/Theaters'
import Releases from './Pages/Releases'
import Favorites from './Pages/Favorites'
import MyBookings from './Pages/MyBookings'
import HeroSection from './Components/HeroSection'
import Footer from './Components/Footer'
import MovieDetails from './Components/MovieDetails'
import Layout from './Pages/admin/Layout'
import AddShows from './Pages/admin/AddShows'
import Dashboard from './Pages/admin/Dashboard'
import ListBooking from './Pages/admin/ListBooking'
import ListShows from './Pages/admin/ListShows'

const App = () => {
  const location = useLocation()

  return (
    <div>
      {!location.pathname.startsWith('/admin') && <Navbar/>}
      
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>} />
         <Route path='/theaters' element={<Theaters/>}/>
        <Route path='/releases' element={<Releases/>} />
         <Route path='/favorites' element={<Favorites/>}/>
         <Route path='/mybookings' element={<MyBookings/>}/>
         <Route path='/moviedetails/:id' element={<MovieDetails/>}/>
         </Routes>
         {/* admin */}
         <Routes>
         <Route path='/admin' element={<Layout/>}>
         <Route index element={<Dashboard/>}/>
         <Route path='add-shows' element={<AddShows/>}/>
          <Route path='list-shows' element={<ListShows/>}/>
         <Route path='list-bookings' element={<ListBooking/>}/>
         </Route>
        
      </Routes>
     
      {!location.pathname.startsWith('/admin') && <Footer/>}
    </div>
  )
}

export default App
