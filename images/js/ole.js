import { rectangle, circle, triangle, rectanglesvg, circlesvg, trianglesvg } from "./figures.js";

function canvasole() {
    rectangle("black", 0, 0, 100, 100);
    rectangle("green", 60, 75, 30, 10);
    circle("blue", 40, 25, 10);
    circle("blue", 80, 25, 10);
    triangle("red", 40, 40, 60, 40, 50, 30);
}
canvasole();

function svgole() {
    rectanglesvg("black", "0", "0", "100", "100");
    rectangle("green", "60", "75", "30", "10");
    circlesvg("blue", "40", "25", "10");
    circlesvg("blue", "80", "25", "10");
    trianglesvg("red", "40, 40 60, 40 50, 30");
}

svgole();