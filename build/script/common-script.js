"use strict";var svgWidth=document.querySelector("#svg").clientWidth,svgHeight=document.querySelector("#svg").clientHeight,s=Snap("#svg"),makeCoords=function(e,t){return e/2+(1<arguments.length&&void 0!==t?t:0)},circle=s.circle(makeCoords(svgWidth),makeCoords(svgHeight),makeCoords(svgWidth-5));circle.attr({fill:"none",stroke:"#a00",strokeWidth:5,strokeDasharray:circle.getTotalLength(),strokeDashoffset:circle.getTotalLength()}),Snap.animate(circle.getTotalLength(),0,function(e){circle.attr({strokeDashoffset:e})},1e3,mina.easeout),circle.animate({strokeDashoffset:circle.getTotalLength()});