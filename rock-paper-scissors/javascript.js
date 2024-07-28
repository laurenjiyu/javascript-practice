const OPTION_BUTTONS = document.querySelectorAll(".button");
const OPTIONS = ["rock", "paper", "scissors"];
const WIN_DICT = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};
const BEST_OF_NUM = 3;

let humanScore = 0;
let robotScore = 0;

// Updates the screen visually with human/robot options and animations
function changeScreen(humanChoice, robotChoice) {
    const humanImg = document.getElementById("human-img");
    const robotImg = document.getElementById("robot-img");
    const humanSide = document.querySelector(".human-side");
    const robotSide = document.querySelector(".robot-side");

    // Reset background color before new round starts
    humanSide.classList.remove("winner", "loser");
    robotSide.classList.remove("winner", "loser");

    // Disable buttons so options can't be spammed
    OPTION_BUTTONS.forEach(button => button.setAttribute('disabled', true));

    // Set images to "rock" before animation
    humanImg.src = `img/human-rock.png`;
    robotImg.src = `img/robot-rock.png`;

    humanImg.classList.add("human-bobbing");
    robotImg.classList.add("robot-bobbing");

    // Change images to the chosen state after the animation completes (1.5 seconds)
    setTimeout(() => {
        humanImg.classList.remove("human-bobbing");
        robotImg.classList.remove("robot-bobbing");

        humanImg.src = `img/human-${humanChoice}.png`;
        robotImg.src = `img/robot-${robotChoice}.png`;

        // Update the score after the images have changed
        updateScore(humanChoice, robotChoice);

        // Re-enable buttons for the next game
        OPTION_BUTTONS.forEach(button => {
            button.removeAttribute('disabled');
        });
    }, 1500); 
}

// Sees who won and sends the user to the appropriate ending screen
function finishGame() {
    let endBg, endMsg;

    if (humanScore === BEST_OF_NUM) {  // humans win
        endBg = "winning-bg";
        endMsg = "Yay! You saved the world!"

    } else if (robotScore === BEST_OF_NUM) {  // humans lose
        endBg = "losing-bg";
        endMsg = "Humanity has lost!"
    }
    setTimeout(() => {
        document.body.classList.add(endBg);
        document.body.innerHTML = `
            <div class="end-message">${endMsg}</div>
            <button class="restart-button" onclick="restartGame()">Play Again</button>
        `;
    }, 1000); 
}

// Updates the score for each round and checks if the game has concluded
function updateScore(humanChoice, computerChoice) {
    const humanSide = document.querySelector(".human-side");
    const robotSide = document.querySelector(".robot-side");

    if (WIN_DICT[humanChoice] === computerChoice) {     // human wins
        humanScore += 1;
        document.getElementById("human-score").innerHTML = humanScore;
        document.getElementById("score-description").innerHTML = "WIN!";
        humanSide.classList.add("winner");
        robotSide.classList.add("loser");
    } else if (humanChoice != computerChoice) {         // human loses
        robotScore += 1;
        document.getElementById("robot-score").innerHTML = robotScore;
        document.getElementById("score-description").innerHTML = "LOSS!";
        robotSide.classList.add("winner");
        humanSide.classList.add("loser");
    } else {                                            // tie
        document.getElementById("score-description").innerHTML = "TIE!";
    }

    // Checks if the game has concluded
    if (humanScore === BEST_OF_NUM || robotScore === BEST_OF_NUM) {
        // Make each button transparent
        OPTION_BUTTONS.forEach(button => {
            button.style.opacity = "0"; 
        });
        finishGame();
    }
}

// Plays a single round of the game
function playRound(e) {
    let humanChoice = e.target.id;  // string of the human's choice
    let computerIndex = Math.floor(Math.random() * OPTIONS.length);
    let computerChoice = OPTIONS[computerIndex];  // generates the computer's choice

    changeScreen(humanChoice, computerChoice);
}

// Restart the game, done whenever restart button is clicked
function restartGame() {
    location.reload();
}

// Add click event listeners to each button
OPTION_BUTTONS.forEach(button => button.addEventListener("click", playRound));