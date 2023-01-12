import React from 'react';
import ReactDOM from 'react-dom/client';
import Bank from './Bank'
import School from './School'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bank />
    <br />
    <br />
    <School /> 
  </React.StrictMode>
);

