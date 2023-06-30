// initialize the counterss
let playerScore = {wins: 0, losses: 0};
let computerScore = {wins: 0, losses: 0};
let tieCounter = 0;

// event listener, starts countdown when clicked
document.querySelectorAll('.choice-button').forEach(button => {
    button.addEventListener('click', startCountdown);
});

function startCountdown(event) {
    // retrieves the players choice out of rps
    const playerChoice = event.currentTarget.dataset.choice;
    
    //counter
    let counter = 3;
    const countdownText = document.getElementById('countdown-text');
    countdownText.textContent = counter;
    countdownText.style.animation = 'bounce 0.5s linear infinite';  // timer animation stylee

    const countdown = setInterval(() => {
        counter--;
        countdownText.textContent = counter;

        if (counter === 0) {
            clearInterval(countdown);
            countdownText.style.animation = '';  //if counter is zero countdown timer animation will be stopped yoepie
            
            // make computer choice for the computerrrrrrrr
            const computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
            
            document.getElementById('choices-text').textContent = `Player picked ${playerChoice}, Computer picked ${computerChoice}`;
            
            determineWinner(playerChoice, computerChoice);
        }
    }, 500); 
}

function determineWinner(playerChoice, computerChoice) {
    //the money
    const gameResult = document.getElementById('game-result');
    
    if (playerChoice === computerChoice) {
        gameResult.textContent = 'It\'s a tie!';
        tieCounter++;
        document.getElementById('tie-counter').textContent = `Ties: ${tieCounter}`;
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        gameResult.textContent = 'You won!';
        playerScore.wins++;
        computerScore.losses++;
    } else {
        gameResult.textContent = 'You lost!';
        playerScore.losses++;
        computerScore.wins++;
    }
    
    // sscore updater
    document.getElementById('player-score').textContent = `Wins: ${playerScore.wins} Losses: ${playerScore.losses}`;
    document.getElementById('computer-score').textContent = `Wins: ${computerScore.wins} Losses: ${computerScore.losses}`;
    
    //addcrown
    addCrown();
}


// adds crown.png above the current winner
function addCrown() {
    const playerCrown = document.getElementById('player-crown');
    const computerCrown = document.getElementById('computer-crown');

    if (playerScore.wins > computerScore.wins) {
        playerCrown.src = 'crown.png';
        computerCrown.src = '';
    } else if (computerScore.wins > playerScore.wins) {
        computerCrown.src = 'crown.png';
        playerCrown.src = '';
    } else {
        playerCrown.src = '';
        computerCrown.src = '';
    }
}

