import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Entry from './components/Entry';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      {/* <Switch> */}
        {/* <Route exact path='/' render={props => <Entry {...props} />} /> */}
        <Route exact path='/' render={props => <Admin {...props} />} />
      {/* </Switch> */}
    </Router>
  );
}

export default App;
