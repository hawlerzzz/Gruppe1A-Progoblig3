import { rectangle, circle, triangle, rectanglesvg, circlesvg, trianglesvg } from  "./figures.js";

function canvasjorgen() {
    rectangle("gray", 0, 0, 100, 100);
    rectangle("purple", 30, 60, 40, 20);
    triangle("purple", 40, 35, 60, 35, 35, 50);
    rectangle("white", 35, 60, 10, 10);
    rectangle("white", 55, 60, 10, 10);
    circle("black", 25, 15, 10);
    circle("black", 55, 15, 10);
    circle("red", 25, 20, 5);
    circle("red", 55, 20, 5);
}

canvasjorgen();


function svgjorgen() {
    rectanglesvg("gray", "0", "0", "100","100");
    rectanglesvg("purple", "30", "60", "40", "20");
    trianglesvg("purple", "40, 35 60, 35 35, 50");
    rectanglesvg("white", "35", "60", "10", "10");
    rectanglesvg("white", "55", "60", "10", "10");
    circlesvg("black", "25", "15", "10");
    circlesvg("black", "55", "15", "10");
    circlesvg("red", "25", "20", "5");
    circlesvg("red", "55", "20", "5");
}

svgjorgen();
