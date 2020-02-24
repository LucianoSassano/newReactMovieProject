import React, { Children, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import MovieContent from "../components/MoviesContent";
import { getBySearch } from "../services/movieApi";

const Home = () => {
  const [search, setSearch] = useState("avengers");
  const [results, setResults] = useState([]);

  useEffect(() => {
    getBySearch(search)
      .then(results => {
        setResults(results);
        const jsonMovie = JSON.stringify(results);
        localStorage.setItem("movies", jsonMovie);
      })
      .catch(err => console.log(err));
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
    //this.setState({ search: value });

  };

  const handleSearch = e => {
    console.log(e.target.value);
    const currentVal = e.target.value;
    setSearch(currentVal);
  };

  return (
    <>
      <NavBar onSubmit={handleSubmit} onChange={handleSearch} />
      <MovieContent results={results} />
    </>
  );
};


export default Home;
