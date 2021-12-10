import Navbar from 'src/containers/Navbar';
import Presentation from '../Presentation';
import AboutMe from '../AboutMe';
import Technologies from '../Technologies';
import MyWorks from '../MyWorks';
import Contact from '../Contact';

const Home = () => (
  <div className="home">
    <Presentation />
    <Navbar />
    <AboutMe />
    <Technologies />
    <MyWorks />
    <Contact />
  </div>
);

export default Home;
