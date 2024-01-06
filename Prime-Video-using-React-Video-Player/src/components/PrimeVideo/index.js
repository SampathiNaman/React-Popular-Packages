// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = []
  const comedyMovies = []
  moviesList.forEach(movie =>
    movie.categoryId === 'ACTION'
      ? actionMovies.push(movie)
      : comedyMovies.push(movie),
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="w-100 prime-video-img"
      />
      <div className="sliders-container">
        <MoviesSlider moviesList={actionMovies} title="Action Movies" />
        <MoviesSlider moviesList={comedyMovies} title="Comedy Movies" />
      </div>
    </div>
  )
}

export default PrimeVideo
