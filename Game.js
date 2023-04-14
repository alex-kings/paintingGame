import { getRounds } from "./paintings.js";

// Constants
const gb1 = document.getElementById("guess1");
const gb2 = document.getElementById("guess2");
const gb3 = document.getElementById("guess3");
const gb4 = document.getElementById("guess4");
const buttons = [gb1,gb2,gb3,gb4]

export class Game {
    // Attributes
    rounds;
    category;
    score = 0;

    constructor(numberRounds, category) {
        this.category = category;
        this.rounds = getRounds("impressionism",3);
        this.setupButtons(0);
    }

    // Setup the buttons for the given round
    setupButtons(n) {
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click",()=>{
                this.attemptGuess(n, i);
            })
            buttons[i].innerText = this.rounds[n].painters[i];
        }
    }

    // Check whether the guess was correct
    attemptGuess(roundNumber, btnNumber) {
        if(this.rounds[roundNumber].painting[0] == this.rounds[roundNumber].painters[btnNumber]) {
            // Correct guess
            this.incrementScore();
        }
        else {
            // Wrong guess
            console.log("Wrong guess")
        }
    }

    incrementScore() {
        this.score++;
        document.getElementById("score").innerText = this.score;
    }
}
