'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LiveChat = function (_React$Component) {
  _inherits(LiveChat, _React$Component);

  function LiveChat() {
    _classCallCheck(this, LiveChat);

    return _possibleConstructorReturn(this, (LiveChat.__proto__ || Object.getPrototypeOf(LiveChat)).apply(this, arguments));
  }

  _createClass(LiveChat, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.loadLiveChatApi.bind(this)();
    }
  }, {
    key: 'chatLoaded',
    value: function chatLoaded() {
      if (window.LC_API) {
        this.setCallbacks.bind(this)();
        if (typeof this.props.onChatLoaded === 'function') {
          this.props.onChatLoaded(window.LC_API);
        }
      }
    }
  }, {
    key: 'chatNotLoaded',
    value: function chatNotLoaded() {
      if (typeof this.props.onChatLoaded === 'function') {
        this.props.onChatLoaded('error when loading');
      }
    }
  }, {
    key: 'loadLiveChatApi',
    value: function loadLiveChatApi() {
      if(typeof window !== 'undefined'){ 
        if (!window.LC_API) {
          window.__lc = window.__lc || {};
          window.__lc.license = this.props.license;
          window.__lc.group = this.props.group;
          window.__lc.params = this.props.params;
          window.__lc.visitor = this.props.visitor;
          window.__lc.chat_between_groups = this.props.chatBetweenGroups;
          var lc = document.createElement('script');
          lc.type = 'text/javascript';
          lc.async = true;
          lc.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(lc, s);
          lc.addEventListener('load', this.chatLoaded.bind(this));
          lc.addEventListener('error', this.chatNotLoaded.bind(this));
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: 'setCallbacks',
    value: function setCallbacks() {
      if (typeof this.props.onBeforeLoad === 'function') window.LC_API.on_before_load = this.props.onBeforeLoad.bind(this);

      if (typeof this.props.onAfterLoad === 'function') window.LC_API.on_after_load = this.props.onAfterLoad();

      if (typeof this.props.onChatWindowOpened === 'function') window.LC_API.on_chat_window_opened = this.props.onChatWindowOpened.bind(this);

      if (typeof this.props.onChatWindowMinimized === 'function') window.LC_API.on_chat_window_minimized = this.props.onChatWindowMinimized.bind(this);

      if (typeof this.props.onChatWindowHidden === 'function') window.LC_API.on_chat_window_hidden = this.props.onChatWindowHidden.bind(this);

      if (typeof this.props.onChatStateChanged === 'function') window.LC_API.on_chat_state_changed = this.props.onChatStateChanged.bind(this);

      if (typeof this.props.onChatStarted === 'function') window.LC_API.on_chat_started = this.props.onChatStarted.bind(this);

      if (typeof this.props.onChatEnded === 'function') window.LC_API.on_chat_ended = this.props.onChatEnded.bind(this);

      if (typeof this.props.onMessage === 'function') window.LC_API.on_message = this.props.onMessage.bind(this);

      if (typeof this.props.onTicketCreated === 'function') window.LC_API.on_ticket_created = this.props.onTicketCreated.bind(this);

      if (typeof this.props.onPrechatSurveySubmitted === 'function') window.LC_API.on_prechat_survey_submitted = this.props.onPrechatSurveySubmitted.bind(this);

      if (typeof this.props.onRatingSubmitted === 'function') window.LC_API.on_rating_submitted = this.props.onRatingSubmitted.bind(this);

      if (typeof this.props.onRatingCommentSubmitted === 'function') window.LC_API.on_rating_comment_submitted = this.props.onRatingCommentSubmitted.bind(this);
    }
  }]);

  return LiveChat;
}(_react2.default.Component);

exports.default = LiveChat;


LiveChat.propTypes = {
  // important
  license: _propTypes2.default.number.isRequired,
  group: _propTypes2.default.number,
  onChatLoaded: _propTypes2.default.func,
  // less important
  visitor: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    email: _propTypes2.default.string
  }),
  chatBetweenGroups: _propTypes2.default.bool,
  onBeforeLoad: _propTypes2.default.func,
  onAfterLoad: _propTypes2.default.func,
  onChatWindowOpened: _propTypes2.default.func,
  onChatWindowMinimized: _propTypes2.default.func,
  onChatWindowHidden: _propTypes2.default.func,
  onChatStateChanged: _propTypes2.default.func,
  onChatStarted: _propTypes2.default.func,
  onChatEnded: _propTypes2.default.func,
  onMessage: _propTypes2.default.func,
  onTicketCreated: _propTypes2.default.func,
  onPrechatSurveySubmitted: _propTypes2.default.func,
  onPostchatSurveySubmitted: _propTypes2.default.func,
  onRatingSubmitted: _propTypes2.default.func,
  onRatingCommentSubmitted: _propTypes2.default.func
};

LiveChat.defaultProps = {
  group: 0
};