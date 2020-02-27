import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { getBySearch } from "../../services/movieApi";
import MoviesAdminContent from "../../components/MoviesAdminContent/MoviesAdminContent";
import AdminAdd from "../../components/AdminAdd/AdminAdd";

const Admin = () => {
  const [search, setSearch] = useState("avengers");
  const [results, setResults] = useState([]);

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
      <MoviesAdminContent results={results} />
    </>
  );
};

export default Admin;
