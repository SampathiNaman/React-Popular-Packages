// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseTimelineItem} = props
  const {courseTitle, description, duration, tagsList} = courseTimelineItem
  return (
    <div>
      <div className="d-md-flex justify-content-md-between align-items-md-center my-2">
        <h2 className="timeline-item-title">{courseTitle}</h2>
        <div className="d-flex align-items-center my-2 my-md-0">
          <AiFillClockCircle />
          <p className="timeline-item-duration">{duration}</p>
        </div>
      </div>
      <p className="timeline-item-description">{description}</p>
      <ul className="d-flex align-items-center flex-wrap gap-3">
        {tagsList.map(tag => (
          <li className="tag-item" key={tag.id}>
            <p className="tag">{tag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
