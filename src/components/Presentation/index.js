import './styles.scss';
import { Linkedin, GitHub } from 'react-feather';

const Presentation = () => (
  <div className="presentation">
    <h1 className="name">I am Céline</h1>

    <div className="socialMedia-icons">
      <Linkedin className="linkedin-icon icon" size={40} />
      <GitHub className="github-icon icon" size={40} />
    </div>
  </div>
);

export default Presentation;
