(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("../../packages/button");

},{"../../packages/button":2}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _common = require("@animaliads/common");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var style = "\n  button {\n    font-family: var(--font-family);\n    font-weight: var(--font-weight-bold);\n    line-height: var(--line-height);\n    border-radius: var(--border-radius);\n    border-width: var(--border-width);\n    padding: var(--padding);\n\n    letter-spacing: var(--letter-spacing-auto);\n    width: inherit;\n    border-style: solid;\n    min-height: 2.75em;\n    cursor: pointer;\n  }\n\n  button[size='small'], button[size='medium'], button[size='large'] {\n    font-size: var(--font-size);\n    line-height: var(--line-height);\n    padding: var(--padding);\n  }\n\n  button[size='small'] {\n    min-height: 2em;\n  }\n  \n  button[size='large'] {\n    min-height: 3.5em;\n  }\n\n  button[kind='primary'] {\n    color: var(--text-color);\n    background-color: var(--color);\n    box-shadow: var(--shadow);\n\n    border-color: transparent;\n  }\n\n  button[kind='primary']:hover {\n    color: var(--text-color);\n    background-color: var(--color-hover);\n  }\n\n  button[kind='primary']:active {\n    background-color: var(--color-pressed);\n  }\n\n\n  button:focus, button:enabled:active {\n    outline-color: var(--outline-color-focused);\n\n    outline-width: var(--border-width-lg);\n    outline-style: solid;\n    outline-offset: 2px;\n  }\n\n  button[kind='secondary'] {\n    color: var(--color);\n    border-color: var(--color);\n\n    background-color: transparent;\n    box-shadow: var(--shadow-none);\n  }\n\n  button[kind='secondary']:hover {\n    background-color: var(--background-hover);\n    border-color: var(--border-color-hover);\n    color: var(--border-color-hover);\n  }\n\n  button[kind='secondary']:enabled:active {\n    background-color: var(--background-pressed);\n    border-color: var(--border-color-hover);\n    color: var(--border-color-hover);\n  }\n\n  button[kind='tertiary'] {\n    color: var(--color);\n\n    background-color: transparent;\n    border-color: transparent;\n    box-shadow: var(--shadow-none);\n  }\n\n  button[kind='tertiary']:hover {\n    color: var(--border-color-hover);\n    background-color: var(--background-hover);\n  }\n\n  button[kind='tertiary']:enabled:active {\n    background-color: var(--background-pressed);\n    color: var(--color-pressed);\n  }\n\n  button[kind='primary'][danger=\"true\"] {\n    color: var(--text-color-danger);\n    background-color: var(--color-danger);\n\n    border-color: transparent;\n  }\n  \n  button[kind='primary'][danger=\"true\"]:enabled:hover {\n    background-color: var(--color-danger-hover);\n  }\n  \n  button[kind='primary'][danger=\"true\"]:enabled:active {\n    background-color: var(--color-danger-pressed);\n  }\n\n  button[kind='secondary'][danger=\"true\"] {\n    color: var(--color-danger);\n    border-color: var(--color-danger);\n  }\n  \n  button[kind='secondary'][danger=\"true\"]:enabled:hover {\n    background-color: var(--background-danger-hover);\n    border-color: var(--border-color-danger-hover);\n\n    color: var(--border-color-danger-hover);\n  }\n  \n  button[kind='secondary'][danger=\"true\"]:enabled:active {\n    background-color: var(--background-danger-pressed);\n    border-color: var(--border-color-danger-hover);\n\n    color: var(--border-color-danger-hover);\n  }\n\n\n  button:disabled {\n    cursor: not-allowed; \n  }\n\n  button[kind='primary']:disabled {\n    color: var(--text-color-disabled);\n    background-color: var(--color-disabled);\n  }\n\n  button[kind='secondary']:disabled {\n    color: var(--color-disabled);\n    border-color: var(--color-disabled);\n\n    background-color: transparent;\n  }\n\n  button[kind='tertiary']:disabled {\n    color: var(--color-disabled);\n\n    background-color: transparent;\n  }\n\n";
var ButtonKind;

(function (ButtonKind) {
  ButtonKind["primary"] = "primary";
  ButtonKind["secondary"] = "secondary";
  ButtonKind["tertiary"] = "tertiary";
})(ButtonKind || (ButtonKind = {}));

var ButtonType;

(function (ButtonType) {
  ButtonType["submit"] = "submit";
  ButtonType["button"] = "button";
  ButtonType["reset"] = "reset";
})(ButtonType || (ButtonType = {}));

var ButtonSize;

(function (ButtonSize) {
  ButtonSize["small"] = "small";
  ButtonSize["medium"] = "medium";
  ButtonSize["large"] = "large";
})(ButtonSize || (ButtonSize = {}));

var Button = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Button, _HTMLElement);

  var _super = _createSuper(Button);

  function Button() {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this);
    _this.shadow = _this.attachShadow({
      mode: 'open'
    });
    _this.clickEvent = document.createEvent('Event');

    _this.clickEvent.initEvent('onClick', true, true);

    _this.addEventListener('click', _this.onClick);

    return _this;
  }

  _createClass(Button, [{
    key: "disabled",
    get: function get() {
      var disabled = this.getAttribute('disabled');
      return (0, _common.transformBooleanProperties)(disabled);
    }
  }, {
    key: "danger",
    get: function get() {
      var isTertiary = this.kind === ButtonKind.tertiary;
      var isDanger = isTertiary ? 'false' : this.getAttribute('danger');
      return (0, _common.transformBooleanProperties)(isDanger);
    }
  }, {
    key: "size",
    get: function get() {
      var size = this.getAttribute('size');
      return !size || size === 'null' ? ButtonSize.medium : size;
    }
  }, {
    key: "kind",
    get: function get() {
      var kind = this.getAttribute('kind');
      return !kind || kind === 'null' ? ButtonKind.secondary : kind;
    }
  }, {
    key: "type",
    get: function get() {
      var type = this.getAttribute('type');
      return !type || type === 'null' ? ButtonType.button : type;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
      this.setDefaultKind();
      this.setDefaultSize();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback() {
      this.render();
      this.setDefaultKind();
      this.setDefaultSize();
    }
    /**
     * Aciona o foco no componente.
     */

  }, {
    key: "setFocus",
    value: function setFocus() {
      this.shadow.querySelector('button').focus();
    }
  }, {
    key: "onClick",
    value: function onClick() {
      if (this.disabled !== 'true') {
        this.dispatchEvent(this.clickEvent);
      }
    }
  }, {
    key: "setDefaultKind",
    value: function setDefaultKind() {
      var includesKind = Object.values(ButtonKind).includes(this.getAttribute('kind'));

      if (!this.hasAttribute('kind') || !includesKind) {
        this.setAttribute('kind', ButtonKind.secondary);
      }
    }
  }, {
    key: "setDefaultSize",
    value: function setDefaultSize() {
      var includesSize = Object.values(ButtonSize).includes(this.getAttribute('size'));

      if (!this.hasAttribute('size') || !includesSize) {
        this.setAttribute('size', ButtonSize.medium);
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.shadow.innerHTML = "\n            <style>".concat(style, "</style>\n            <button\n              type=\"").concat(this.type, "\"\n              kind=").concat(this.kind, "\n              size=").concat(this.size, "\n              ").concat(this.disabled === 'true' ? 'disabled' : '', "\n              danger=").concat(this.danger, ">\n                <slot></slot>\n            </button>\n        ");
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['kind', 'disabled', 'danger', 'type'];
    }
  }]);

  return Button;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

exports.Button = Button;
customElements.define('ani-button', Button);

},{"@animaliads/common":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformBooleanProperties = transformBooleanProperties;

function transformBooleanProperties(value) {
  console.log('COMMMON');

  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}

},{}]},{},[1]);
