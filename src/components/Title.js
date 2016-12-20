import React, { Component } from 'react';
import { reactiveComponent } from 'omnistream';
import {updateInput} from '../actions/actions.js'
import { tweetStreamCreator } from '../actions/actions.js'
import Feed from './Feed'

class Title extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
     this.props.dispatch(updateInput(event.target.value))
  }

  handleSubmit(event) {
    this.props.dispatchObservableFn(tweetStreamCreator(this.props.value))
  }

  render() {
  let feedNames = [];
  if (this.props.rates) {
    const keywords = Object.keys(this.props.rates);
    feedNames = keywords.length ? keywords : [];
  }
  const feeds = feedNames.map(name => {
    return <Feed keyword={name} key={name} rate={this.props.rates[name]} count={this.props.counts[name]}/>
  });
  return (
    <div id='title-container'>
      <div className='title'>
        <h1>TweetStorm</h1>
        <input onChange={this.handleChange} type='text' placeholder='type keyword here' value={this.props.value} />
        <button className='add-column' onClick={this.handleSubmit}>Add Column</button>
        </div>
        <div id='feed-container'>
          { feeds }
        </div>
      </div>
    )
  }
}

export default reactiveComponent(Title, 'inputState$', 'tweetState$');
