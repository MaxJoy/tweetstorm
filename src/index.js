import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
