import { rectangle, circle, triangle } from  ”./figures.js”;

function canvasnina() {
	rectangle("silver", 0, 0, 90, 90);
	circle("purple", 45, 80, 20); - outline
	circle("blue", 10, 10, 20); 
	circle("red", 45, 50, 40); - outline
	circle("dark-green", 80, 10, 20);
}

canvasnina();


function svgnina() {
	rectanglesvg("silver", "0", "0", "90", "90");
	circlesvg("purple", "45", "80", "20"); - outline
	circlesvg("blue", "10", "10", "20");
	circlesvg("red", "45", "50", "40"); - outline
	circlesvg("dark-green", "80, 10, 20");

}

svgnina();
