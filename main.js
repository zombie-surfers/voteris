//Left Canvas
const lCanvas = document.getElementById('leftBoard');
const lCtx = lCanvas.getContext('2d');

const rCanvas = document.getElementById('rightBoard');
const rCtx = rCanvas.getContext('2d');

lCtx.canvas.width = 1/2 * columns * block_size;
rCtx.canvas.width = 1/2 * columns * block_size;


lCtx.scale(block_size, block_size);
rCtx.scale(block_size, block_size);

let leftGameBoard = new Board();
let rightGameBoard = new Board();

function playTetris() {//Play method to play both of the boards
    leftGameBoard.reset();
    rightGameBoard.reset();
}

function pauseTetris() {
    
}

