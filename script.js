// create 16x16 grid

//grab container
const gridContainer = document.querySelector("#gridContainer");


// create 16x16 grid
window.addEventListener("load", () => {
    console.log("loaded");
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            console.log(gridSquare);

            gridContainer.appendChild(gridSquare);
        }
    }
});
