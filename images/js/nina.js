import { rectangle, circle, circleevenodd, rectanglesvg, circlesvg, ekstracirclesvg } from  "./figures.js";

function canvasnina(canvasnavn) {
	rectangle("bisque", 0, 0, 90, 90, canvasnavn);
	circleevenodd("purple", 45, 70, 20, 45, 70, 18, canvasnavn);
	circle("blue", 20, 20, 20, canvasnavn);
	circleevenodd("red", 45, 50, 40, 45, 50, 38, canvasnavn);
	circle("green", 70, 20, 20, canvasnavn);
}

canvasnina("canvasnina");


function svgnina(svgnavn) {
	rectanglesvg("bisque", "0", "0", "90", "90", svgnavn);
	ekstracirclesvg("purple", "45", "70", "20", "transparent", "2", svgnavn);
	circlesvg("blue", "20", "20", "20", svgnavn);
	ekstracirclesvg("red", "45", "50", "40", "transparent", "2", svgnavn);
	circlesvg("green", "70", "20", "20", svgnavn);
	circlesvg("green", "70, 20, 20", svgnavn);
}

svgnina("svgnina");
