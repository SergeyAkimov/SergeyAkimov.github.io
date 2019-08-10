"use strict";

var svgWidth = document.querySelector('#svg').clientWidth,
    svgHeight = document.querySelector('#svg').clientHeight,
    s = Snap('#svg'); //подсчитать координаты или радиус

var makeCoords = function makeCoords(valueCenter) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return valueCenter / 2 + offset;
}; //рисуем svg


var circle = s.circle(makeCoords(svgWidth), makeCoords(svgHeight), makeCoords(svgWidth - 5));
circle.attr({
  fill: 'none',
  stroke: '#a00',
  strokeWidth: 5,
  strokeDasharray: 927,
  strokeDashoffset: 927
});
setTimeout(function () {
  Snap.animate(927, 0, function (val) {
    circle.attr({
      strokeDashoffset: val
    });
  }, 500, mina.easeout); // circle.animate({strokeDashoffset: 927});
}, 500);