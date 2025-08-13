
// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // keep if present; otherwise you can remove this line
import { BrowserRouter } from 'react-router-dom';

// debug log to confirm this file runs
console.log('main.jsx loaded');

const rootEl = document.getElementById('root');
if (!rootEl) {
  console.error('No #root found in DOM');
} else {
  createRoot(rootEl).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  console.log('React rendered App');
}
