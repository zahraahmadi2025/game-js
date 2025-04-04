const start1 = document.getElementById("startGame");
let computerChoice = "ROCK";
const ROCK ="ROCK";
const PAPER ="PAPER";
const SCISSORS ="SCISSORS";

Function start(){
    let playerChoice = prompt(`${ROCK},${SCISSORS} OR ${PAPER}`);
    let randomNumber = Math.random();
    if(randomNumber<0.33){
        computerChoice = ROCK;
    }
    else if(randomNumber<0.66){
        
    }
}

















start1.addEventListener("click",start);