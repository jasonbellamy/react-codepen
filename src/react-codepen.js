import React from 'react';

const Codepen = React.createClass({

  propTypes: {
    user: React.PropTypes.string.isRequired,
    hash: React.PropTypes.string.isRequired,
    height: React.PropTypes.string,
    width: React.PropTypes.string,
    tab: React.PropTypes.oneOf(['html', 'css', 'result', 'js']),
    theme: React.PropTypes.string
  },

  getDefaultProps () {
    return {
      height: '250px',
      width: '100%',
      tab: 'result',
      theme: '0'
    };
  },

  render () {
    const src  = `//codepen.io/${this.props.user}/embed/${this.props.hash}/?height=${this.props.height}&theme-id=${this.props.theme}&default-tab=${this.props.tab}`;
    const user = `http://codepen.io/${this.props.user}`;
    const pen  = `${user}/pen/${this.props.hash}/`;

    return (
      <iframe width={this.props.width} height={this.props.height} scrolling="no" src={src} frameBorder="no" allowTransparency="true" allowFullScreen="true" style={{height: this.props.height, width: this.props.width}}>
        <a href={pen}>See this pen</a> by {this.props.user} (<a href={user}>@{this.props.user}</a>) on <a href='http://codepen.io'>CodePen</a>.
      </iframe>
    );
  }
});

export default Codepen;
