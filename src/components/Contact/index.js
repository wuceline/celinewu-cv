import Form from 'src/containers/Contact/Form';
import './styles.scss';

const Contact = () => (
  <div className="contact">
    <h1 className="title">Contact me</h1>
    <Form />
    <p className="text">You can also contact me on <a href="mailto:celinewu.dev@gmail.com">celinewu.dev@gmail.com</a></p>
  </div>
);

export default Contact;
