/**
* Creates a 16x16 Etch A Sketch grid 
*/
function createGrid(){
    //Select the grid div
    const mainNode = document.querySelector('.grid');

    let gridCell;

    for(let i=0; i<16; i++){
        let newNode = document.createElement("div");

        newNode.classList.toggle("grid-cell");

        mainNode.appendChild(newNode);
    }

    gridCell = document.querySelectorAll('.grid-cell');

    for(let i = 0; i < gridCell.length; i++){
        gridCell[i].style.width = "103px";
        gridCell[i].style.height = "100px";
    }
}

function updateGrid(gridSize){
    //Select the grid div
    const mainNode = document.querySelector('.grid');
    let gridCell;
    let width;
    let height;

    while (mainNode.firstChild) {
        mainNode.removeChild(mainNode.lastChild);
    }

    for(let i=0; i<gridSize; i++){
        let newNode = document.createElement("div");

        newNode.classList.toggle("grid-cell");

        mainNode.appendChild(newNode);
    }

    gridCell = document.querySelectorAll('.grid-cell');

    for(let i = 0; i < gridCell.length; i++){
        gridCell[i].style.width = width;
        gridCell[i].style.height = width;
    }
}

/**
* Adds mouseover event listener to each Etch A Sketch grid cell
*/
function addHoverEffect(){
    // Add event listener to trigger hover styling only once
    const gridCell = document.querySelectorAll(".grid-cell");

    gridCell.forEach(cell => 
        cell.addEventListener("mouseover", () => cell.classList.toggle("grid-cell-hover"), {once: true})
    );
}

createGrid();

addHoverEffect();

/**
* Add listener
*/
const promptButton = document.querySelector(".prompt-btn");

promptButton.addEventListener("click", function(){
    const promptGridSize = prompt("Please enter a new Etch A Sketch grid size.");

    const gridSize = parseInt(promptGridSize);

    if(isNaN(gridSize)){
        console.log("Please enter a number.")
    }

    else if(gridSize > 100){
        console.log("This is not a valid number. Please select a number less than 100");
    }

    else {
        updateGrid(gridSize);
    }
})
