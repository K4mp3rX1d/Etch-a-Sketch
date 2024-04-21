// Global Variables:
const container = document.querySelector('.container');


// Function Declarations:
function drawCanvas() {
    const dotsInRow = 40;
    const gridSize = Math.min(window.innerHeight, window.innerWidth);
    const dotSize = gridSize / dotsInRow;

    for (let i = 0; i < dotsInRow; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        // console.log(i);
        for (let j = 0; j < dotsInRow; j++) {
            const dot = document.createElement('div');
            dot.setAttribute('class', 'dot');
            dot.style.minHeight = dotSize + 'px';
            dot.style.minWidth = dotSize + 'px';
            // dot.textContent = i + j;
            row.appendChild(dot);
            // console.log('   ', j);
        }
        container.appendChild(row);
    }

    console.log(dots, gridSize);
}



// Test Codes:
// console.log(canvas.innerHeight, canvas.innerWidth);
drawCanvas();