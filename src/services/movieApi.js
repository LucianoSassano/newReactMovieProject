async function getBySearch(searchTerm) {
  console.log("Performing search");

  const urlString =
    "https://api.themoviedb.org/3/search/movie?api_key=16e4c7896761f5945c9296a93ce5703f&query=" +
    searchTerm;

  try {
    const response = await fetch(urlString);
    const resJson = response.json();
    const { results } = await resJson;
    

    return results;
  } catch (err) {
    console.error("fail");
  }
}

async function getLatest() {
  console.log("Performing search");

  const urlString =
    "https://api.themoviedb.org/3/search/movie/latest?api_key=16e4c7896761f5945c9296a93ce5703f&language=en-US";

  try {
    const response = await fetch(urlString);
    const resJson = response.json();
    const { results } = await resJson;

    return results;
  } catch (err) {
    console.error("fail");
  }
}

async function getPopular() {
  console.log("Performing popular search");

  const urlString =
    "https://api.themoviedb.org/3/movie/popular?api_key=16e4c7896761f5945c9296a93ce5703f";

  try {
    const response = await fetch(urlString);
    const resJson = response.json();
    const { results } = await resJson;
    console.log("popular")
    console.log(results);
    
    return results;
  } catch (err) {
    console.error("fail");
  }
}

async function getTopRated() {
  console.log("Performing search");

  const urlString =
    "https://api.themoviedb.org/3/search/movie/top_rated?api_key=16e4c7896761f5945c9296a93ce5703f&language=en-US";

  try {
    const response = await fetch(urlString);
    const resJson = response.json();
    const { results } = await resJson;

    return results;
  } catch (err) {
    console.error("fail");
  }
}

export { getBySearch, getLatest, getPopular, getTopRated };
