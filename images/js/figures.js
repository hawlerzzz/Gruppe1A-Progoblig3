
//Definerer et rektangel med farge, hvor det øverste venstre hjørnet starter, også høyde/bredde
export function rectangle(color, xstart, ystart, width, height) {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        //draw a rectangle
        ctx.fillStyle = color;
        ctx.fillRect(xstart, ystart, width, height);

    }
}


//Definerer sirkel med farge som en string, også midten av sirkelen, deretter radiusen
export function circle(color, xstart, ystart, radius){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        //draw a circle
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.arc(xstart, ystart, radius, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();
    }
}

//Tegner en trekant der man først setter farge. Deretter velger man x og y koordinatet hvor man starter å tegne fra
//også, hvor man trekker en strek til. Etterfulgt av enda en strek. den tegner automatisk en strek til startpunktet
//igjen for å fullføre trekanten.
export function triangle(color, xstart, ystart, xto, yto, xnext, ynext) {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(xstart, ystart);
        ctx.lineTo(xto, yto);
        ctx.lineTo(xnext, ynext);
        ctx.fill();
    }
}


//Tegner en sirkel på samme vis som via canvas api
export function circlesvg(color, xstart, ystart, radius) {
    const svg = document.getElementById("svg");
    const newElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newElement.style.stroke = color;
    newElement.style.fill = color;
    newElement.setAttribute("cx",xstart);
    newElement.setAttribute("cy", ystart);
    newElement.setAttribute("r", radius);
    svg.appendChild(newElement);
}

//tegner et rektangel slik som i canvas api
export function rectanglesvg(color, xstart, ystart, width, height) {
    const svg = document.getElementById("svg");
    const newElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newElement.style.stroke = color;
    newElement.style.fill = color;
    newElement.setAttribute("x", xstart);
    newElement.setAttribute("y", ystart);
    newElement.setAttribute("width", width);
    newElement.setAttribute("height", height);
    svg.appendChild(newElement);
}

//tegner en polygon, men har navngitt den trekant for simplisitetens skyld
export function trianglesvg(color, koordinater){
    const svg = document.getElementById("svg");
    const newElement = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    newElement.style.stroke = color;
    newElement.style.fill = color;
    newElement.setAttribute("points", koordinater);
    svg.appendChild(newElement);
}