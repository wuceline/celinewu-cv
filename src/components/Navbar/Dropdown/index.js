import { Link } from 'react-scroll';
import './styles.scss';

const Dropdown = () => (
  <div className="dropdown">
    <Link to="presentation" smooth duration={1000}>
      Home
    </Link>
    <Link to="about-me" smooth duration={1000}>
      About me
    </Link>
    <Link to="technologies" smooth duration={1000}>
      Technologies
    </Link>
    <Link to="my-works" smooth duration={1000}>
      My works
    </Link>
    <Link to="contact" smooth duration={1000}>
      Contact me
    </Link>
  </div>
);

export default Dropdown;
