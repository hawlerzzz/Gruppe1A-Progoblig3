import { rectangle, circle, triangle, circlesvg, rectanglesvg, trianglesvg, testrect, testrect2 } from "./figures.js";

function canvasjon(){
    rectangle("gray", 0, 0, 100, 100);
    circle("black", 50, 50, 49);
    circle("yellow", 50, 50, 45);
    circle("black", 70, 35, 15);
    circle("black", 30, 35, 15);
    triangle("black", 25, 60, 75, 60, 50, 75);
}





function svgjon() {
    rectanglesvg("gray", "0", "0", "100", "100");
    circlesvg("black", "50", "50", "49");
    circlesvg("yellow", "50", "50", "44");
    circlesvg("black", "70", "35", "15");
    circlesvg("black", "30", "35", "15");
    trianglesvg("black", "25, 60 75, 60 50, 75");
}

svgjon();

function testcanvas(){
    testrect("canvastest", "green", 0, 0, 100, 100);
    testrect("canvastest", "blue", 20, 20, 30, 30);
}

testcanvas();

function endaentest(testid){
    testrect(testid, "black", 0, 0, 100, 100,);
}
endaentest("canvastest2");

function endaentest2(){
    testrect2("yellow", 0, 0, 100, 100, "canvastest3");
}

endaentest2();

function testibest(canvasid2){
    testrect2("red", 0, 0, 100, 100, canvasid2);
}

testibest("canvastest4");