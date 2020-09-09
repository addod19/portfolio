import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './components/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root'),
);
