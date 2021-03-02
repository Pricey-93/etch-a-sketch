"use strict"
const container = document.getElementById("container");
let divSquare = document.createElement("div");
divSquare.classList = "div-squares";
function fillSquares(amount) {
    for (let i = 0; i < amount*amount; i++)
    container.append(divSquare.cloneNode());
}
function changeDimensions(dimension) {
    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
}
changeDimensions(32);
console.log(container.style.gridTemplateColumns);
fillSquares(32);