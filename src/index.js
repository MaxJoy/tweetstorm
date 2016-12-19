import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { StreamProvider, Timeline, createSuperstream, createStore } from 'omnistream';
import { input$ } from './actions/actionStreams'
import formReducer from './reducers/formReducer'


const superstream = createSuperstream();
const inputState$ = superstream.createStatestream(formReducer, input$);
const streamCollection = { inputState$ };

superstream.createStore(streamCollection);

ReactDOM.render((
  <StreamProvider superstream={superstream}>
    <App />
  </StreamProvider>
), document.getElementById('root'))