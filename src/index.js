import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom';

import HomePage from './App.jsx';
import Context from './context/context.js';
import Header from './components/layout/headers/Header.jsx';
import CartToggle from './components/layout/component/CartToggle.jsx';
import index from './documentation/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Context> 
        <HomePage />
        <Header />
        <CartToggle />
     </Context>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
