let initialState = { value: '' }

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return Object.assign({}, state, {
        value: action.text
      })
    default:
      return state;
  }
}

export default formReducer
