'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Codepen = _react2['default'].createClass({
  displayName: 'Codepen',

  propTypes: {
    user: _react2['default'].PropTypes.string.isRequired,
    hash: _react2['default'].PropTypes.string.isRequired,
    height: _react2['default'].PropTypes.string,
    width: _react2['default'].PropTypes.string,
    tab: _react2['default'].PropTypes.oneOf(['html', 'css', 'result', 'js']),
    theme: _react2['default'].PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      height: '250px',
      width: '100%',
      tab: 'result',
      theme: '0'
    };
  },

  render: function render() {
    var src = '//codepen.io/' + this.props.user + '/embed/' + this.props.hash + '/?height=' + this.props.height + '&theme-id=' + this.props.theme + '&default-tab=' + this.props.tab;
    var user = 'http://codepen.io/' + this.props.user;
    var pen = user + '/pen/' + this.props.hash + '/';

    return _react2['default'].createElement(
      'iframe',
      { width: this.props.width, height: this.props.height, scrolling: 'no', src: src, frameBorder: 'no', allowTransparency: 'true', allowFullScreen: 'true', style: { height: this.props.height, width: this.props.width } },
      _react2['default'].createElement(
        'a',
        { href: pen },
        'See this pen'
      ),
      ' by ',
      this.props.user,
      ' (',
      _react2['default'].createElement(
        'a',
        { href: user },
        '@',
        this.props.user
      ),
      ') on ',
      _react2['default'].createElement(
        'a',
        { href: 'http://codepen.io' },
        'CodePen'
      ),
      '.'
    );
  }
});

exports['default'] = Codepen;
module.exports = exports['default'];