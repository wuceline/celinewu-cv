import { Menu } from 'react-feather';
import Dropdown from './Dropdown';
import './styles.scss';

const Navbar = () => (
  <div className="navbar">
    <Menu size={40} className="icon" />
    <Dropdown />

  </div>
);

export default Navbar;
