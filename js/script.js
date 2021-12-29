function computerPlay () {
    const choices = ["sword", "spear", "horse"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playGame () {
    let playerChoice = this.dataset.icon;
    let computerChoice = computerPlay();
    
    determineResult(playerChoice, computerChoice);
}

function determineResult (playerChoice, computerChoice) {
    const resultParagraph = document.querySelector(".result");

    if (playerChoice === computerChoice) {
        resultParagraph.textContent = "It's a tie, no one wins!";
    } else if (playerChoice === "sword" && computerChoice !== "horse") {
        resultParagraph.textContent = `You win this round! ${playerChoice} beats ${computerChoice}.`;
        playerScore += 1;
    } else if (playerChoice === "spear" && computerChoice !== "sword") {
        resultParagraph.textContent = `You win this round! ${playerChoice} beats ${computerChoice}.`;
        playerScore += 1;
    } else if (playerChoice === "horse" && computerChoice !== "spear") {
        resultParagraph.textContent = `You win this round! ${playerChoice} beats ${computerChoice}.`;
        playerScore += 1;
    } else {
        resultParagraph.textContent = `You lose this round! ${computerChoice} beats ${playerChoice}.`;
        computerScore += 1;
    }

    updateScore();
    checkScore();
}

function updateScore () {
    const playerScoreHeader = document.querySelector(".playerScore");
    const computerScoreHeader = document.querySelector(".computerScore");

    computerScoreHeader.textContent = `Computer: ${computerScore}`;
    playerScoreHeader.textContent = `Player: ${playerScore}`;
}

function checkScore () {
    scoreResultParagraph = document.querySelector(".scoreResult");

    if (playerScore === 10) {
        scoreResultParagraph.textContent = "You win!"
    } else if (computerScore === 10) {
        scoreResultParagraph.textContent = "You lose! Try again by clicking the RESET button."
    } else {
        return;
    }

    end();
}

function end () {
    buttons.forEach((button) => {
        button.removeEventListener("click", playGame);
    });

    const resetButton = document.createElement("button");
    resetButton.classList.add("reset");
    resetButton.textContent = "RESET";
    resetButton.addEventListener("click", () => {
        location.reload();
    })
    const scoreDiv = document.querySelector(".score");

    scoreDiv.appendChild(resetButton);
}

const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', playGame
    )});

