const svgWidth = document.querySelector('#svg').clientWidth,
        svgHeight = document.querySelector('#svg').clientHeight,
        s = Snap('#svg');

//подсчитать координаты или радиус
const makeCoords=(valueCenter, offset=0)=> valueCenter/2 + offset

//рисуем svg
let circle = s.circle(makeCoords(svgWidth), makeCoords(svgHeight), makeCoords(svgWidth-5));

circle.attr({
    fill: 'none',
    stroke: '#a00',
    strokeWidth: 5,
    strokeDasharray: 927,
    strokeDashoffset: 927
    
});

Snap.animate(927, 0, function(val){
    circle.attr({strokeDashoffset: val});
}, 1000, mina.easeout);
circle.animate({strokeDashoffset: 927});