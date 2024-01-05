// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const Header = () => (
  <nav className="nav-bar d-flex justify-content-between align-items-center">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          data-testid="hamburgerIconButton"
          type="button"
          aria-label="Menu Button"
          className="menu-btn"
        >
          <GiHamburgerMenu className="menu-icon" />
        </button>
      }
      overlayStyle={{'background-color': '#ffffff'}}
      closeOnDocumentClick
      closeOnEscape
    >
      {close => (
        <>
          <div className="modal-container">
            <button
              data-testid="closeButton"
              type="button"
              aria-label="Close"
              className="close-btn"
              onClick={close}
            >
              <IoMdClose className="menu-icon" />
            </button>
            <ul className="modal-items-container">
              <li>
                <Link to="/" className="model-item">
                  <AiFillHome className="modal-icon" />
                  <p className="modal-text">Home</p>
                </Link>
              </li>
              <li>
                <Link to="/about" className="model-item my-4">
                  <BsInfoCircleFill className="modal-icon" />
                  <p className="modal-text">About</p>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </Popup>
  </nav>
)

export default Header
