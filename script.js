// Create grid
const container = document.getElementById("grid");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);

// Event listener for hovering over grid item
const cells = document.querySelectorAll('.grid-item');

cells.forEach(cells => {
    cells.addEventListener('mouseover', () => {
        cells.style.background = 'black'
    });
});

// Clear button
const clearButton = document.querySelector('#clearButton')

clearButton.addEventListener('click', () => {
    cells.forEach(cells => {
        cells.style.background = '';
    });
});