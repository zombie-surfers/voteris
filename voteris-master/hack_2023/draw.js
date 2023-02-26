

let canvas = document.getElementById("position_canvas");

let ctx = canvas.getContext("2d");
canvas.width = screen.width;
canvas.height = screen.height * 0.5;

let colWidth = canvas.width / 10;

let shape = [
  [2, 0, 0],
  [2, 2, 2],
  [0, 0, 0],
];

// //getting the shape
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "http/localhost:8000");
// xhr.send();
// xhr.responseType = "json";
// xhr.onload = () => {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     const data = xhr.response;
//     console.log(data);
//   } else {
//     console.log(`Error: ${xhr.status}`);
//   }
// };

let color = "red";

let rotation = 0;

function drawGrid() {
  for (i = 0; i <= canvas.width; i += colWidth) {
    drawLine(i, i, 0, canvas.height);
  }
}

function drawLine(startX, endX, startY, endY) {
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}

drawGrid();

let topX = canvas.width / 2 - colWidth * 2;
let topY = canvas.height / 2 - colWidth * 2;

draw();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  ctx.fillStyle = "#F194B4";
  for (x = 0; x < 3; x++) {
    for (y = 0; y < 3; y++) {
      if (shape[x][y] > 0) {
        console.log(shape[x][y]);
        squareCoordX = topX + x * colWidth;
        squareCoordY = topY + y * colWidth;
        ctx.fillRect(squareCoordY, squareCoordX, colWidth, colWidth);
      }
    }
  }
}

function rotate90Left() {
  temp = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      temp[3 - j - 1][i] = shape[i][j];
    }
  }

  rotation += 90;
  if (rotation > 260) {
    rotation = 0;
  }
  console.log(rotation);
  shape = temp;
  draw();
}

function rotate90Right() {
  temp = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      temp[i][j] = shape[3 - j - 1][i];
    }
  }
  shape = temp;

  if (rotation < 90) {
    rotation = 270;
  } else {
    rotation -= 90;
  }

  
  draw();
  console.log(rotation);
}

rotate90Right;
console.log(shape);

function getMaxWidth() {
  //getting max width so not allowing slider to move forwards
  let maxSliderWidth = 0;
  for (i = 0; i < shape.length; i++) {
    maxLength = 0;
    for (j = 0; j < shape.length; j++) {
      if (shape[i][j] == 2) {
        maxLength++;
      }

      if (maxLength > maxSliderWidth) {
        maxSliderWidth = maxLength;
      }
    }
  }
  return maxSliderWidth;
}

//getting slider
slider = document.getElementById("sampleSlider");
sliderValue = 0;
//console.log(getMaxWidth())
//setting the slider to the amount of values permitted
slider.setAttribute("max", 10 - getMaxWidth());
slider.addEventListener("input", (event) => {
  console.log(event.target.value);
  sliderNum = event.target.value;
  sliderValue = sliderNum;
  topY = sliderNum * colWidth;
  topX = canvas.height / 2 - colWidth * 2;
  draw();
});

function changeTime(value){
  time= document.getElementById("time")
  time.innerText=value;
}


//creating a json file with information
data = {
  "column": sliderValue,
  "matrix": shape
}

jsonData = JSON.stringify(data);
console.log(jsonData)

$.ajax({
  url: 'http://localhost:8000/',
  type: 'POST',
  data: JSON.stringify(data),
  contentType: 'application/json; charset=utf-8',
  dataType: 'json',
  async: false,
  success: function(msg) {
      alert(msg);
  }
});


// //setting canvases to right width and height
// smallCanvas1= document.getElementById("cv1");
// smallCanvas2= document.getElementById("cv2");
// smallCanvas3= document.getElementById("cv3");
// smallCanvas4= document.getElementById("cv4");

// smallCanvas1.style.width="96%";
// smallCanvas1.style.height="96%";

// smallCanvas2.style.width="96%";
// smallCanvas2.style.height="96%";

// smallCanvas3.style.width="96%";
// smallCanvas3.style.height="96%";

// smallCanvas4.style.width="96%";
// smallCanvas4.style.height="96%";

// //rotating the tetronome and drawing it in the 4 small canvases
// //gettting context from all the small canvases
// ctx1 = smallCanvas1.getContext("2d");
// ctx2 = smallCanvas2.getContext("2d");
// ctx3 = smallCanvas3.getContext("2d");
// ctx4 = smallCanvas4.getContext("2d");

// //seen ass all small canvases are the same size the
// //starting x and y point is the same for all
// startX= smallCanvas1.width / 2 - colWidth;
// startY= smallCanvas1.height / 2 - colWidth;

// //getting the martixes for all of them
// smallCanvas1Matrix = rotate90(shape);
// smallCanvas2Matrix = rotate90(smallCanvas1Matrix);
// smallCanvas3Matrix = rotate90(smallCanvas2Matrix)
// smallCanvas3Matrix = rotate90(smallCanvas3Matrix)

// draw2(smallCanvas1Matrix,startX,startY,ctx1)
// // smallCanvas1= document.getElementById("cv1");
// // ctx1= smallCanvas1.getContext("2d");
// // draw(first90,smallCanvas1)

// function draw2(matrix,topX,topY,ctx) {
//     for (x = 0; x < 3; x++) {
//       for (y = 0; y < 3; y++) {
//         if (matrix[x][y] > 0) {
//           console.log(shape[x][y]);
//           squareCoordX = topX + x * colWidth;
//           squareCoordY = topY + y * colWidth;
//           ctx.fillRect(squareCoordY, squareCoordX, colWidth, colWidth);
//         }
//       }
//     }
//   }
