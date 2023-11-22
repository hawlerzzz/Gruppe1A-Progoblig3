import { rectangle, circle, triangle, circlesvg, rectanglesvg, trianglesvg } from "./figures.js";


function canvaslise(canvasnavn) {
	circle("black", 75, 75, 61, canvasnavn);
	circle("pink", 75, 75, 60, canvasnavn);
	circle("white", 55, 50, 10, canvasnavn);
	circle("white", 95, 50, 10, canvasnavn);
	rectangle("black", 68, 55, 14, 4, canvasnavn);
	circle("black", 55, 50, 7, canvasnavn);
	circle("black", 95, 50, 7, canvasnavn);
}

canvaslise("canvaslise");


function svglise(svgnavn) {
	circlesvg("black", "75", "75", "61", svgnavn);
	circlesvg("pink", "75", "75", "60", svgnavn);
	circlesvg("white", "55", "50", "10", svgnavn);
	circlesvg("white", "95", "50", "10", svgnavn);
	rectanglesvg("black", "68", "57", "14", "4", svgnavn);
	circlesvg("black", "55", "50", "7", svgnavn);
	circlesvg("black", "95", "50", "7", svgnavn);
}

svglise("svglise");

