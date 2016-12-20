import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Feed from './components/Feed';
import { StreamProvider, Timeline, createOmnistream, createStore } from 'omnistream';
import { input$, tweet$ } from './actions/actionStreams'
import formReducer from './reducers/formReducer'
import tweetsReducer from './reducers/tweetsReducer'


const omnistream = createOmnistream();
const inputState$ = omnistream.createStatestream(formReducer, input$);
const tweetState$ = omnistream.createStatestream(tweetsReducer, tweet$);
const streamCollection = { inputState$, tweetState$ };

omnistream.createStore(streamCollection);

ReactDOM.render(
  <StreamProvider omnistream={omnistream}>
    <App />
</StreamProvider>, document.getElementById('root'))


   // <Timeline omnistream={omnistream} />
