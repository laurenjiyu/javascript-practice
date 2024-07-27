const OPTIONS = ["rock", "paper", "scissors"];
const WIN_DICTIONARY = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
};
let human_score = 0;
let robot_score = 0;

// Plays one round of the game, returning 1 if player wins, 0 if tie, -1 if loss
function play_game(e) {
    let human_choice = e.target.id;  // string of the human's choice
    let computer_index = Math.floor(Math.random() * OPTIONS.length);
    let computer_choice = OPTIONS[computer_index];  // generates the computer's choice

    console.log("DUDE");

    document.getElementById("robot-choice").innerHTML = computer_choice.toUpperCase();

    console.log("You played: " + human_choice);
    console.log("The computer played: " + computer_choice);

    if (WIN_DICTIONARY[human_choice] === computer_choice) {
        human_score += 1;
        document.getElementById("human-score").innerHTML = human_score;
        console.log("NICE DUDE YOU WON");
        return 1;
    } else if (human_choice === computer_choice) {
        console.log("TIE :///");
        return 0;
    } else {
        robot_score += 1;
        document.getElementById("robot-score").innerHTML = robot_score;
        console.log("L a computer beat you");
        return -1;
    }
}

// Select all buttons with the class 'button'
const option_buttons = document.querySelectorAll(".button");

// Add click event listeners to each button
option_buttons.forEach(button => button.addEventListener("click", play_game));
