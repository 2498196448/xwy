/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default-member
import App from './App';
import './index.css';

const page = ReactDOM.createRoot(document.getElementById('root'));

page.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
