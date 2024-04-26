// create 16x16 grid

// grab button
const sizeButton = document.querySelector("#sizeButton");

//grab container
const gridContainer = document.querySelector("#gridContainer");

// create 16x16 grid intially
window.addEventListener("load", createGrid(16));

function createGrid(size) {
    gridContainer.innerHTML = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");

            // calculate height and width based on size input
            gridSquare.style.height = `${(600 - 2 * size) / size}px`;
            gridSquare.style.width = `${(600 - 2 * size) / size}px`;

            gridContainer.appendChild(gridSquare);
        }
    }
}

sizeButton.addEventListener("click", () => {
    let size = prompt("Enter a size");
    createGrid(size);
});

gridContainer.addEventListener("mouseover", (e) => {
    if (e.target != gridContainer) {
        e.target.style.backgroundColor = "yellow";
    }
});

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click', () => {
    createGrid(16);
})
