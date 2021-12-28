import Navbar from 'src/containers/Navbar';
import Presentation from '../Presentation';
import AboutMe from '../AboutMe';
import Technologies from '../Technologies';
import MyWork from '../MyWork';
import Contact from '../Contact';

const Home = () => (
  <div className="home">
    <Presentation />
    <Navbar />
    <AboutMe />
    <Technologies />
    <MyWork />
    <Contact />
  </div>
);

export default Home;
