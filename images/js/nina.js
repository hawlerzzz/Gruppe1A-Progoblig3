import { rectangle, circle, triangle, circleevenodd } from  ”./figures.js”;

function canvasnina() {
	rectangle("silver", 0, 0, 90, 90);
	circleevenodd("purple", 45, 80, 20, 43, 78, 18);
	circle("blue", 10, 10, 20); 
	circleevenodd("red", 45, 50, 40, 43, 48, 38);
	circle("dark-green", 80, 10, 20);
}

canvasnina();


function svgnina() {
	rectanglesvg("silver", "0", "0", "90", "90");
	circlessvg("purple", "45", "80", "20");
	circlesvg("blue", "10", "10", "20");
	circlesvg("red", "45", "50", "40");
	circlesvg("dark-green", "80, 10, 20");

}

svgnina();
