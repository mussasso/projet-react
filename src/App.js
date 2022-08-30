import './App.css';
import React, {useState, useEffect} from 'react';
import tmdb from './api/tmdb'
import NavBar from './components/navBar/Navbar';
import Bridge from './components/bridge/Bridge';
import Fav from './components/favoris/Fav';
import { Routes , Route} from "react-router-dom"

function App() {
  const [moviePopular, setMoviePopular]= useState([]);

  useEffect( () => {
    const fetchMovies = async() => {
        const {data} = await tmdb.get("movie/popular")
        setMoviePopular(data.results)
    }
  
  fetchMovies()
    }, [] )

  return (
    <div className="App">
      <NavBar prips={moviePopular} />
      <Routes>
        <Route exact path="/" element={<Bridge prits={moviePopular} />}  />
        <Route path="/Favorite" element={<Fav sprout={moviePopular} />}  />
      </Routes>
    </div>
  );
}

export default App;
