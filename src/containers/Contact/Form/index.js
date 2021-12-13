import { connect } from 'react-redux';

import Form from 'src/components/Contact/Form';

import {
  setName,
  setEmail,
  setMessage,
} from 'src/actions/form';

const mapStateToProps = (state) => ({
  name: state.form.name,
  email: state.form.email,
  message: state.form.message,
});

const mapDispatchToProps = (dispatch) => ({
  setName: (newValue) => {
    const action = setName(newValue);
    dispatch(action);
  },
  setEmail: (newValue) => {
    const action = setEmail(newValue);
    dispatch(action);
  },
  setMessage: (newValue) => {
    const action = setMessage(newValue);
    dispatch(action);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
