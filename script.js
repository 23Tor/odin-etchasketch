// Default values
const DEFAULT_ROWS = 16;
const DEFAULT_COLUMNS = 16;

// Declare selectors
const modeButton = document.querySelectorAll('.mode');
const blackButton = document.querySelector(".black");
const eraserButton = document.querySelector(".eraser")
const clearButton = document.querySelector('.clear');
const container = document.getElementById("grid");
const rangeInput = document.getElementById("rangeInput");
const sliderInput = document.getElementById("sliderInput");
let currentMode = 'black';

// Event listeners
modeButton.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('color')) {
            currentMode = 'color';
        } else if (button.classList.contains('clear')) {
            currentMode = 'black';
            clearGrid();
        } else if (button.classList.contains('eraser')) {
            currentMode = 'eraser'
        }
    });
});

blackButton.addEventListener('click', () => {
    currentMode = 'black';
});

clearButton.addEventListener('click', () => {
    currentMode = 'black';
    clearGrid();
});

rangeInput.addEventListener('input', () => {
    const value = rangeInput.value;
    sliderInput.value = value;
    makeRows(value, value);
});

sliderInput.addEventListener('change', () => {
    const value = parseInt(sliderInput.value); // Convert the value to an integer
    if (!isNaN(value) && value >= parseInt(rangeInput.min) && value <= parseInt(rangeInput.max)) {
        rangeInput.value = value;
        makeRows(value, value);
    }
});

// Functions
// Clear buttons
function clearGrid() {
    container.querySelectorAll(".grid-item").forEach(cell => {
        cell.style.background = '';
    });
};

// Set grid size
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    container.innerHTML = ''; // Clear previous cells
    
    for (let c = 0; c < (rows * cols); c++) {
        const cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
    
    container.querySelectorAll('.grid-item').forEach(gridItem => {
        gridItem.removeEventListener('mouseover', painter);
        gridItem.addEventListener('mouseover', painter);
    });
};

// Mouseover color modes
function painter(e) {
    if (currentMode === 'black') {
        e.target.style.backgroundColor = 'black';
    } else if (currentMode === 'color') {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        e.target.style.backgroundColor = randomColor;
    } else if (currentMode === 'eraser') {
        e.target.style.background = '#e0e0e0'
    }
};

//Load the functions required to start
function startUp() {
    makeRows(DEFAULT_ROWS, DEFAULT_COLUMNS);
    modeButton.forEach(button => button.addEventListener('click', setupModeButtons));
};

function setupModeButtons() {
    if (this.classList.contains('color')) {
        currentMode = 'color';
    } else if (this.classList.contains('clear')) {
        currentMode = 'black';
        clearGrid();
    }
};

startUp();
