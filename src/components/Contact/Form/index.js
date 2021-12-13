import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
// import PropTypes from 'prop-types';

import './styles.scss';

const Form = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const failMessage = () => {
    const formMessage = document.querySelector('.form-message');
    formMessage.innerHTML = 'Please provide required information *';
  };

  const successMessage = () => {
    const formMessage = document.querySelector('.form-message');
    formMessage.innerHTML = 'Your message has been sent';
    formMessage.style.color = '#57945e';
  };

  const sendFeedback = (serviceId, templateId, formUsed, userId, variables) => {
    emailjs.sendForm(serviceId, templateId, form.current, userId, variables)
      .then((result) => {
        successMessage();
        setName('');
        setCompany('');
        setPhone('');
        setEmail('');
        setMessage('');
      }, (error) => {
        const formMessage = document.querySelector('.form-message');
        formMessage.innerHTML = 'There was an error, please try again';
      });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (name && email && message) {
      sendFeedback('service_he1oy6b', 'template_ktw2prc', form.current, 'user_L4p8ZswuAco9WTqSlokB7', {
        name,
        company,
        phone,
        email,
        message,
      });
    }
    else {
      failMessage();
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <label htmlFor="name" className="label">
        Name *
        <input
          type="text"
          name="name"
          id="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />
      </label>

      <label htmlFor="company" className="label">
        Company
        <input
          type="text"
          name="company"
          id="company"
          onChange={(event) => {
            setCompany(event.target.value);
          }}
          value={company}
        />
      </label>

      <label htmlFor="phone" className="label">
        Phone
        <input
          type="text"
          name="phone"
          id="phone"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
          value={phone}
        />
      </label>

      <label htmlFor="email" className="label">
        Email *
        <input
          type="email"
          name="email"
          id="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
      </label>

      <label htmlFor="message" className="message-label">
        Your message *
        <textarea
          name="message"
          id="message"
          cols="45"
          rows="30"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          value={message}
        />
      </label>

      <div className="form-message"> </div>

      <button
        type="submit"
        className="button"
      >
        Send
      </button>

    </form>
  );
};

export default Form;
