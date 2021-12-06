// == Import
import DropdownMain from '../DropdownMain';
import Presentation from '../Presentation';
import AboutMe from '../AboutMe';
import Technologies from '../Technologies';
import MyWorks from '../MyWorks';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <DropdownMain />
    <Presentation />
    <AboutMe />
    <Technologies />
    <MyWorks />
  </div>
);

// == Export
export default App;
