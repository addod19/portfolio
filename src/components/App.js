import React from 'react';
import { Route, Switch} from 'react-router-dom';


import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectPage';
import SkillsPage from '../pages/SkillsPage';
import ContactPage from '../pages/ContactPage';
import Navbar from './navbar';
import Footer from './footer';


const App = () => {
  

  return(
    <div className="content">
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/projects' component={ProjectsPage} />
        <Route exact path='/skills' component={SkillsPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
