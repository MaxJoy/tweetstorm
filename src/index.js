import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Feed from './components/Feed';
import { StreamProvider, Timeline, createSuperstream, createStore } from 'omnistream';
import { input$, tweet$ } from './actions/actionStreams'
import formReducer from './reducers/formReducer'
import tweetsReducer from './reducers/tweetsReducer'


const superstream = createSuperstream();
const inputState$ = superstream.createStatestream(formReducer, input$);
const tweetState$ = superstream.createStatestream(tweetsReducer, tweet$);
const streamCollection = { inputState$, tweetState$ };

superstream.createStore(streamCollection);

ReactDOM.render((
  <StreamProvider superstream={superstream}>
    <App />
  </StreamProvider>
), document.getElementById('root'))
