// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimelineItem} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectTimelineItem
  return (
    <div>
      <img src={imageUrl} alt="project" className="w-100" />
      <div className="d-md-flex justify-content-md-between align-md-items-center my-2">
        <h2 className="timeline-item-title">{projectTitle}</h2>
        <div className="d-flex align-items-center my-2 my-md-0">
          <AiFillCalendar />
          <p className="timeline-item-duration">{duration}</p>
        </div>
      </div>
      <p className="timeline-item-description">{description}</p>
      <a href={projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
