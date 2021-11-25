import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import GlobalCases from '../pages/GlobalCases';
import TipsKesehatan from '../pages/TipsKesehatan';
import LandingPage from '../pages/LandingPage';

const Navbar = props => {
   
    return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/global">Global</Link>
            </li>
            <li>
              <Link to="/tips-kesehatan">Tips Kesehatan</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
            <Route path="/" element={<LandingPage />}>
          </Route>
          <Route path="/tips-kesehatan" element={<TipsKesehatan />}>
          </Route>
          <Route path="/global" element={<GlobalCases />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};




export default Navbar;