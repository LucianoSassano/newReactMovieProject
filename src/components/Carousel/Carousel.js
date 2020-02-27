import React from "react";

export default class Carousel extends React.Component {
  mostrarCarousel() {
    var flag = false;

    // console.log( "carrusel", this.props.popular)
    let arr = this.props.popular.slice(0, 4);
    console.log("arr", arr);

    return arr.map(movie => {
      if (flag == false) {
        flag = true;
        return (
          <div key={movie.id} className="carousel-item active">
            <img
              className="imagen-carousel"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt="..."
            />
          </div>
        );
      } else {
        return (
          <div key={movie.id} className="carousel-item">
            <img
              className="imagen-carousel"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              className="imagen-carousel"
              alt="..."
            />
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">{this.mostrarCarousel()}</div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
