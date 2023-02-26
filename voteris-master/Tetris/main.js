//this is the canvas that displays the current tetrimoe 

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');


// this is the canvas that displays the next tetrimoe that is coming 
const canvasNext = document.getElementById('next');
const ctxNext = canvasNext.getContext('2d');


// // Calculate size of canvas from constants.
// ctx.canvas.width = COLS * BLOCK_SIZE;
// ctx.canvas.height = ROWS * BLOCK_SIZE;

// // Scale blocks
// ctx.scale(BLOCK_SIZE, BLOCK_SIZE);




function initNext() {
    // Calculate size of canvas from constants.
    ctxNext.canvas.width = 4 * BLOCK_SIZE;
    ctxNext.canvas.height = 4 * BLOCK_SIZE;
    ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);
  }


  const moves = {
    [KEY.LEFT]: (p) => ({ ...p, x: p.x - 1 }),
    [KEY.RIGHT]: (p) => ({ ...p, x: p.x + 1 }),
    [KEY.DOWN]: (p) => ({ ...p, y: p.y + 1 }),
    //[KEY.SPACE]: (p) => board.getNewPiece,
    [KEY.UP]: (p) => board.rotate(p, ROTATION.RIGHT),
    //[KEY.Q]: (p) => board.rotate(p, ROTATION.LEFT)
  };

// function play() {  
//   board.reset();  
//   console.table(board.grid);  
// }


function animate(now = 0) {

    //this.piece.draw();
    //requestAnimationFrame(this.animate.bind(this));

    time.elapsed = now - time.start;

    if (time.elapsed > time.level) {
      time.start = now;
      if (!board.drop()) {
        gameOver();
        return;
      }
    }
  
    // Clear board before drawing new state.
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
    board.draw();
    requestId = requestAnimationFrame(animate);
  }

function play() {
    // board.reset();
   //let piece = new Piece(ctx);
   //piece.draw();

    // console.table(board.grid);

   //board.piece = piece;

    // addEventListener();
    // if (document.querySelector('#play-btn').style.display == '') {
    //   resetGame();
    // }
  
    // // If we have an old game running then cancel it
    // if (requestId) {
    //   cancelAnimationFrame(requestId);
    // }
  
    // animate();
    // document.querySelector('#play-btn').style.display = 'none';
    // document.querySelector('#pause-btn').style.display = 'block';
    
    
    addEventListener();
    if (document.querySelector('#play-btn').style.display == '') {
      resetGame();
    }
  
    // If we have an old game running then cancel it
    // if (requestId) {
    //   cancelAnimationFrame(requestId);
    // }
  
    animate();
    document.querySelector('#play-btn').style.display = 'none';
    document.querySelector('#pause-btn').style.display = 'block';
}

 

  let board = new Board(ctx,ctxNext);
    initNext();

  document.addEventListener('keydown', event => {
    if (moves[event.keyCode]) {  
      // Stop the event from bubbling.
      event.preventDefault();
      
      // Get new state of piece
      let p = moves[event.keyCode](board.piece);
      
      if (board.valid(p)) {    
        // If the move is valid, move the piece.
        board.piece.move(p);
        
        // Clear old position before drawing.
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
        
        board.piece.draw();
      }
    }
  });



  

  function addEventListener(){
    document.removeEventListener('keydown',handleKeyPress);
    document.addEventListener('keydown',handleKeyPress);
  }

  function handleKeyPress(event) {
    if (event.keyCode === KEY.P) {
      pause();
    }
    if (event.keyCode === KEY.ESC) {
      gameOver();
    } else if (moves[event.keyCode]) {
      event.preventDefault();
      // Get new state
      let p = moves[event.keyCode](board.piece);
      if (event.keyCode === KEY.SPACE) {
        // Hard drop
        if (document.querySelector('#pause-btn').style.display === 'block') {
         //dropSound.play();
        }else{
          return;
        }
        
        while (board.valid(p)) {
          account.score += POINTS.HARD_DROP;
          board.piece.move(p);
          p = moves[KEY.DOWN](board.piece);
        }
        board.piece.hardDrop();
      } else if (board.valid(p)) {
        if (document.querySelector('#pause-btn').style.display === 'block') {
        movesSound.play();
        }
        board.piece.move(p);
        if (event.keyCode === KEY.DOWN && 
            document.querySelector('#pause-btn').style.display === 'block') {
          account.score += POINTS.SOFT_DROP;
        }
      }
    }
  }

  
// if pause is pressed
  function pause() {
    if (!requestId) {
      document.querySelector('#play-btn').style.display = 'none';
      document.querySelector('#pause-btn').style.display = 'block';
      animate();
      //backgroundSound.play();
      return;
    }
  
    cancelAnimationFrame(requestId);
    requestId = null;
  
    ctx.fillStyle = 'black';
    ctx.fillRect(1, 3, 8, 1.2);
    ctx.font = '1px Arial';
    ctx.fillStyle = 'yellow';
    ctx.fillText('PAUSED', 3, 4);
    document.querySelector('#play-btn').style.display = 'block';
    document.querySelector('#pause-btn').style.display = 'none';
    sound.pause();
  }
    
  //if gameover is pressed

  
function gameOver() {
    cancelAnimationFrame(requestId);
  
    ctx.fillStyle = 'black';
    ctx.fillRect(1, 3, 8, 1.2);
    ctx.font = '1px Arial';
    ctx.fillStyle = 'red';
    ctx.fillText('GAME OVER', 1.8, 4);
    
    //sound.pause();
   // finishSound.play();
    checkHighScore(account.score);
  
    document.querySelector('#pause-btn').style.display = 'none';
    document.querySelector('#play-btn').style.display = '';
  }


//   function addEventListener() {
//     document.removeEventListener('keydown', handleKeyPress);
//     document.addEventListener('keydown', handleKeyPress);
//   }





//account code

  let accountValues = {
    score: 0,
    level: 0,
    lines: 0
  };
  
  function updateAccount(key, value) {
    let element = document.getElementById(key);
    if (element) {
      element.textContent = value;
    }
  }
  
  let account = new Proxy(accountValues, {
    set: (target, key, value) => {
      target[key] = value;
      updateAccount(key, value);
      return true;
    }
  });
  
  let requestId = null;
  let time = null;


//resets game 

function resetGame() {
  account.score = 0;
  account.lines = 0;
  account.level = 0;
  board.reset();
  time = { start: performance.now(), elapsed: 0, level: LEVEL[account.level] };
}




  
