//getTweets
//actions to deal with inputs

import Rx from 'rxjs/Rx'

export const updateInput = (text) => { type: 'UPDATE_INPUT', text }
export const getTweets = (keyword) => { type: 'GET_TWEETS', keyword }
export const newTweet = (tweet) => { type: 'NEW_TWEET', tweet }
export const handleSubmit = () => { type: 'KEYWORD_SUBMITTED'}



