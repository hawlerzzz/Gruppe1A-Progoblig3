import { rectangle, circle, triangle, circlesvg, rectanglesvg, trianglesvg, testrect } from "./figures.js";

function canvasjon(){
    rectangle("brown", 0, 0, 100, 100);
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

function testcanvas(){
    testrect("canvastest", "green", 0, 0, 100, 100);
    testrect("canvastest", "blue", 20, 20, 30, 30);
}

testcanvas();

function endaentest(testid){
    testrect(testid, "black", 0, 0, 100, 100,);
}
endaentest("canvastest2");

function endaentest2(canvasid1){
    testrect(canvasid1.toString(),"yellow", 0, 0, 100, 100);
}

endaentest2(canvastest3);

function testibest(canvasid2){
    testrect(String(canvasid2), "red", 0, 0, 100, 100);
}

testibest(canvastest4);