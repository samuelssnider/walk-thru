import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import three from './requests/three_wt'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

