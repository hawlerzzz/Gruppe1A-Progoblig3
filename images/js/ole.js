import { rectangle, circle, triangle, rectanglesvg, circlesvg, trianglesvg } from "./figures.js";

function canvasole(): {
    rectangle("black", 0, 0, 100, 100);
    circle("blue", 20, 25, 10);
    circle("blue", 60, 25, 10);
    triangle("red", 40, 40, 60, 40, 50, 30);
}
canvasole();

function svgole() {
    rectanglesvg("black", "0", "0", "100", "100");
    circlesvg("blue", "20", "25", "10");
    circlesvg("blue", "60", "25", "10");
    trianglesvg("red", "40, 40 60, 40 50, 30");
}

svgole();