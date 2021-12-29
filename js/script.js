// function which detemrines the computer's choice from among the three options.

function computerPlay () {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];;
    return computerChoice;
}

// function which asks the player to choose an option, runs the computerPlay
// function and compares the choices to determine the winner. It returns an ""
// string if there was a tie and the name of the winner in a string otherwise.

function playRound() {

    let playerChoice = "";

    let correctInput = false;
    while (correctInput == false) {

        playerChoice = prompt(
                "Choose rock, paper or scissors by entering the name below: ");

        playerChoice === null ? alert("Please enter one of the options.") : 
                correctInput = checkPlayerChoice(playerChoice);
    }

    let computerChoice = computerPlay();
    let result = "";

    if (playerChoice === computerChoice) {
        console.log("It's a tie, no one wins!");
    } else if (playerChoice === "rock" && computerChoice !== "paper") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
        result = "player";
    } else if (playerChoice === "paper" && computerChoice !== "scissors") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
        result = "player";
    } else if (playerChoice === "scissors" && computerChoice !== "rock") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
        result = "player";
    } else {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
        result = "computer";
    }
    
    return result;
}

// creating a function checking whether or not the player entered a
// correctly-written choice. The function retruns either true or false to change
// the boolean variable in playRound to exit the while loop.

function checkPlayerChoice(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === 
            "scissors") {;
        return true;
    } else {
        alert("Please type an option correctly.");
        return false;
    }
}

// creating the final game function which runs the playRound function a number
// of times until the players played 5 rounds which not ended in a tie. It also
// displays the final message in the console.

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5;) {
        winner = playRound();
        i++;
        winner === "player" ? playerScore++ :
        winner === "" ? i-- : computerScore++;;
    }

    if (playerScore > computerScore) {
        console.log(`The game's over. You win! The final score is ${playerScore}
                 for you and ${computerScore} for the computer.`);
    } else {
        console.log(`The game's over. You lose! The final score is 
                ${playerScore} for you and ${computerScore} for the computer.`);
    }

}

// game();
