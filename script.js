// Create grid
const container = document.getElementById("grid");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    container.innerHTML = ''; // Clear previous cells
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }

    // Add event listener for hovering over grid items
    container.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('grid-item')) {
            event.target.style.background = 'black';
        }
    });
}


// Default grid
const DEFAULT_ROWS = 16
const DEFAULT_COLUMNS = 16
makeRows(DEFAULT_ROWS, DEFAULT_COLUMNS)

// Slider value box
function updateTextInput(val) {
    document.getElementById('sliderInput').value = val;
    makeRows(val, val);
}

// Clear button
const clearButton = document.querySelector('#clearButton')
clearButton.addEventListener('click', () => {
    const cells = document.querySelectorAll(".grid-item")
    cells.forEach(cells => {
        cells.style.background = '';
    });
});