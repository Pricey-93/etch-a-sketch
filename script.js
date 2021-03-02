"use strict"
const container = document.getElementById("container");
let divSquare = document.createElement("div");
divSquare.classList = "div-squares";
const squares = document.querySelectorAll(".div-squares");

function fillSquares(amount) {
    for (let i = 0; i < amount*amount; i++)
    container.append(divSquare.cloneNode());
}
function changeDimensions(dimension) {
    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    fillSquares(dimension);
}
function reset() {
    squares.forEach(square => {
        square.style.backgroundColor = "white";   
    });
}
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector))
            callback(e);
    })
}



addGlobalEventListener("mouseover", ".div-squares", (e) => {
    e.target.style.backgroundColor = "black";
});
addGlobalEventListener("click", "#dimensions-btn", (e) => {
    let input = prompt("Enter a number between 1-64");
    let valid = false;
    while (!valid) {
        if (isNaN(input) || input < 1 || input > 64)
            input = prompt("Input not valid, enter a number between 1-64");
        else
            valid = true;
    }
    changeDimensions(input);
});
addGlobalEventListener("click", "#reset-btn", (e) => {
    console.log(e.target);
    reset();
});


changeDimensions(16);