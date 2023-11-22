import { rectangle, circle, triangle, rectanglesvg, circlesvg, trianglesvg } from "./figures.js";

function canvasole(canvasnavn) {
    rectangle("black", 0, 0, 100, 100, canvasnavn);
    rectangle("green", 35, 75, 30, 10, canvasnavn);
    circle("blue", 70, 25, 10, canvasnavn);
    circle("blue", 30, 25, 10, canvasnavn);
    triangle("red", 40, 40, 60, 40, 50, 30, canvasnavn);
}
canvasole("canvasole");

function svgole(svgnavn) {
    rectanglesvg("black", "0", "0", "100", "100", svgnavn);
    rectanglesvg("green", "35", "75", "30", "10", svgnavn);
    circlesvg("blue", "30", "25", "10", svgnavn);
    circlesvg("blue", "70", "25", "10", svgnavn);
    trianglesvg("red", "40, 40 60, 40 50, 30", svgnavn);
}

svgole("svgole");