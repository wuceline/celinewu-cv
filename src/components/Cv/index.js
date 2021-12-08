import { Link } from 'react-router-dom';
import './styles.scss';
import CvJpg from 'src/assets/cv.jpg';

const Cv = () => (
  <div className="cv">
    <Link to="/" className="back-link">
      Retour
    </Link>
    <img src={CvJpg} alt="cv" className="cv-img" />
  </div>
);

export default Cv;
