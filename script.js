// GENERATE CHOICE OF COMPUTER 
function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
  }

// GET INPUT FOR HUMAN CHOICE
  function getHumanChoice(){
    let input = prompt("Rock, Paper or Scissors?");
    let choice = input.toLowerCase()
    return choice
  }


// RUN FIVE ROUNDS IN A GAME
// show final score, and result
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`FINAL humanScore: ${humanScore} FINAL computerScore: ${computerScore}`)
    if (humanScore > computerScore){
        console.log("YOU WON!");
    }
    else if(humanScore == computerScore){
        console.log("TIE!")
    }
    else{
        console.log("YOU LOSE!")
    }

    // PLAY 1 ROUND 
    // write all win, draw, lose conditions
    // log scores when coditions are met
    function playRound(humanChoice, computerChoice){
        if (humanChoice == "rock" && computerChoice == "scissors"
            ||humanChoice == "paper" && computerChoice == "rock"
            ||humanChoice == "scissors" && computerChoice == "paper"){
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
        else if (humanChoice == computerChoice){
            console.log(`TIE! Both chose ${computerChoice}`);
        }
        else{
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        }
    }
}
playGame()