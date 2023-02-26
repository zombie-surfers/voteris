class Piece {  
    constructor(ctx) {
      this.ctx = ctx;
      this.spawn();
      
      
    //   this.x = 3;
    //   this.y = 0;
    }

    spawn() {
        this.typeId = this.randomizeTetrominoType(COLORS.length - 1);
        this.shape = SHAPES[this.typeId];
        this.color = COLORS[this.typeId];
        this.x = 0;
        this.y = 0;
       this.hardDropped = false;
      }


    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
          row.forEach((value, x) => {
            // this.x, this.y gives the left upper position of the shape
            // x, y gives the position of the block in the shape
            // this.x + x is then the position of the block on the board
            if (value > 0) {
              this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
            }
          });
        });
      }


      move(p) {
        if (!this.hardDropped) {
          this.x = p.x;
          this.y = p.y;
        }
        this.shape = p.shape;
      }

      hardDrop() {
        this.hardDropped = true;
      }
    
      setStartingPosition() {
        this.x = this.typeId === 4 ? 4 : 3;
      }

      randomizeTetrominoType(noOfTypes) {
        return Math.floor(Math.random() * noOfTypes + 1);
      }
  }

