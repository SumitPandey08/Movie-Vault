import React from 'react'
import MovieCard from './MovieCard';
import axios from 'axios'
import { useEffect , useState} from 'react';

function Movie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0be2d109beda11d533b5460dac5d40f8&language=en-US&page=1').then(
      (response) => {
        setMovies(response.data.results);
      }
    )
  } , [])
  return (
    <div>
         <div className='text-2xl m-5 font-bold text-center'>
            Trending Movie
         </div>

        <div className='flex flex-row justify-between flex-wrap gap-5'>
            {movies.map((movieDoc) =>{
              return <MovieCard poster_path={ movieDoc.poster_path } original_title={movieDoc.original_title}/>
            })}


        </div>
      
    </div>
  )
}

export default Movie ; 
