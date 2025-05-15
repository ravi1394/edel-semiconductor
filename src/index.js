import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ this line assumes App.js is in src/
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
