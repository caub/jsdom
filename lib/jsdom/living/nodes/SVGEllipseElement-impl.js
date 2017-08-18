"use strict";

const SVGElementImpl = require("./SVGElement-impl").implementation;
const { makeAnimatedLength } = require("../helpers/svg");

class SVGEllipseElementImpl extends SVGElementImpl {
  get cx() {
    return makeAnimatedLength(this, "cx");
  }
  get cy() {
    return makeAnimatedLength(this, "cy");
  }
  get rx() {
    return makeAnimatedLength(this, "rx");
  }
  get ry() {
    return makeAnimatedLength(this, "ry");
  }
}

module.exports = {
  implementation: SVGEllipseElementImpl
};
