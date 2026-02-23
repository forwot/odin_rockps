// RESULTS UI
let resultsContainer = document.querySelector('.resultsContainer');
let result = document.createElement('p');
let runningScore = document.createElement('p');
let finalScore = document.createElement('p');

// SCORES
let humanScore = 0;
let computerScore = 0;


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


// PLAY 1 ROUND 
// write all win, draw, lose conditions
// log scores when coditions are met
function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "scissors"
        ||humanChoice == "paper" && computerChoice == "rock"
        ||humanChoice == "scissors" && computerChoice == "paper"){
            humanScore++;
            result.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
            resultsContainer.appendChild(result);
    }
    else if (humanChoice == computerChoice){
        result.textContent = `Tied! Both chose ${computerChoice}`;
        resultsContainer.appendChild(result);
    }
    else{
        computerScore++;
        result.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        resultsContainer.appendChild(result);
    }

    if (humanScore == 5 || computerScore == 5){
        finalScore.textContent = `FINAL ==> humanScore: ${humanScore} computerScore: ${computerScore}`;
        resultsContainer.appendChild(finalScore);            
        
        if (humanScore > computerScore){
            finalScore.textContent += "\nYOU WON";
        }
        else if(humanScore == computerScore){
            finalScore.textContent += "\nTIE";
        }
        else{
            finalScore.textContent += "\nYOU LOST";
        }
    }
    runningScore.textContent = `humanScore: ${humanScore}, computerScore: ${computerScore}`;
    resultsContainer.appendChild(runningScore);
    
}

// BUTTONS UI
let buttonsContainer = document.querySelector('.buttonsContainer');

buttonsContainer.addEventListener('click', (event) => {
    let target = event.target;
    let humanChoice = '';
    const computerChoice = getComputerChoice();

    switch (target.id){
        case 'rock':
            humanChoice = "rock";
            break;
            
        case 'paper':
            humanChoice = "paper";
            break;
            
        case 'scissors':
            humanChoice = "scissors";
            break;
    }
        if( !(humanChoice == '') ){
            playRound(humanChoice, computerChoice);
        }
})
