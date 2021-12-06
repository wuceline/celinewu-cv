import {
  OPEN_DROPDOWN,
} from 'src/actions/main';

const initialState = {
  showDropdown: false,
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_DROPDOWN:
      return {
        ...state,
        showDropdown: !state.showDropdown,
      };
    default:
      return state;
  }
}

export default mainReducer;
