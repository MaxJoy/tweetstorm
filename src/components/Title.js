import React, { Component } from 'react';
import handleInput from '../actions/actions.js'
import handleSubmit from '../actions/actions.js'


class Title extends Component {
  constructor(props) { 
    super(props)
  }
  handleChange(event) {
     this.props.dispatch(handleInput(event.target.value))
  }
  
  handleSubmit(event) {
    this.props.dispatch(handleSubmit())
  }
 
  render() {
    return (
      <div className='title'>
        <h1>TweetStorm</h1>  
        <input onChange={this.handleInput} type='text' placeholder='type keyword here' value={this.props.value} />
        <button className='add-column' onSubmit={this.handleSubmit}>Add Column</button>
      </div>  
    )
  }
}

export default Title

