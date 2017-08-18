"use strict";

const SVGElementImpl = require("./SVGElement-impl").implementation;
const { makeAnimatedLength } = require("../helpers/svg");

class SVGRectElementImpl extends SVGElementImpl {
  get x() {
    return makeAnimatedLength(this, "x");
  }
  get y() {
    return makeAnimatedLength(this, "y");
  }
  get width() {
    return makeAnimatedLength(this, "width");
  }
  get height() {
    return makeAnimatedLength(this, "height");
  }
  get rx() {
    return makeAnimatedLength(this, "rx");
  }
  get ry() {
    return makeAnimatedLength(this, "ry");
  }
}

module.exports = {
  implementation: SVGRectElementImpl
};
