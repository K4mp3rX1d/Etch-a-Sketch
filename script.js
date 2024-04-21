// Global Variables:
const container = document.querySelector('.container');


// Function Declarations:
function drawCanvas() {
    const dotsInRow =50;
    const gridSize = Math.floor(Math.min(window.innerHeight, window.innerWidth) /dotsInRow) * dotsInRow;
    container.style.height = gridSize + 'px';
    container.style.width = gridSize + 'px';
    const dotSize = gridSize / dotsInRow;
    console.log(gridSize, dotSize);

    for (let i = 0; i < dotsInRow; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < dotsInRow; j++) {
            const dot = document.createElement('div');
            dot.setAttribute('class', 'dot');
            dot.style.minHeight = dotSize + 'px';
            dot.style.minWidth = dotSize + 'px';
            dot.style.maxHeight = dotSize + 'px';
            dot.style.maxWidth = dotSize + 'px';
            container.appendChild(dot);
        }
        container.appendChild(row);
    }
}


function hoverEffect(event) {
    event.stopPropagation();
    event.target.style.backgroundColor = 'black';
}



// Test Codes:
drawCanvas();
container.addEventListener('mouseover', hoverEffect);