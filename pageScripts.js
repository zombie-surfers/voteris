
const leftScore = document.getElementById("leftScore");
const rightScore = document.getElementById("rightScore");

const leftLines = document.getElementById("leftLines");
const rightLines = document.getElementById("rightLines");

const leftLevel = document.getElementById("leftLevel");
const rightLevel = document.getElementById("rightLevel");

const zombiesCount = document.getElementById("zombies");
const surfersCount = document.getElementById("surfers");

//Placeholder values

inputlscore = 5;
inputrscore = 7;
inputllines = 3;
inputrlines = 1;
inputllevel = 8;
inputrlevel = 2;
inputzombies = 5;
inputsurfers = 7;

function updateAllValues(lscore, rscore, llines, rlines, llevel, rlevel, zombies, surfers) {
    updateLeftScore(lscore);
    updateRightScore(rscore);
    updateleftLines(llines);
    updateRightLines(rlines);
    updateleftLevel(llevel);
    updateRightLevel(rlevel);
    updateZombies(zombies);
    updateSurfers(surfers);
    console.log("bruh")
}

function updateLeftScore(score) {
    leftScore.innerHTML = score;
}
function updateRightScore(score) {
    rightScore.innerHTML = score;
}
function updateleftLines(lines) {
    leftLines.innerHTML = lines;
}
function updateRightLines(lines) {
    rightLines.innerHTML = lines;
}
function updateleftLevel(level) {
    leftLevel.innerHTML = level;
}
function updateRightLevel(level) {
    rightLevel.innerHTML = level;
}
function updateZombies(zombies) {
    zombiesCount.innerHTML = zombies;
}
function updateSurfers(surfers) {
    surfersCount.innerHTML = surfers;
}



updateValues(inputlscore, inputrscore, inputllines, inputrlines, inputllevel, inputrlevel, inputzombies, inputsurfers)