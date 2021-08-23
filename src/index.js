import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './common/Header';


import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/api/';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);