"use strict";

const SVGElementImpl = require("./SVGElement-impl").implementation;
const { makeAnimatedLength } = require("../helpers/svg");

class SVGCircleElementImpl extends SVGElementImpl {
  get cx() {
    return makeAnimatedLength(this, "cx");
  }
  get cy() {
    return makeAnimatedLength(this, "cy");
  }
  get r() {
    return makeAnimatedLength(this, "r");
  }
}

module.exports = {
  implementation: SVGCircleElementImpl
};
