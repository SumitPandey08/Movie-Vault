import React , {useState} from "react";
import genre_ids  from "../genre";

function WatchList({ watchList }) {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4">
          Action
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/40 rounded-xl text-white font-bold mx-4">
          Action
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/40 rounded-xl text-white font-bold mx-4">
          Action
        </div>
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
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchList
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
                      <button className="text-red-500 font-medium p-2 ">
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
