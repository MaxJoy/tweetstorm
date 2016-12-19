import React, { Component } from 'react';
import Tweet from './Tweet'
import {reactiveComponent} from 'omnistream'
import {closeStream} from '../actions/actions'


class Feed extends Component {
  constructor(props) {
    super(props);
    this.closeStream = this.closeStream.bind(this);
  }

  componentDidMount() {
    // this.props.dispatchObservableFn(getTweets);
  }

  closeStream() {
    console.log("trying to close stream with", this.props.keyword)
    this.props.dispatch(closeStream(this.props.keyword));
  }

  render() {
    console.log('tweetdiv props are', this.props)
    // console.log('this.props', this.props)
    // let tweets = [];
    // if (this.props.tweets && Object.keys(this.props.tweets).length) {
    //   const keywords = Object.keys(this.props.tweets);
    //   tweets = this.props.tweets[keywords[0]]
    //   // console.log(tweets)
    // }
    // // console.log(tweets)
    const tweetDivs = this.props.tweets.map(tweet => {
      return <Tweet tweet={tweet} />
    })
    return (
      <div className='feed'>
        <button onClick={this.closeStream} className='delete'>Pause</button>
        {tweetDivs}
      </div>
    )
  }
}

export default reactiveComponent(Feed, 'tweetState$')
