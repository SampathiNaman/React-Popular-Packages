// Write your code here
import Slider from 'react-slick'

import MovieItem from '../MovieItem'

import './index.css'

const MoviesSlider = props => {
  const {moviesList, title} = props
  const settings = {
    className: 'my-3',
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="movie-slider-container">
      <h1 className="slider-title">{title}</h1>
      <Slider {...settings}>
        {moviesList.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
