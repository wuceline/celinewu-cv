// == Import
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../Home';
import Cv from '../Cv';
import Contact from '../Contact';

import './styles.scss';

// == Composant
const App = () => (
  <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cv" exact element={<Cv />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
);

// == Export
export default App;
