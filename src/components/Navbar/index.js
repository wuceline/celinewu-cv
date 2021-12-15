import PropTypes from 'prop-types';
import { Menu } from 'react-feather';
import Dropdown from 'src/containers/Navbar/Dropdown';
import './styles.scss';

const Navbar = ({
  showDropdown,
  toggleDropdown,
}) => (
  <div className="navbar">
    <p>
      <Menu
        size={30}
        className="icon"
        onClick={() => {
          toggleDropdown();
        }}
      />
    </p>
    {showDropdown && (
    <Dropdown />
    )}

  </div>
);

Navbar.propTypes = {
  showDropdown: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

export default Navbar;
