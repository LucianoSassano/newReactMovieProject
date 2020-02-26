import React from "react";

export default class Carousel extends React.Component {

  mostrarCarousel() {

    // console.log( "carrusel", this.props.popular)
    let arr = this.props.popular.slice(0,3)   
    console.log("arr", arr);
    
    return arr.map( (movie) => {
      return (<div key={movie.id} className="carousel-item active">
      <img
        src={
          "https://image.tmdb.org/t/p/original" + movie.poster_path
        }
        className="d-block w-100"
        alt="..."
        />
    </div>)
    })   
  }

  render() {

    

    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
              ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            {this.mostrarCarousel()}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
            >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
            >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
