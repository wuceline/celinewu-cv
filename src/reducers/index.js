import { combineReducers } from 'redux';
import formReducer from './formReducer';
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
  main: mainReducer,
  form: formReducer,
});

export default rootReducer;
