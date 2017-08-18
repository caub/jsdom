"use strict";

const SVGElementImpl = require("./SVGElement-impl").implementation;
const { makePointList } = require("../helpers/svg");

class SVGPolylineElementImpl extends SVGElementImpl {
  get points() {
    return makePointList(this);
  }
}

module.exports = {
  implementation: SVGPolylineElementImpl
};
