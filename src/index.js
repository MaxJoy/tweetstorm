import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { StreamProvider, Timeline, createSuperstream, createStore } from 'omnistream';
import { input$ } from './actions/actionStreams'
import formReducer from './reducers/formReducer'
import { Observable } from 'rxjs/Rx'


const socket$ = Observable.webSocket('ws://localhost:3000')

const getTweetStream = (keyword) => socket$.multiplex(
  () => JSON.stringify({sub: keyword}),
  () => JSON.stringify({unsub: color}),
  (data) => data.keyword === keyword
)


const catsData$ = getTweetStream('cats')
  .map(tweet => ({ type: 'NEW_TWEET_CATS', message: tweet.text }))
  .retryWhen(error => error.delay(500));

catsData$.subscribe(e => console.log(e))

const puppiesData$ = getTweetStream('puppies')
  .map(tweet => ({ type: 'NEW_TWEET_PUPPIES', message: tweet.text }))
  .retryWhen(error => error.delay(500));

puppiesData$.subscribe(e => console.log(e))


const superstream = createSuperstream();
const inputState$ = superstream.createStatestream(formReducer, input$);
const streamCollection = { inputState$ };

superstream.createStore(streamCollection);

ReactDOM.render((
  <StreamProvider superstream={superstream}>
    <App />
  </StreamProvider>
), document.getElementById('root'))
