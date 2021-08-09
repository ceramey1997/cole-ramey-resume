import { React  } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

import './style/index.css'

ReactDOM.render(
          <Router>
            <App />
          </Router>,
  document.getElementById('root')
);