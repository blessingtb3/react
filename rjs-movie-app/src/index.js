//This app indicates the starting point of our js application

import React from 'react';
import ReactDOM from 'react-dom/client'; //calling react dom
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//calling the createRoot method from the ReactDOM package, passing our app and document.getElementById arguments in
//react dom is used to render our components and our entire app into the real dom, into our div with the root id.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
