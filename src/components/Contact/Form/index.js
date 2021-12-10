import { useRef } from 'react';
import emailjs from 'emailjs-com';

import './styles.scss';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_he1oy6b', 'template_ktw2prc', e.target, 'user_L4p8ZswuAco9WTqSlokB7')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <label htmlFor="name" className="label">
        Name
        <input type="text" name="name" id="name" />
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
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="message" className="label">
        Message
        <textarea name="message" id="message" />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
};

export default Form;
