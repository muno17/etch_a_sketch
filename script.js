// create 16x16 grid

//grab container
const gridContainer = document.querySelector("#gridContainer");

// create 16x16 grid
window.addEventListener("load", () => {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");

            gridContainer.appendChild(gridSquare);
        }
    }
});

gridContainer.addEventListener("mouseover", (e) => {
    if (e.target != gridContainer) {
        e.target.style.backgroundColor = "yellow";
    }
});
