import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-5'>
    <img src="https://static.vecteezy.com/system/resources/previews/022/580/623/original/movie-media-letter-logo-design-illustration-free-vector.jpg" alt="logo" className='w-[65px] h-[40px]'/>

    <Link to={"/"} className='text-blue-500 font-medium text-2xl '>Home</Link>
    <Link to={"/watchlist"} className='text-blue-500 font-medium text-2xl '>WatchList</Link>
    </div>

    
  )
}

export default NavBar
