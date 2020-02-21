//Local Storage functions
//la idea es que cuando un user se logea cargar un array de users , despues escribirlo en el local storage
//la comprobacion de ingreso debe hacerse contra el local storage , lo mismo para las pelicuals

import React from "react";

function LocalStorage() {
  let users = [];
  let movies = [];

  function writeUsersLocalStorage() {
    let jsonUser = JSON.stringify(users);
    localStorage.setItem("users", jsonUser);
  }

  function readUsersLocalStorage() {
    let jsonUser = localStorage.getItem("users");
    return JSON.parse(jsonUser);
  }

  function writeMoviesLocalStorage() {
    let jsonMovies = JSON.stringify(movies);
    localStorage.setItem("movies", jsonMovies);
  }

  function readMoviesLocalStorage() {
    let jsonMovies = localStorage.getItem("movies");
    return JSON.parse(jsonMovies);
  }
}

export default LocalStorage;
