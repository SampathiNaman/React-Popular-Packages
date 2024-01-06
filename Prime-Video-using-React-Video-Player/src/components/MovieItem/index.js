// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie
  return (
    <Popup
      modal
      className="popup-content"
      trigger={
        <button type="button" className="trigger-btn" aria-label="Movie">
          <div className="movie-item-container">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="movie-thumbnail"
            />
          </div>
        </button>
      }
    >
      {close => (
        <div className="modal-container">
          <button
            data-testid="closeButton"
            type="button"
            onClick={close}
            aria-label="Close"
            className="close-btn"
          >
            <IoMdClose size={24} />
          </button>
          <ReactPlayer url={videoUrl} loop controls />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
