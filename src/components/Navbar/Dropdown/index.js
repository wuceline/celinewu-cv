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
      onClick={() => {
        toggleDropdown();
      }}
    >
      Technologies
    </Link>
    <Link
      to="my-works"
      smooth
      duration={1000}
      className="link"
      onClick={() => {
        toggleDropdown();
      }}
    >
      My works
    </Link>
    <Link
      to="contact"
      smooth
      duration={1000}
      className="link"
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
