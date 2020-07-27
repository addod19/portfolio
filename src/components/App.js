import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';

const App = () => (
  <div className="content">
    {/* <Particles canvasClassName="abs" /> */}
    {/* <Navbar /> */}
    <Switch>
      <Route exact path="/" component={HomePage} />

      <Route component={Error} />
    </Switch>
  </div>
);

export default App;
