import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import './styles.scss';

const Dropdown = ({ toggleDropdown }) => (
  <div className="dropdown">
    <Link
      to="presentation"
      smooth
      duration={1000}
      className="link"
      activeClass="active"
      spy
      onClick={() => {
        toggleDropdown();
      }}
    >
      Home
    </Link>
    <Link
      to="about-me"
      smooth
      duration={1000}
      className="link"
      activeClass="active"
      spy
      onClick={() => {
        toggleDropdown();
      }}
    >
      About me
    </Link>
    <Link
      to="technologies"
      smooth
      duration={1000}
      className="link"
      activeClass="active"
      spy
      onClick={() => {
        toggleDropdown();
      }}
    >
      Technologies
    </Link>
    <Link
      to="my-work"
      smooth
      duration={1000}
      className="link"
      activeClass="active"
      spy
      onClick={() => {
        toggleDropdown();
      }}
    >
      My work
    </Link>
    <Link
      to="contact"
      smooth
      duration={1000}
      className="link"
      activeClass="active"
      spy
      onClick={() => {
        toggleDropdown();
      }}
    >
      Contact me
    </Link>
  </div>
);
Dropdown.propTypes = {
  toggleDropdown: PropTypes.func.isRequired,
};
export default Dropdown;
