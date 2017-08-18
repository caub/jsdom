"use strict";

const numRe = /((?:\b|[+-]?)\d*\.?\d+(?:[eE][+-]?\d+)?)\b/g;

exports.makeAnimatedLength = (instance, attrName) => new class SVGAnimatedLength {
  get baseVal() {
    return new class SVGLength {
      get value() {
        return Number(instance.getAttribute(attrName));
      }
      set value(v) {
        instance.setAttribute(attrName, v);
      }
    }();
  }
  get animVal() {
    return new class SVGLength {
      get value() {
        return Number(instance.getAttribute(attrName));
      }
      set value(v) {
        instance.setAttribute(attrName, v);
      }
    }();
  }
}();

class SVGPointList extends Array {
  constructor(list) {
    super(...list);
  }
  getItem(i) {
    return this[i];
  }
  get numberOfItems() {
    return this.length;
  }
}

exports.makePointList = instance => {
  const points = instance.getAttribute("points").match(numRe).map(Number);

  const svgPoints = Array.from({ length: points.length / 2 }, (_, i) => new class SVGPoint {
    get x() {
      return points[2 * i];
    }
    set x(v) {
      points[2 * i] = v;
      instance.setAttribute("points", points.join(" "));
    }
    get y() {
      return points[2 * i + 1];
    }
    set y(v) {
      points[2 * i + 1] = v;
      instance.setAttribute("points", points.join(" "));
    }
  }());

  return new SVGPointList(svgPoints);
};
