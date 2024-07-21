const OPTIONS = ["rock", "paper", "scissors"];
const NUM_OF_OPTIONS = 3;
const WIN_DICTIONARY = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};

// Get's the computer's choice
function getComputerChoice(){
    return OPTIONS[Math.floor(Math.random()) * 3];
}

// Takes in the human player's choice
function getHumanChoice(){
    let human_choice = ((prompt("Your input: ")).toLowerCase()).trim();
    while (!OPTIONS.includes(human_choice)){
        console.log("Must play either rock, paper, or scissors!");
        human_choice = ((prompt("Your input: ")).toLowerCase()).trim();
    }
    return human_choice;
}

// plays one round of the game, returning 1 if player wins, 0 if tie, -1 if loss
function play_game(){
    let human_choice = getHumanChoice();
    let computer_choice = getComputerChoice();

    console.log("You played: " + human_choice);
    console.log("The computer played: " + computer_choice);

    if (WIN_DICTIONARY[human_choice] == computer_choice) {
        console.log("NICE DUDE YOU WON");
        return 1;
    } else if (human_choice == computer_choice) {
        console.log("TIE :///");
        return 0;
    } else {
        console.log("L a computer beat you");
        return -1;
    }
}

play_game();