import { rectangle, circle, circleevenodd, rectanglesvg, circlesvg, ekstracirclesvg } from  "./figures.js";

function canvasnina() {
	rectangle("bisque", 0, 0, 90, 90);
	circleevenodd("purple", 45, 70, 20, 45, 70, 18);
	circle("blue", 20, 20, 20); 
	circleevenodd("red", 45, 50, 40, 44, 50, 38);
	circle("dark-green", 70, 20, 20);
}

canvasnina();


function svgnina() {
	rectanglesvg("bisque", "0", "0", "90", "90");
	ekstracirclesvg("purple", "45", "70", "20", "transparent", "2");
	circlesvg("blue", "20", "20", "20");
	ekstracirclesvg("red", "45", "50", "40", "transparent", "2");
	circlesvg("dark-green", "70, 20, 20");

}

svgnina();
