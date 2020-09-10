import React from 'react';
import ReactDOM from 'react-dom';
import './assets/rem'
import './assets/reset.css'
import 'antd-mobile/dist/antd-mobile.css'
import App from './App';
import {HashRouter} from 'react-router-dom'
ReactDOM.render(
 <HashRouter>
    <App />
 </HashRouter>
  ,
  document.getElementById('root')
);

