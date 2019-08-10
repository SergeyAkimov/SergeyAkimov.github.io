"use strict";

var svgWidth = document.querySelector('#svg').clientWidth,
    svgHeight = document.querySelector('#svg').clientHeight,
    s = Snap('#svg'),
    //дейсвтия над svg
makeCoords = function makeCoords(valueCenter) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return valueCenter / 2 + offset;
},
    colorChange = function colorChange() {
  return circle.animate({
    fill: '#a00'
  }, 300);
}; //рисуем svg


var circle = s.circle(makeCoords(svgWidth), makeCoords(svgHeight), makeCoords(svgWidth - 5));

circle.attr({
  fill: 'transparent',
  stroke: '#a00',
  strokeWidth: 5,
  strokeDasharray: 927,
  strokeDashoffset: 927
}).transform('rotate(-90deg)').node.onclick = function () {
  colorChange();
  document.querySelector('#message').innerHTML = 'Вы нажали на круг!';
}; //анимируем


setTimeout(function () {
  Snap.animate(927, 0, function (val) {
    circle.attr({
      strokeDashoffset: val
    });
  }, 500, mina.easeout); // circle.animate({strokeDashoffset: 927});
}, 500);