import { Link } from 'react-scroll';
import './styles.scss';

const Dropdown = () => (
  <div className="dropdown">
    <Link to="presentation" smooth duration={1000} className="link">
      Home
    </Link>
    <Link to="about-me" smooth duration={1000} className="link">
      About me
    </Link>
    <Link to="technologies" smooth duration={1000} className="link">
      Technologies
    </Link>
    <Link to="my-works" smooth duration={1000} className="link">
      My works
    </Link>
    <Link to="contact" smooth duration={1000} className="link">
      Contact me
    </Link>
  </div>
);

export default Dropdown;
