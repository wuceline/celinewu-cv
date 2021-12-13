import './styles.scss';
import { Linkedin, GitHub } from 'react-feather';

const Presentation = () => (
  <div className="presentation">
    <h1 className="name">I am Céline,</h1>
    <h2 className="title">Full stack Web Developper</h2>

    <div className="socialMedia-icons">
      <a href="https://www.linkedin.com/in/céline-wu" target="_blank" rel="noreferrer" className="socialMedia-links">
        <Linkedin className="linkedin-icon icon" size={40} />
      </a>
      <a href="https://www.github.com/wuceline" target="_blank" rel="noreferrer" className="socialMedia-links">
        <GitHub className="github-icon icon" size={40} />
      </a>
    </div>
  </div>
);

export default Presentation;
