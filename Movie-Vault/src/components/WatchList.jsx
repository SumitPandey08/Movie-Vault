import React , {useState , useEffect} from "react";
import genre_ids  from "../genre";

function WatchList({ watchList , setWatchList , handleDeleteFromWatchList }) {

  const [search, setSearch] = useState("");

  const [genreList , setGenreList] = useState(['All Genre']) ;

  const [currGenre , setCurrGenre] = useState("All Genre")

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleFilter(genre){
    setCurrGenre(genre)
  }

  function sortIncreasing(){
    const sortIncrease = watchList.sort((movieA, movieB) => movieB.vote_average - movieA.vote_average);
    setWatchList([...sortIncrease])
  }

  function sortDecreasing(){
   const sortDecrease = watchList.sort((movieA, movieB) => movieA.vote_average - movieB.vote_average) ;
   setWatchList([...sortDecrease])
  }
 useEffect(
  () => {
    let temp = watchList.map((movieObj) => {
      return genre_ids[movieObj.genre_ids[0]];
    });
    const uniqueGenres = Array.from(new Set(temp));
    const newGenreList = ["All Genre", ...uniqueGenres];


    setGenreList(newGenreList)
    console.log(genreList);
    if (JSON.stringify(genreList) !== JSON.stringify(newGenreList)) {
      setGenreList(newGenreList);
    }

    // console.log(uniqueGenres);
    
  }, [watchList]

 ) 


  return (

    <>
      <div className="flex justify-center flex-wrap m-4">
  {genreList.map((genre) => {
    return (
      <div 
        onClick={() => handleFilter(genre)} 
        className={currGenre === genre 
          ? "flex justify-center items-center h-[3rem] w-[9rem] hover:cursor-pointer bg-blue-400 rounded-xl text-white font-bold mx-4" 
          : "flex justify-center items-center h-[3rem] w-[9rem] hover:cursor-pointer bg-gray-400/60 rounded-xl text-white font-bold mx-4"}
      >
        {genre}
      </div>
    );
  })}
</div>

  


      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="px-[1rem] h-[3rem] w-[18rem] outline-none bg-gray-200"
        />
      </div>
      <div className="rounded-lg overflow-hidden border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2 ">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div className="p-2 hover:cursor-pointer" onClick={sortIncreasing}><i className="fa-solid fa-arrow-up"></i></div>
              <div className="p-2">Ratings</div>
                <div className="p-2 hover:cursor-pointer" onClick={sortDecreasing}><i className="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchList.filter((movieObj) => {
              if(currGenre == "All Genre" ){
                return true;
              }
              else{
                return( genre_ids[movieObj.genre_ids[0]]== currGenre)
              }

            } )


              .filter((movieDoc) => {
                if (search === "") {
                  return movieDoc;
                } else if (
                  (movieDoc.title).toLowerCase().includes(search.toLowerCase())
                ) {
                  return movieDoc;
                }
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        className="h-[6rem]"
                        alt=""
                      />
                      <div className="mx-8">{movieObj.original_title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{movieObj.genre_ids && movieObj.genre_ids.length > 0 ? genre_ids[movieObj.genre_ids[0]] : 'N/A'}</td>

                    <td>
                      <button className="text-red-500 font-medium p-2 " onClick={() => {
                        handleDeleteFromWatchList(movieObj)

                      }}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
