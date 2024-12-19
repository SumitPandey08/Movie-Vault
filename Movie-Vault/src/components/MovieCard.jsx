

function MovieCard({ poster_path, original_title, vote_average, handleAddToWatchList, watchList, movieDoc, handleDeleteFromWatchList }) {


  const backgroundImage = poster_path 
    ? `url(https://image.tmdb.org/t/p/original/${poster_path})`
    : 'url(/path/to/default-image.jpg)';

  function doesContain(movieDoc) {
    for (let i = 0; i < watchList.length; i++) { // Declare i with let
      if (watchList[i].id === movieDoc.id) {
        return true;
      }
    }
    return false; // Move return false outside the loop
  }

  return (
    <div
      className='h-[48vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer relative shadow-lg'
      style={{ backgroundImage }}
      aria-label={`Movie poster of ${original_title}`}
    >
      {doesContain(movieDoc) ? 
        <div className='flex justify-center m-4 h-8 w-8 items-center rounded-lg bg-gray-900/60 hover:cursor-pointer hover:scale-125' onClick={() => {
          handleDeleteFromWatchList(movieDoc);
        }}> 
          &#10060;
        </div> :
        <div className='flex justify-center m-4 h-8 w-8 items-center rounded-lg bg-gray-900/60 hover:cursor-pointer hover:scale-125' onClick={() => {
          handleAddToWatchList(movieDoc);
        }}>
          &#128525;
        </div>
      }
      
      <div className="absolute justify-center bottom-0 left-0 right-0 bg-gray-900/75 text-white p-3 rounded-b-xl">
        <h3 className='text-lg font-bold truncate'>{original_title || 'Title Not Available'}</h3>
        <div className='flex justify-between items-center mt-2'>
          <div className='flex items-center'>
            <span className='mr-1'>&#11088;</span> {/* Star emoji */}
            <span className='text-sm'>{vote_average || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;