/**
* Creates a 16x16 Etch A Sketch grid 
*/
function createGrid(){
    //Select the grid div
    const mainNode = document.querySelector('.grid');

    for(let i=0; i<16; i++){
        let newNode = document.createElement("div");

        newNode.classList.toggle("grid-cell");

        mainNode.appendChild(newNode);
  
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


