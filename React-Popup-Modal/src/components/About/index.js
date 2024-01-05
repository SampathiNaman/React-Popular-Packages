// Write your code here
import Header from '../Header'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="component-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="component-card-sm-img d-block d-md-none"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="component-card-lg-img d-none d-md-block"
      />
    </div>
  </>
)

export default About
