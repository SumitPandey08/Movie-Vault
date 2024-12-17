import React from 'react'
import MovieCard from './MovieCard';
import axios from 'axios'
import { useEffect , useState} from 'react';
import Pagination from './Pagination';

function Movie() {
  const [page , setPage] = useState(1)
  const [movies, setMovies] = useState([]);
  function handlePrev(){
    if(page==1){
    setPage(page)
    }
    else{
      setPage(page - 1)
    }
  }

  function handleNext(){
    setPage(page + 1)
  }


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0be2d109beda11d533b5460dac5d40f8&language=en-US&page=${page}`).then(
      (response) => {
        setMovies(response.data.results);
      }
    )
  } , [page])
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
        <Pagination page={page} handleNext={handleNext} handlePrev={handlePrev}/>
      
    </div>
  )
}

export default Movie ; 
