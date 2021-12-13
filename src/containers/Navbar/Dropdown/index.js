import { connect } from 'react-redux';

import { openDropdown } from 'src/actions/main';
import Dropdown from 'src/components/Navbar/Dropdown';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  toggleDropdown: () => {
    const action = openDropdown();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
