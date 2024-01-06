// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    className: 'slider',
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    swipeToSlide: true,
  }
  return (
    <div data-testid="planets" className="planets-slider-container">
      <h1 className="slider-title">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(planetItem => (
          <PlanetItem planetItem={planetItem} key={planetItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
