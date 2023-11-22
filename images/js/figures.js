
//Definerer et rektangel med farge, hvor det øverste venstre hjørnet starter, også høyde/bredde
export function rectangle(color, xstart, ystart, width, height, canvasnavn) {
    const canvas = document.getElementById(canvasnavn);
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        //draw a rectangle
        ctx.fillStyle = color.toString();
        ctx.fillRect(Number(xstart), Number(ystart), Number(width), Number(height));

    }
}


//Definerer sirkel med farge som en string, også midten av sirkelen, deretter radiusen
export function circle(color, xstart, ystart, radius, canvasnavn){
    const canvas = document.getElementById(canvasnavn);
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        //draw a circle
        ctx.beginPath();
        ctx.fillStyle = color.toString();
        ctx.strokeStyle = color.toString();
        ctx.arc(Number(xstart), Number(ystart), Number(radius), 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();
    }
}

export function circleevenodd(color, xstart, ystart, radius, xstart2, ystart2, radius2, canvasnavn){
    const canvas = document.getElementById(canvasnavn);
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        //draw a circle
        ctx.beginPath();
        ctx.fillStyle = color.toString();
        ctx.strokeStyle = color.toString();
        ctx.arc(Number(xstart), Number(ystart), Number(radius), 0, Math.PI * 2, true);
        ctx.arc(Number(xstart2), Number(ystart2), Number(radius2), 0, Math.PI * 2, true);
        ctx.fill("evenodd");
    }
}

//Tegner en trekant der man først setter farge. Deretter velger man x og y koordinatet hvor man starter å tegne fra
//også, hvor man trekker en strek til. Etterfulgt av enda en strek. den tegner automatisk en strek til startpunktet
//igjen for å fullføre trekanten.
export function triangle(color, xstart, ystart, xto, yto, xnext, ynext, canvasnavn) {
    const canvas = document.getElementById(canvasnavn);
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.fillStyle = color.toString();
        ctx.moveTo(Number(xstart), Number(ystart));
        ctx.lineTo(Number(xto), Number(yto));
        ctx.lineTo(Number(xnext), Number(ynext));
        ctx.fill();
    }
}


//Tegner en sirkel på samme vis som via canvas api
export function circlesvg(color, xstart, ystart, radius, svgnavn) {
    const svg = document.getElementById(svgnavn);
    const newElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newElement.style.stroke = color.toString();
    newElement.style.fill = color.toString();
    newElement.setAttribute("cx",xstart.toString());
    newElement.setAttribute("cy", ystart.toString());
    newElement.setAttribute("r", radius.toString());
    svg.appendChild(newElement);
}

export function ekstracirclesvg(color, xstart, ystart, radius, filltype, strokewidth, svgnavn) {
    const svg = document.getElementById(svgnavn);
    const newElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newElement.style.stroke = color;
    newElement.setAttribute("cx",xstart.toString());
    newElement.setAttribute("cy", ystart.toString());
    newElement.setAttribute("r", radius.toString());
    newElement.setAttribute("fill", filltype.toString());
    newElement.setAttribute("stroke-width", strokewidth.toString());
    svg.appendChild(newElement);
}

//tegner et rektangel slik som i canvas api
export function rectanglesvg(color, xstart, ystart, width, height, svgnavn) {
    const svg = document.getElementById(svgnavn);
    const newElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newElement.style.stroke = color.toString();
    newElement.style.fill = color.toString();
    newElement.setAttribute("x", xstart.toString());
    newElement.setAttribute("y", ystart.toString());
    newElement.setAttribute("width", width.toString());
    newElement.setAttribute("height", height.toString());
    svg.appendChild(newElement);
}

//tegner en polygon, men har navngitt den trekant for simplisitetens skyld
export function trianglesvg(color, koordinater, svgnavn){
    const svg = document.getElementById(svgnavn);
    const newElement = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    newElement.style.stroke = color.toString();
    newElement.style.fill = color.toString();
    newElement.setAttribute("points", koordinater.toString());
    svg.appendChild(newElement);
}
