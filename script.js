/**
* Creates a 16x16 Etch A Sketch grid 
*/
function createGrid(){

    const mainNode = document.querySelector('.grid');

    for(let i=0; i<16; i++){
        
        let newNode = document.createElement("div");

        newNode.classList.toggle("grid-item");

        mainNode.appendChild(newNode);
    }
}

/**
* Creates a dynamic Etch A Sketch grid 
*/
function updateGrid(gridSize){
    const mainNode = document.querySelector('.grid');

    // Remove all child elements
    while (mainNode.firstChild) {
        mainNode.removeChild(mainNode.lastChild);
    }

    // Generate new grid items
    for(let i=0; i<gridSize; i++){
        let newNode = document.createElement("div");

        newNode.classList.toggle("grid-item");

        mainNode.appendChild(newNode);
    }

    //Dynamically set the grid template size for rows and columns based on user input
    const grid = document.querySelector('.grid');

    let gridTemplateSize = Math.sqrt(gridSize);

    grid.setAttribute("style", "background-color: blue;");
    grid.setAttribute("style", `grid-template-columns: repeat(${gridTemplateSize}, 1fr); grid-template-rows: repeat(${gridTemplateSize}, 1fr);`);
}

/**
* Adds mouseover event listener to each Etch A Sketch grid cell
*/
function addHoverEffect(){
    // Add event listener to trigger hover styling only once
    const gridCell = document.querySelectorAll(".grid-item");

    gridCell.forEach(cell => 
        cell.addEventListener("mouseover", () => cell.classList.toggle("grid-item-hover"), {once: true})
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