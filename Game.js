import { getRounds } from "./paintings.js";

// Constants
const gb1 = document.getElementById("guess1");
const gb2 = document.getElementById("guess2");
const gb3 = document.getElementById("guess3");
const gb4 = document.getElementById("guess4");
const buttons = [gb1,gb2,gb3,gb4];
const paintingContainer = document.getElementById("paintingContainer");
const endRoundPanel = document.getElementById("endRoundPanel");
const nextRoundButton = document.getElementById("nextRoundButton")

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
        this.setupButtons();
        this.displayPainting();

        nextRoundButton.addEventListener("click",()=>{
            // Hide the end round panel.
            endRoundPanel.style.display = "none";
            // Start the next round.
            this.displayPainting();
            this.setupButtons();
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
        let success = false;
        if(this.rounds[this.currentRound].painting[0] == this.rounds[this.currentRound].painters[btnNumber]) {
            // Correct guess
            this.incrementScore();
            success = true;
        }
        this.incrementRound(success);
    }

    incrementRound(success) {
        this.currentRound++;
        this.displayEndRoundPanel(success);
    }

    // Display the panel at the end of a round
    displayEndRoundPanel(success) {
        endRoundPanel.style.display = "block";
        document.getElementById("endPanel").innerText = success ? `
        Success
        `:
        `
        Fail
        `;
    }

    incrementScore() {
        this.score++;
        document.getElementById("score").innerText = this.score;
    }
}
