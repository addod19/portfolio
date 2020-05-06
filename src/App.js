import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Daniel Larbi Addo',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
        
      ],
      home: {
        title: 'My amazing portfolio',
        subTitle: 'Check out my projects',
        text: 'click for more'
      },
      about: {
        title: 'About me',
      },
      contact: {
        title: 'Lets talk',
      }
    }
  }

  render() {
    return (
      <Router>
        
      </Router>
    );
  }
  
}

export default App;
