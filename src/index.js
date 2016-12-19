import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { StreamProvider, Timeline, createSuperstream, createStore } from 'omnistream';

ReactDOM.render((
  <StreamProvider>
    <App />
  </StreamProvider>
), document.getElementById('root'))