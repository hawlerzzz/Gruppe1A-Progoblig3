import {rectangle, circle, rectanglesvg, circlesvg } from "./figures.js";

function svghawler(svgnavn) {
    rectanglesvg("black", "0", "0", "100", "100", svgnavn);
    rectanglesvg("yellow", "25", "80", "50", "5", svgnavn);
    circlesvg("yellow", "20", "22", "10", svgnavn);
    circlesvg("yellow", "80", "22", "10", svgnavn);
    circlesvg("yellow", "50", "50", "5", svgnavn);
}

svghawler("svghawler");

function canvashawler(canvasnavn){
    rectangle("black", 0, 0, 100, 100, canvasnavn);
    rectangle("yellow", 25, 80,50, 5, canvasnavn);
    circle("yellow", 20, 22, 10, canvasnavn);
    circle("yellow", 80, 22, 10, canvasnavn);
    circle("yellow", 50, 50, 5, canvasnavn);
}

canvashawler("canvashawler");

