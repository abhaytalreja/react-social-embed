import React from 'react';

var callbacks = [];

function addScript (src, cb) {
  if (callbacks.length === 0) {
    callbacks.push(cb)
    var s = document.createElement('script')
    s.setAttribute('src', src)
    s.onload = () => callbacks.forEach((cb) => cb())
    document.body.appendChild(s)
  } else {
    callbacks.push(cb)
  }
}

class TweetEmbed extends React.Component { 
  componentDidMount () {
    const options = this.props.options || {};

    const renderTweet = () => {
      window.twttr.widgets.createTweetEmbed(this.props.id, this._div, options)
    }
    if (!window.twttr) {
      addScript('//platform.twitter.com/widgets.js', renderTweet)
    } else {
      renderTweet()
    }
  }
  render () {
    return <div ref={(c) => this._div = c} />
  }
}

TweetEmbed.propTypes = {
  children: React.PropTypes.string.isRequired,
  id: React.PropTypes.string,
  options: React.PropTypes.object,
};

export default TweetEmbed;
