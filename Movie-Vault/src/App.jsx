 
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchList from "./components/WatchList"; // Ensure this is a default export
import Movie from "./components/Movie"; // Ensure this is a default export
import Banner from "./components/Bannner"; // Correct spelling
import { useEffect, useState } from "react";

function App() {
  const [watchList, setWatchList] = useState([]);

  function handleAddToWatchList(movieDoc) {
    let newWatchList = [...watchList, movieDoc];
    localStorage.setItem("moviesApp" , JSON.stringify(newWatchList))
    setWatchList(newWatchList);
    console.log(newWatchList);
  }


function handleDeleteFromWatchList(movieDoc){
  let filteredWatchList = watchList.filter(movie => movie.id !== movieDoc.id);
  setWatchList(filteredWatchList);

}

useEffect(() => {
  let movieFromLS =localStorage.getItem("moviesApp")
  if(!movieFromLS){
    return
    }
    setWatchList(JSON.parse(movieFromLS))
    
}, [])
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Movie handleAddToWatchList={handleAddToWatchList} handleDeleteFromWatchList = {handleDeleteFromWatchList} watchList={watchList}/>
            </>
          } />
          <Route path="/watchlist" element={<WatchList watchList={watchList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;