import React from 'react'

function MovieCard({poster_path , original_title}) {
  return (
    <div className='h-[45vh] w-[160px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer ' style={{backgroundImage : `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
     
        <div className='text-white text-bold w-full text-center bg-gray-700/60'>{original_title}</div>

     
      
    </div>
  )
}

export default MovieCard
