/**
* Creates a 16x16 Etch A Sketch grid,a 16x16 has 256 grid items
*/
function createGrid(){

    const mainNode = document.querySelector('.grid');

    for(let i=0; i<256; i++){
        
        let newNode = document.createElement("div");

        newNode.classList.toggle("grid-item");

        mainNode.appendChild(newNode);
    }

    addHoverEffect();
}

/**
* Creates a dynamic Etch A Sketch grid 
*/
function updateGrid(gridSize){
    const mainNode = document.querySelector('.grid');
    const totalGridItems = gridSize * gridSize;

    // Remove all child elements
    while (mainNode.firstChild) {
        mainNode.removeChild(mainNode.lastChild);
    }

    // Generate new grid items
    for(let i=0; i<totalGridItems; i++){
        let newNode = document.createElement("div");

        newNode.classList.toggle("grid-item");

        mainNode.appendChild(newNode);
    }

    //Dynamically set the grid template size for rows and columns based on user input
    const grid = document.querySelector('.grid');

    let gridTemplateSize = Math.sqrt(totalGridItems);

    grid.setAttribute("style", `grid-template-columns: repeat(${gridTemplateSize}, 1fr); grid-template-rows: repeat(${gridTemplateSize}, 1fr);`);

    addHoverEffect();
}

/**
* Reset grid to clear any sketches made by the user
*/
function resetGrid(){
    const mainNode = document.querySelector('.grid');
    const totalGridItems = mainNode.childElementCount;

    // Remove all child elements
    while (mainNode.firstChild) {
        mainNode.removeChild(mainNode.lastChild);
    }

    // Generate new grid items
    for(let i=0; i<totalGridItems; i++){
        let newNode = document.createElement("div");

        newNode.classList.toggle("grid-item");

        mainNode.appendChild(newNode);
    }

    //Dynamically set the grid template size for rows and columns based on user input
    const grid = document.querySelector('.grid');

    let gridTemplateSize = Math.sqrt(totalGridItems);

    grid.setAttribute("style", `grid-template-columns: repeat(${gridTemplateSize}, 1fr); grid-template-rows: repeat(${gridTemplateSize}, 1fr);`);

    addHoverEffect();

}

/**
* Apply style change to each grid item
*/
function addHoverEffect(){
    // Add event listener to trigger hover styling only once
    const gridItem = document.querySelectorAll(".grid-item");

    gridItem.forEach(cell => 
        cell.addEventListener("mouseover", () => cell.classList.toggle("grid-item-hover"), {once: true})
    );
}

/**
* Apply rainbow hover effect on each grid item
*/
function addRainbowHoverEffect(){

    const gridItem = document.querySelectorAll(".grid-item");

    gridItem.forEach(cell => 
        cell.addEventListener("mouseover", () => cell.setAttribute("style", `background-color: rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`), {once: true})
    );
}


/**
* Add a listener to the activate rainbow mode
*/
const randomBtn = document.getElementById("rainbow-btn");

randomBtn.addEventListener("click", function(){
    addRainbowHoverEffect();
})

/**
* Add a listener to the button to apply a new Etch A Sketch grid size
*/
const promptButton = document.getElementById("prompt-btn");

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

/**
* Add a listener to the button to apply a new Etch A Sketch grid size
*/
const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", function(){
    resetGrid();
})


createGrid();

