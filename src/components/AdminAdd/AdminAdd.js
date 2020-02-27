import React, { Fragment } from "react";

export default class AdminAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      overview: "",
      genres: [
        {
          id: 28,
          name: "Action"
        },
        {
          id: 12,
          name: "Adventure"
        },
        {
          id: 16,
          name: "Animation"
        },
        {
          id: 35,
          name: "Comedy"
        },
        {
          id: 80,
          name: "Crime"
        },
        {
          id: 99,
          name: "Documentary"
        },
        {
          id: 18,
          name: "Drama"
        },
        {
          id: 10751,
          name: "Family"
        },
        {
          id: 14,
          name: "Fantasy"
        },
        {
          id: 36,
          name: "History"
        },
        {
          id: 27,
          name: "Horror"
        },
        {
          id: 10402,
          name: "Music"
        },
        {
          id: 9648,
          name: "Mystery"
        },
        {
          id: 10749,
          name: "Romance"
        },
        {
          id: 878,
          name: "Science Fiction"
        },
        {
          id: 10770,
          name: "TV Movie"
        },
        {
          id: 53,
          name: "Thriller"
        },
        {
          id: 10752,
          name: "War"
        },
        {
          id: 37,
          name: "Western"
        }
      ],

      url_pic: ""
    };
  }

  render() {
    return (
      <Fragment>
        <form>
          <div class="form-group">
            <label>Movie Title</label>
            <input
              name="title"
              type="text"
              class="form-control"
              id="title-form"
              placeholder="title"
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Overview</label>
            <textarea
              name="overview"
              class="form-control"
              id="overview-form"
              rows="3"
              placeholder="overview"
            ></textarea>
          </div>
          <div class="form-group">
            <label>Genre</label>
            <select class="custom-select">
              {this.state.genres.map((generos, key) => (
                <option key={key}>{generos.name}</option>
              ))}
            </select>
          </div>
          <div class="form-group">
            <label>Upload a movie poster photo</label>
            <input
              type="file"
              class="form-control-file"
              id="form-poster"
              name="url_pic"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Fragment>
    );
  }
}
