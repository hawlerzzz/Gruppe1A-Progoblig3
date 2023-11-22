import { rectangle, circle, triangle, rectanglesvg, circlesvg, trianglesvg } from  "./figures.js";

function canvasjorgen(canvasnavn) {
    rectangle("gray", 0, 0, 100, 100, canvasnavn);
    rectangle("purple", 30, 60, 40, 20, canvasnavn);
    triangle("purple", 40, 35, 60, 35, 35, 50, canvasnavn);
    rectangle("white", 35, 60, 10, 10, canvasnavn);
    rectangle("white", 55, 60, 10, 10, canvasnavn);
    circle("black", 25, 15, 10, canvasnavn);
    circle("black", 55, 15, 10, canvasnavn);
    circle("red", 25, 20, 5, canvasnavn);
    circle("red", 55, 20, 5, canvasnavn);
}

canvasjorgen("canvasjorgen");


function svgjorgen(svgnavn) {
    rectanglesvg("gray", "0", "0", "100","100", svgnavn);
    rectanglesvg("purple", "30", "60", "40", "20", svgnavn);
    trianglesvg("purple", "40, 35 60, 35 35, 50", svgnavn);
    rectanglesvg("white", "35", "60", "10", "10", svgnavn);
    rectanglesvg("white", "55", "60", "10", "10", svgnavn);
    circlesvg("black", "25", "15", "10", svgnavn);
    circlesvg("black", "55", "15", "10", svgnavn);
    circlesvg("red", "25", "20", "5", svgnavn);
    circlesvg("red", "55", "20", "5", svgnavn);
}

svgjorgen("svgjorgen");
