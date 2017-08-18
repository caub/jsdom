"use strict";

const SVGElementImpl = require("./SVGElement-impl").implementation;
const { makePointList } = require("../helpers/svg");

class SVGPolygonElementImpl extends SVGElementImpl {
  get points() {
    return makePointList(this);
  }
}

module.exports = {
  implementation: SVGPolygonElementImpl
};
