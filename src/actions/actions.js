//getTweets
//actions to deal with inputs

import Rx from 'rxjs/Rx'

export const updateInput = (text) => ({ type: 'UPDATE_INPUT', text })
export const closeStream = (keyword) => ({ type: 'CLOSE_STREAM', keyword })

const socket$ = Rx.Observable.webSocket('ws://localhost:3000')

const getTweetStream = (keyword) => socket$.multiplex(
  () => JSON.stringify({sub: keyword}),
  () => JSON.stringify({unsub: keyword}),
  (data) => data.keyword === keyword
)

export const tweetStreamCreator = (keyword) => {
  return (omnistream) => (
    getTweetStream(keyword)
    .map(tweet => ({ type: 'NEW_TWEET', message: tweet.text, keyword: keyword }))
    .retryWhen(error => error.delay(500))
    .takeUntil(omnistream.filter((action) => {
      return (action.type === 'CLOSE_STREAM' && action.keyword === keyword)
    }))
  )
}
