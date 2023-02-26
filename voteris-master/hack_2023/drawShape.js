



let shape = [[2, 0, 0],
            [2, 2, 2],
            [0, 0, 0]];

let color = "red";

let topX = canvasWidth/2-colWidth;
let topY = canvasHeight/2-colWidth;
ctx.beginPath();
console.log("top x ",topX)
//draw();
ctx.fillRect(100,1,100,100);
ctx.stroke();
function draw() {
    alert("drawing")
    ctx.fillStyle = color;
    shape.forEach((row, y) => {
      row.forEach((value, x) => {
        console.log(colWidth);
        // this.x, this.y gives the left upper position of the shape
        // x, y gives the position of the block in the shape
        // this.x + x is then the position of the block on the board
        if (value > 0) {
          ctx.fillRect(topX +x*colWidth, topY+y*colWidth, colWidth, colWidth);
        }
      });
    });
}