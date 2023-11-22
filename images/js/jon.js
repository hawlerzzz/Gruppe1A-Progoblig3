import { rectangle, circle, triangle, circlesvg, rectanglesvg, trianglesvg, testrect, testrect2 } from "./figures.js";

function canvasjon(){
    rectangle("gray", 0, 0, 100, 100);
    circle("black", 50, 50, 49);
    circle("yellow", 50, 50, 45);
    circle("black", 70, 35, 15);
    circle("black", 30, 35, 15);
    triangle("black", 25, 60, 75, 60, 50, 75);
}


canvasjon();


function svgjon() {
    rectanglesvg("gray", "0", "0", "100", "100");
    circlesvg("black", "50", "50", "49");
    circlesvg("yellow", "50", "50", "44");
    circlesvg("black", "70", "35", "15");
    circlesvg("black", "30", "35", "15");
    trianglesvg("black", "25, 60 75, 60 50, 75");
}

svgjon();

function testcanvas(navncanvas){
    testrect(navncanvas.toString(), "green", 0, 0, 100, 100);
    testrect(navncanvas.toString(), "blue", 20, 20, 30, 30);
}

testcanvas(canvastest);

function endaentest(){
    testrect2("black", 0, 0, 100, 100, "canvastest2");
}
endaentest();

function endaentest2(canvasid){
    testrect2("yellow", 0, 0, 100, 100, canvasid);
}

endaentest2(canvastest3);

function testibest(){
    testrect("canvastest4", "red", 0, 0, 100, 100);
}

testibest();