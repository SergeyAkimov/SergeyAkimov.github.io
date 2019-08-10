const svgWidth = document.querySelector('#svg').clientWidth,
        svgHeight = document.querySelector('#svg').clientHeight,
        s = Snap('#svg');

//подсчитать координаты или радиус
const makeCoords=(valueCenter, offset=0)=> valueCenter/2 + offset,
        colorChange=()=>circle.animate({fill: 'red'}, 300)

//рисуем svg
let circle = s.circle(makeCoords(svgWidth), makeCoords(svgHeight), makeCoords(svgWidth-5));

circle.attr({
    fill: 'transparent',
    stroke: '#a00',
    strokeWidth: 5,
    strokeDasharray: 927,
    strokeDashoffset: 927
}).transform('rotate(-90deg)');
//по клику покрасим и выведем сообщение
circle.node.onclick =()=> {
    colorChange();
    document.querySelector('#message').innerHTML = 'Вы нажали на круг!'
}

//анимируем
setTimeout(()=>{
    Snap.animate(927, 0, function(val){
        circle.attr({strokeDashoffset: val});
    }, 500, mina.easeout);
    // circle.animate({strokeDashoffset: 927});
}, 500);