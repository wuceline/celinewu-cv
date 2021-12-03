// == Import
import DropdownMain from '../DropdownMain';
import Presentation from '../Presentation';
import AboutMe from '../AboutMe';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <DropdownMain />
    <Presentation />
    <AboutMe />
  </div>
);

// == Export
export default App;
