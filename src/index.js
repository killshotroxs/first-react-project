import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './Profile.css';

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <App />
//   </Router>
// );

const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

reportWebVitals();