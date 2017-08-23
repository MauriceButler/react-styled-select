(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'styled-components', '../defaults.js', './SelectValueIcon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('styled-components'), require('../defaults.js'), require('./SelectValueIcon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.styledComponents, global.defaults, global.SelectValueIcon);
    global.SelectMultiValue = mod.exports;
  }
})(this, function (exports, _react, _styledComponents, _defaults, _SelectValueIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _defaults2 = _interopRequireDefault(_defaults);

  var _SelectValueIcon2 = _interopRequireDefault(_SelectValueIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  background-color: #ebf5ff;\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid #c2e0ff;\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #007eff;\n  display: inline-block;\n  font-size: 0.9em;\n  line-height: 1.4;\n  margin-right: 5px;\n  margin-top: 5px;\n  overflow: hidden;\n  vertical-align: top;\n'], ['\n  background-color: #ebf5ff;\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid #c2e0ff;\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #007eff;\n  display: inline-block;\n  font-size: 0.9em;\n  line-height: 1.4;\n  margin-right: 5px;\n  margin-top: 5px;\n  overflow: hidden;\n  vertical-align: top;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var SelectMultiValue = _styledComponents2.default.div(_templateObject);

  exports.default = function (props) {
    return _react2.default.createElement(
      SelectMultiValue,
      props,
      _react2.default.createElement(
        _SelectValueIcon2.default,
        null,
        'x'
      ),
      props.children
    );
  };
});
//# sourceMappingURL=SelectMultiValue.js.map