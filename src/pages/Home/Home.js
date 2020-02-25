import React, { Children, useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel";
import MovieContent from "../../components/MoviesContent/MoviesContent";
import { getBySearch, getPopular } from "../../services/movieApi";

const Home = () => {
  const [search, setSearch] = useState("avengers");
  const [results, setResults] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular()
      .then(results => {
        setPopular(results);
      })
      .catch(err => console.log(err));
  }, [search]);

  useEffect(() => {
    getBySearch(search)
      .then(results => {
        setResults(results);
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
      <Carousel popular={popular} />
      <MovieContent results={results} />
    </>
  );
};

export default Home;
