"use strict";

const SVGElementImpl = require("./SVGElement-impl").implementation;
const { makeAnimatedLength } = require("../helpers/svg");

class SVGLineElementImpl extends SVGElementImpl {
  get x1() {
    return makeAnimatedLength(this, "x1");
  }
  get y1() {
    return makeAnimatedLength(this, "y1");
  }
  get x2() {
    return makeAnimatedLength(this, "x2");
  }
  get y2() {
    return makeAnimatedLength(this, "y2");
  }
}

module.exports = {
  implementation: SVGLineElementImpl
};
