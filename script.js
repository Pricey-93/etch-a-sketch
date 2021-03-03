"use strict"
const container = document.getElementById("container");
let divSquare = document.createElement("div");
divSquare.classList = "div-squares";


function fillSquares(amount) {
    for (let i = 0; i < amount*amount; i++)
    container.append(divSquare.cloneNode());
}
function removeSquares() {
    while (container.hasChildNodes()) {  
        container.removeChild(container.firstChild);
    }
}
function changeDimensions(dimension) {
    removeSquares();
    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    fillSquares(dimension);
}
function reset() {
    const squares = document.querySelectorAll(".div-squares");
    squares.forEach(square => {
        square.style.backgroundColor = "";
    });
}
function randomColor() {
    let o = Math.round, r = Math.random, s = 255;
    return "rgba(" + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ")";
}
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector))
            callback(e);
    })
}



addGlobalEventListener("mouseover", ".div-squares", (e) => {
    if (document.getElementById("rgb-btn").hasAttribute("rgb-active"))
        e.target.style.backgroundColor = randomColor();
    else
        e.target.style.backgroundColor = "black";
});
addGlobalEventListener("click", "#dimensions-btn", (e) => {
    let input = prompt("Enter a number between 1-100");
    let valid = false;
    while (!valid) {
        if (isNaN(input) || input < 1 || input > 100)
            input = prompt("Input not valid, enter a number between 1-100");
        else
            valid = true;
    }
    changeDimensions(input);
});
addGlobalEventListener("click", "#rgb-btn", (e) => {
    e.target.toggleAttribute("rgb-active");
})
addGlobalEventListener("click", "#reset-btn", (e) => {
    console.log(e.target);
    reset();
});


changeDimensions(16);