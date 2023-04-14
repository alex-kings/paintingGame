import { getRounds } from "./paintings.js";

// Constants
const gb1 = document.getElementById("guess1");
const gb2 = document.getElementById("guess2");
const gb3 = document.getElementById("guess3");
const gb4 = document.getElementById("guess4");
const buttons = [gb1,gb2,gb3,gb4];
const paintingContainer = document.getElementById("paintingContainer");

export class Game {
    // Attributes
    rounds;
    category;
    numberRounds;
    currentRound = 0;
    score = 0;

    constructor(numberRounds, category) {
        this.category = category;
        this.rounds = getRounds(category,numberRounds);
        this.setupButtons(0);
        // this.displayPainting();

        document.getElementById("test").addEventListener("click",()=>{
            this.displayEndRoundPanel();
        })
    }

    // Display the painting for the current round
    displayPainting() {
        console.log(this.rounds[this.currentRound].painting[1])
        paintingContainer.innerHTML = `<img class="painting" src="${this.rounds[this.currentRound].painting[1]}"/>`
    }

    // Setup the buttons for the current round
    setupButtons() {
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click",()=>{
                this.attemptGuess(i);
            })
            buttons[i].innerText = this.rounds[this.currentRound].painters[i];
        }
    }

    // Check whether the guess was correct
    attemptGuess(btnNumber) {
        if(this.rounds[this.currentRound].painting[0] == this.rounds[this.currentRound].painters[btnNumber]) {
            // Correct guess
            this.incrementScore();
        }
        else {
            // Wrong guess
            console.log("Wrong guess")
        }
        this.incrementRound();
    }

    incrementRound() {
        this.currentRound++;
        this.displayEndRoundPanel();
    }

    // Display the panel at the end of a round
    displayEndRoundPanel() {
        // Add an element on top of the painting
        let div = document.createElement("div");
        div.classList.add("mask")
        div.innerHTML = `
        Hello
        `
        paintingContainer.appendChild(div);
    }

    incrementScore() {
        this.score++;
        document.getElementById("score").innerText = this.score;
    }
}
