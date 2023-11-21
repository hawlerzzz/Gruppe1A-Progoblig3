import {rectangle, circle, rectanglesvg, circlesvg } from "./figures.js";

function canvashawler(){
    rectangle("black", 0, 0, 100, 100);
    rectangle("yellow", 25, 80,50, 5);
    circle("yellow", 20, 22, 10);
    circle("yellow", 60, 22, 10);
    circle("yellow", 50, 50, 5);
}

canvashawler();


function svghawler() {
    rectanglesvg("black", "0", "0", "100", "100");
    rectanglesvg("yellow", "25", "80", "50", "5");
    circlesvg("yellow", "20", "22", "10");
    circlesvg("yellow", "60", "22", "10");
    circlesvg("yellow", "50", "50", "5");
}

svghawler();