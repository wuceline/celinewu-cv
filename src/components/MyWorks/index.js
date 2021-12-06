import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import IconComponent from './iconComponent';
import projects from './projects';
import './styles.scss';

const MyWorks = () => (
  <div className="my-works">
    <h1 className="title">My work</h1>
    <VerticalTimeline>
      {projects.map((element) => (
        <VerticalTimelineElement
          key={element.id}
          date={element.date}
          dateClassName="date"
          icon={<IconComponent />}
        >
          <h3 className="vertical-timeline-element-title">
            {element.title}
          </h3>
          <p id="description">
            {element.description}
          </p>
          <a href="/" className="button">
            {element.buttonText}
          </a>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
);

export default MyWorks;
