import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Country from './Country';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <br/>
    <Country / >
  </React.StrictMode>
);

