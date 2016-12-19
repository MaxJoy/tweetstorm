let initialState = { tweets: {} }

const tweetsReducer = (state = initialState, action) => {
  // console.log('action and state',action, state)

  switch (action.type) {
    case 'NEW_TWEET':
      if (state.tweets[action.keyword]) {
        // console.log('making it in there', action)
        const newKey = [ action.message, ...state.tweets[action.keyword]];
        const newTweets = Object.assign({}, state.tweets, {[action.keyword]: newKey} )

        return Object.assign({}, state, { tweets: newTweets })
      } else {
        const newKey = { [action.keyword]: [ action.message ] }
        const newTweets = Object.assign({}, state.tweets, newKey )
        return Object.assign({}, state, { tweets: newTweets })
      }
    default:
      return state;
  }
}

export default tweetsReducer
