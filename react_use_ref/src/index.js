import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import UseDom from './UseDom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <br/>
    <br/>
    <UseDom />
  </React.StrictMode>
);

