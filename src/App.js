import React, { useEffect, useState } from "react";
import NavBar from "./component/NaveBar";
import { Container } from "react-bootstrap";
import MoveList from "./component/MoveList";
import {  Routes, Route, HashRouter } from "react-router-dom";
import MovieDetials from "./component/MovieDetials";
import axios from "axios";
function App() {
  const [movies, setmovies] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  //get all movie by axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar"
    );
    setmovies(res.data.results);
    setpageCount(res.data.total_pages); //to return the number of all total page from database
  };
  //get current page
  const getpage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`
    );
    setmovies(res.data.results);
    setpageCount(res.data.total_pages);
  };
  //use it to run all movies when open website dynamic
  useEffect(() => {
    getAllMovies();
  }, []);
  //search on movies
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
      );
      setmovies(res.data.results);
      setpageCount(res.data.total_pages);
    }
  };
  return (
    <div className="App">
      <NavBar search={search} />
      <Container>
        <HashRouter>
          <Routes>
            <Route path="/" element={<MoveList movies={movies} getpage={getpage} pageCount={pageCount} />}/>
            <Route path="/movie/:id" element={<MovieDetials />}/>
          </Routes>
        </HashRouter>
      </Container>
    </div>
  );
}

export default App;
