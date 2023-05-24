

//Select the grid div
const mainNode = document.querySelector('.grid');

function createGrid(){
    // mainNode.parentNode.insertBefore(newNode, mainNode.nextSibling);
    for(let i=0; i<16; i++){
        let newNode = document.createElement("div");

        newNode.classList.toggle("grid-cell");

        mainNode.appendChild(newNode);
  
    }
}

// Create Etch A Sketch grid
createGrid();

// Add event listener to trigger hover styling only once
const gridCell = document.querySelectorAll(".grid-cell");

gridCell.forEach(cell => 
    cell.addEventListener("mouseover", () => cell.classList.toggle("grid-cell-hover"), {once: true})
);

