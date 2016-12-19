let initialState = { value: '' }

const formReducer = (state = initialState, action) => { 
  switch (action.type) { 
    case 'UPDATE_INPUT': 
      return Object.assign({}, state, {
        value: action.value
      })
    case 'KEYWORD_SUBMITTED':
      console.log('keyword submitted!');
      return state
      
    default:
      return state;
  }
}

export default formReducer