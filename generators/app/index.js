'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FlynnStyles extends _yeomanGenerator2.default {
  welcome() {
    this.log('It worked!');
  }
};

exports.default = FlynnStyles;
module.exports = exports['default'];