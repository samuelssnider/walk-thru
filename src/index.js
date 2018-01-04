import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import three from './requests/three_wt'
var listeners = require('./requests/show_one')

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

