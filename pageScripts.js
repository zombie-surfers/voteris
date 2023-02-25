
const leftScore = document.getElementById("leftScore");
const rightScore = document.getElementById("rightScore");

const leftLines = document.getElementById("leftLines");
const rightLines = document.getElementById("rightLines");

const leftLevel = document.getElementById("leftLevel");
const rightLevel = document.getElementById("rightLevel");
//Placeholder values

inputlscore = 5;
inputrscore = 7;
inputllines = 3;
inputrlines = 1;
inputllevel = 8;
inputrlevel = 2;

function updateValues(lscore, rscore, llines, rlines, llevel, rlevel) {
    leftScore.innerHTML = lscore;
    rightScore.innerHTML = rscore;
    leftLines.innerHTML = llines;
    rightLines.innerHTML = rlines;
    leftLevel.innerHTML = llevel;
    rightLevel.innerHTML = rlevel;
}

updateValues(inputlscore, inputrscore, inputllines, inputrlines, inputllevel, inputrlevel)