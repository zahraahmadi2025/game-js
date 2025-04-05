const start1 = document.getElementById("startGame");
let computerChoice = "ROCK";
const ROCK ="ROCK";
const PAPER ="PAPER";
const SCISSORS ="SCISSORS";
let Winner = "";

let determinWinner = function (cChoice , pChoice){
if (
    (pChoice===ROCK && cChoice===SCISSORS) ||
    (pChoice===PAPER && cChoice===ROCK)||
    (pChoice===SCISSORS && cChoice===PAPER)
){
    Winner ="PLAYER WINS";
    return Winner;
}
}
function start(){
    let playerChoice = prompt(`${ROCK} , ${SCISSORS} ,${PAPER}`);
    let randomNumber =Math.random();
}

start1.addEventListener("click",start);
