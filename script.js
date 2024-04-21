// Global Variables:
const main = document.querySelector('main');
const canvas = document.querySelector('.canvas');
const btnNewPad = document.querySelector('button');


// Function Declarations:
function drawCanvas(dotsInRow) {
    const gridSize = Math.floor(Math.min(window.innerHeight, window.innerWidth) /dotsInRow) * dotsInRow; // Making sure gridSize is divisible by dotsInRow.
    canvas.style.height = gridSize + 'px';
    canvas.style.width = gridSize + 'px';
    const dotSize = gridSize / dotsInRow;

    for (let i = 0; i < dotsInRow; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < dotsInRow; j++) {
            const dot = document.createElement('div');
            dot.setAttribute('class', 'dot');
            dot.style.minHeight = dotSize + 'px';
            dot.style.minWidth = dotSize + 'px';
            dot.style.maxHeight = dotSize + 'px';
            dot.style.maxWidth = dotSize + 'px';
            canvas.appendChild(dot);
        }
        canvas.appendChild(row);
    }
}


function hoverEffect(event) {
    event.stopPropagation();
    event.target.style.backgroundColor = 'black';
}



// Test Codes:
drawCanvas(64);
canvas.addEventListener('mouseover', hoverEffect);
btnNewPad.addEventListener('click', () => {
    size = window.prompt('How many dots would you like to have each side in pad (max: 100)?', 64);
    size = size ? size : 64; // In case prompt fails for some reason.
    Array.from(canvas.children).forEach(n => n.remove());
    drawCanvas(size);
})