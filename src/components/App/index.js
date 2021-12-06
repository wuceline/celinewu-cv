// == Import
import Navbar from '../Navbar';
import Presentation from '../Presentation';
import AboutMe from '../AboutMe';
import Technologies from '../Technologies';
import MyWorks from '../MyWorks';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Navbar />
    <Presentation />
    <AboutMe />
    <Technologies />
    <MyWorks />
  </div>
);

// == Export
export default App;
