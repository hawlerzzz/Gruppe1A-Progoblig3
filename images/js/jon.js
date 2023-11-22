import { rectangle, circle, triangle, circlesvg, rectanglesvg, trianglesvg } from "./figures.js";


function svgjon(svgnavn) {
    rectanglesvg("gray", "0", "0", "100", "100", svgnavn);
    circlesvg("black", "50", "50", "49", svgnavn);
    circlesvg("yellow", "50", "50", "44", svgnavn);
    circlesvg("black", "70", "35", "15", svgnavn);
    circlesvg("black", "30", "35", "15", svgnavn);
    trianglesvg("black", "25, 60 75, 60 50, 75", svgnavn);
}

svgjon("svgjon");
function canvasjon(canvasnavn){
    rectangle("gray", 0, 0, 100, 100, canvasnavn);
    circle("black", 50, 50, 49, canvasnavn);
    circle("yellow", 50, 50, 45, canvasnavn);
    circle("black", 70, 35, 15, canvasnavn);
    circle("black", 30, 35, 15, canvasnavn);
    triangle("black", 25, 60, 75, 60, 50, 75, canvasnavn);
}

canvasjon("canvasjon");




