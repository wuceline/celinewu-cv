import Navbar from 'src/containers/Navbar';
import Presentation from '../Presentation';
import AboutMe from '../AboutMe';
import Technologies from '../Technologies';
import MyWorks from '../MyWorks';

const Home = () => (
  <div className="home">
    <Presentation />
    <Navbar />
    <AboutMe />
    <Technologies />
    <MyWorks />
  </div>
);

export default Home;
