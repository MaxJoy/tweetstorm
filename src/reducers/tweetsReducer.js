let initialState = { counts: {}, rates: {} }

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_TWEET':
      if (state.tweets[action.keyword]) {
        const newKey = [action.message, ...state.tweets[action.keyword]];
        const newTweets = Object.assign({}, state.tweets, { [action.keyword]: newKey })
        return Object.assign({}, state, { tweets: newTweets })
      } else {
        const newKey = { [action.keyword]: [action.message] }
        const newTweets = Object.assign({}, state.tweets, newKey)
        return Object.assign({}, state, { tweets: newTweets })
      }
    case 'UPDATE_RATE':
      const newRate = Object.assign({}, state.rates, { [action.keyword]: action.rate });
      return Object.assign({}, state, { rates: newRate });
    case 'UPDATE_COUNT':
      const newCount = Object.assign({}, state.counts, { [action.keyword]: action.count });
      return Object.assign({}, state, { counts: newCount });
    default:
      return state;
  }
}

export default tweetsReducer
