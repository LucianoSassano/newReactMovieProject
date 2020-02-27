import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel";
import MovieContent from "../../components/MoviesContent/MoviesContent";
import { getPopular } from "../../services/movieApi";

const Home = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular()
      .then(results => {
        setPopular(results);
      })
      .catch(err => console.log(err));
  }, [search]);

  const filterResults = () => {
    let localStorageMovies = localStorage.getItem("movies");
    localStorageMovies = JSON.parse(localStorageMovies);

    return localStorageMovies.filter(
      movie => movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  };

  useEffect(() => {
    setResults(filterResults);
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleSearch = e => {
    console.log(e.target.value);
    const currentVal = e.target.value;
    setSearch(currentVal);
  };

  return (
    <>
      <NavBar onSubmit={handleSubmit} onChange={handleSearch} />
      <Carousel popular={popular} />
      <MovieContent results={results} />
    </>
  );
};

export default Home;
