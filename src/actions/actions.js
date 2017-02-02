//getTweets
//actions to deal with inputs

import Rx from 'rxjs/Rx'

export const updateInput = (text) => ({ type: 'UPDATE_INPUT', text })
export const closeStream = (keyword) => ({ type: 'CLOSE_STREAM', keyword })

const socket$ = Rx.Observable.webSocket('ws://localhost:3000')

const getTweetStream = (keyword) => socket$.multiplex(
  () => JSON.stringify({ sub: keyword }),
  () => JSON.stringify({ unsub: keyword }),
  (data) => data.keyword === keyword
)

export const tweetStreamCreator = (keyword) => {
  return (omnistream) => {

    // create a stream of tweet objects from our websocket
    const tweet$ = getTweetStream(keyword)
        .retryWhen(error => error.delay(500)).publish();
    tweet$.connect();

    // create a stream that counts elapsed seconds
    const second$ = Rx.Observable.interval(1000)
      .scan((acc, curr) => acc + 1, 0)

    // create a stream that counts total tweets
    const tweetCount$ = tweet$.scan((acc, curr) => acc + 1, 0);

    // return a stream that emits a formatted rate and count action with each tweet received
    // this stream will continue emitting until a close_stream action is sent to the omnistream
    return second$.withLatestFrom(tweetCount$, (seconds, tweets) => (
      { type: 'UPDATE_RATE', rate: (tweets / seconds).toFixed(2), keyword}
    )).merge(tweetCount$.map(count => ({type: 'UPDATE_COUNT', count, keyword})))
    .takeUntil(omnistream.filter(action => (action.type === 'CLOSE_STREAM' && action.keyword === keyword)))
  }
}
