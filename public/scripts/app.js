"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// IndeciosionApp Component
var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndecisionApp).call(this, props));
    _this.handleRemoveAll = _this.handleRemoveAll.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.handleRemoveOption = _this.handleRemoveOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: props.options
    };
    return _this;
  } // did mout


  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var json = localStorage.getItem('options');
      var options = JSON.parse(json);

      if (json) {
        this.setState(function () {
          return {
            options: options
          };
        });
      }
    } // did update

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    } // remove all options

  }, {
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      this.setState(function () {
        return {
          options: []
        };
      });
    } // add options

  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return 'empty';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'repetition';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    } // remove option

  }, {
    key: "handleRemoveOption",
    value: function handleRemoveOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option !== optionToRemove;
          })
        };
      });
    } // render

  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Head, null), React.createElement(Action, null), React.createElement(Options, {
        options: this.state.options,
        handleRemoveAll: this.handleRemoveAll,
        handleRemoveOption: this.handleRemoveOption
      }), React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component); // IndecisionAPp default props


IndecisionApp.defaultProps = {
  options: ['asdf']
}; // head component

var Head = function Head(props) {
  return React.createElement("div", null, React.createElement("h1", null, "IndecisionApp"));
}; // action component


var Action = function Action(props) {
  return React.createElement("div", null, "action");
}; // options component


var Options = function Options(props) {
  return React.createElement("div", null, React.createElement("ul", null, props.options.map(function (option) {
    return React.createElement(Option, {
      key: option,
      optionText: option,
      handleRemoveOption: props.handleRemoveOption
    });
  })), React.createElement("button", {
    onClick: props.handleRemoveAll
  }, "remove all"));
}; // option component


var Option = function Option(props) {
  return React.createElement("div", null, React.createElement("li", null, props.optionText, React.createElement("button", {
    onClick: function onClick(e) {
      return props.handleRemoveOption(props.optionText);
    }
  }, "remove")));
}; // AddOption


var AddOption = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props));
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: props.error
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });

      if (!error) {
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("form", {
        onSubmit: this.handleAddOption
      }, React.createElement("input", {
        type: "text",
        name: "option"
      }), React.createElement("button", null, "add")), this.state.error && React.createElement("p", null, this.state.error));
    }
  }]);

  return AddOption;
}(React.Component);

AddOption.defaultProps = {
  error: undefined
};
var myApp = document.getElementById('app');
ReactDOM.render(React.createElement(IndecisionApp, null), myApp);
