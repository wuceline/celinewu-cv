import { connect } from 'react-redux';

import { openDropdown } from 'src/actions/main';
import Navbar from '../../components/Navbar';

const mapStateToProps = (state) => ({
  showDropdown: state.main.showDropdown,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => {
    const action = openDropdown();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
