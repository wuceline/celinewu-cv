import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';

import './styles.scss';

const Form = ({
  setName,
  setEmail,
  setMessage,
}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_he1oy6b', 'template_ktw2prc', e.target, 'user_L4p8ZswuAco9WTqSlokB7')
      .then((result) => {
        // console.log(result);
      }, (error) => {
        // console.log(error.text);
      });
    e.target.reset();
  };

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validate = () => {
    const nameError = '';
    let emailError = '';
    let messageError = '';

    if (!this.state.name) {
      setNameError = 'Please enter a name';
    }
    if (!this.state.email.includes('@')) {
      emailError = 'Please enter a valid email';
    }
    if (!this.state.message) {
      messageError = 'Please write a message';
    }
    if (!this.state.message.length > 1000) {
      messageError = 'Sorry, the message is too long, 1000 characters maximum';
    }
    if (nameError || emailError || messageError) {
      this.setState({ nameError, emailError, messageError });
      return false;
    }

    return true;
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const isValid = this.validate();
  //   if (isValid) {
  //     console.log(this.state);
  //     // clear form
  //     this.setState(initialState);
  //   }
  // };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <label htmlFor="name" className="label">
        Name
        <input
          type="text"
          name="name"
          id="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>
      <label htmlFor="company" className="label">
        Company
        <input type="text" name="company" id="company" />
      </label>
      <label htmlFor="phone" className="label">
        Phone
        <input type="text" name="phone" id="phone" />
      </label>
      <label htmlFor="email" className="label">
        Email
        <input
          type="email"
          name="email"
          id="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </label>
      <label htmlFor="message" className="message-label">
        Your message
        <textarea
          name="message"
          id="message"
          cols="50"
          rows="30"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </label>
      <button type="submit" className="button">
        Send
      </button>
    </form>
  );
};

Form.propTypes = {
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
};

export default Form;
