// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="timeline-view-container">
      <h1 className="timeline-view-title">
        MY JOURNEY OF
        <br />
        <br />
        <span className="ccbp">CCBP 4.0</span>
      </h1>

      <Chrono
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: 'blue',
          secondary: 'white',
          cardBgColor: 'white',
          titleColor: '#0967d2',
          titleColorActive: 'black',
        }}
      >
        {timelineItemsList.map(timelineItem =>
          timelineItem.categoryId === 'COURSE' ? (
            <CourseTimelineCard
              courseTimelineItem={timelineItem}
              key={timelineItem.id}
            />
          ) : (
            <ProjectTimelineCard
              projectTimelineItem={timelineItem}
              key={timelineItem.id}
            />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
