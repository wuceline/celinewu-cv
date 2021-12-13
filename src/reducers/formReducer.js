import {
  SET_NAME,
  SET_EMAIL,
  SET_MESSAGE,
} from 'src/actions/form';

const initialState = {
  name: '',
  email: '',
  message: '',
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.value,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.value,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.value,
      };
    default:
      return state;
  }
}

export default formReducer;
