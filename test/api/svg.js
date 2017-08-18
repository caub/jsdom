"use strict";
const assert = require("assert");
const { JSDOM } = require("../..");
// const document = new JSDOM().window.document;

const polygon = JSDOM.fragment`<svg>
	<polygon points="10,-99 -.2,89." />
</svg>`.firstChild.querySelector("polygon");

const points = polygon.points;
assert.equal(points.numberOfItems, 2);
assert.equal(points[0], points.getItem(0));
assert.equal(points[0].x, 10);
assert.equal(points[0].y, -99);
assert.equal(points[1].x, -0.2);
assert.equal(points[1].y, 89);

points[0].y = -0.8;
assert.equal(points[0].y, -0.8);
assert.equal(polygon.points[0].y, -0.8);
assert.equal(polygon.getAttribute("points"), "10 -0.8 -0.2 89");

const line = JSDOM.fragment`<svg>
	<line x1="10" y1="-.02" x2="9.67" y2="89."/>
</svg>`.firstElementChild.firstElementChild;

assert.equal(line.x1.baseVal.value, 10);
assert.equal(line.y1.baseVal.value, -0.02);
assert.equal(line.x2.baseVal.value, 9.67);
assert.equal(line.y2.baseVal.value, 89);

line.x1.baseVal.value = -3.14;
assert.equal(line.x1.baseVal.value, -3.14);
assert.equal(line.getAttribute("x1"), "-3.14");

// TODO impl HTML and SVG as separate contexts
// JSDOM.fragment`<svg>
// 	<div></div>
// </svg>`;
// JSDOM.fragment`<div>
// 	<line/>
// </div>`;
// should results in <svg></svg><div></div>
