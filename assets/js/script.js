// var number = 12;
// var chars = "string";
// var bool = true;

// if(number === 12) {
//     console.log("number is one")
// }

// number = 9;
// console.log(number)

// Logic for ROCK PAPER SCISSORS ---------------------

//global variables
var buttonEl = document.getElementById("startBtn")
var possibility = ["R", "P", "S"]
var gameRound = 5
var win, loss, tie ;

//functional definitions
function startGame() {
    win = 0;
    loss = 0;
    tie = 0;

    console.log("button pressed")
    alert("Welcome to RPS Simulator")
    // var question = prompt("How are you?")
    // var confirmation = confirm("Are you ready to start?")
    // console.log(confirmation)

    for (i = 0; i < possibility.length; i++) {
        // alert("You can pick " + possibility[i])
        alert(`You can pick "${possibility[i]}"`)
    }


    for (j = 0; j < gameRound; j++) {
        // for(j=0; j<gameRound; j++){
        //     alert("Round " + gameRound+1)
        runInstance()
    }
    displayScore()
    alert("Game Over! Press \"Start!\" to play again.")
}

function runInstance() {
    var choice = prompt("Pick Rock, Paper, or Scissors: (R, P, S)").toUpperCase()
    console.log(choice)
    var computerChoiceIndex = Math.floor(Math.random() * possibility.length)
    var computerChoiceLetter = possibility[computerChoiceIndex]

    if ((computerChoiceLetter === "R" && choice === "S") ||
        (computerChoiceLetter === "S" && choice === "P") ||
        (computerChoiceLetter === "P" && choice === "R")) {
        alert("Computer wins! Try again")
        loss++;

    } else if ((computerChoiceLetter === "R" && choice === "R") ||
        (computerChoiceLetter === "S" && choice === "S") ||
        (computerChoiceLetter === "P" && choice === "P")) {
        alert("Tie!")
        tie++;

    } else if ((computerChoiceLetter === "R" && choice === "P") ||
        (computerChoiceLetter === "S" && choice === "R") ||
        (computerChoiceLetter === "P" && choice === "S")) {

        alert("Win!!")
        win++;

    } else {
        alert("Wtf?")
    }
}

function displayScore() {
    var winEl = document.getElementById("winningCount")
    var lossEl = document.getElementById("lossCount")
    var tieEl = document.getElementById("tieCount")

    winEl.textContent = win
    lossEl.textContent = loss
    tieEl.textContent = tie
}
// while (j<10);
//     alert("Game Over! Reload page to play again.")
// }

//event listeners and invocations
buttonEl.addEventListener("click", startGame)