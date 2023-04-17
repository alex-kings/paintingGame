import { getRounds } from "./paintings.js";

// Constants
const gb1 = document.getElementById("guess1");
const gb2 = document.getElementById("guess2");
const gb3 = document.getElementById("guess3");
const gb4 = document.getElementById("guess4");
const buttons = [gb1,gb2,gb3,gb4];
const paintingContainer = document.getElementById("paintingContainer");
const endRoundPanel = document.getElementById("endRoundPanel");
const endGamePanel = document.getElementById("endGamePanel");
const endRoundPanelText = document.getElementById("endRoundPanelText");
const finalScore = document.getElementById("finalScore");
const nextRoundButton = document.getElementById("nextRoundButton");
const endGameButton = document.getElementById("endGameButton");
const goHomeButton = document.getElementById("goHomeButton");
const score = document.getElementById("score");

console.log(window.location.search)

class Game {
    // Attributes
    rounds;
    category;
    numberRounds;
    currentRound = 0;
    score = 0;

    constructor(numberRounds, category) {
        this.category = category;
        this.numberRounds = numberRounds;
        this.rounds = getRounds(category,numberRounds);
        this.setupButtonNames();
        this.displayPainting();

        this.setupEventListeners();
    }

    // Setup the event listeners on buttons
    setupEventListeners() {
        // Guess buttons
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click",()=>{
                this.attemptGuess(i);
            })
        }
        // Go to next round
        nextRoundButton.addEventListener("click",()=>{
            // Hide the end round panel.
            endRoundPanel.style.display = "none";
            // Start the next round.
            this.displayPainting();
            this.setupButtonNames();
        })
        // End the game
        endGameButton.addEventListener("click",()=>{
            this.displayEndGamePanel();
        })
        // Go home
        goHomeButton.addEventListener("click",()=>{
            console.log("Go home now.");
        })
    }

    // Display the painting for the current round
    displayPainting() {
        paintingContainer.innerHTML = `<img class="painting" src="${this.rounds[this.currentRound].painting[1]}"/>`
    }

    // Setup the buttons for the current round
    setupButtonNames() {
        for(let i = 0; i < buttons.length; i++) {
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

        // Increment the round
        this.currentRound++;
        // Display end round panel
        this.displayEndRoundPanel(success);
    }

    // Display the panel at the end of a round
    displayEndRoundPanel(success) {
        endRoundPanel.style.display = "block";
        endRoundPanelText.innerText = success ? `
        Success
        `:
        `
        Fail
        `;
        // Decide which button to show
        if(this.currentRound == this.numberRounds) {
            // Hide the next round button
            nextRoundButton.style.display = "none";
            endGameButton.style.display = "block";
        }
    }

    // Display the panel at the end of the game
    displayEndGamePanel() {
        endGamePanel.style.display = "block";
        finalScore.innerText = `${this.score}/${this.numberRounds}`;
    }

    incrementScore() {
        this.score++;
        score.innerText = this.score;
    }
}

// Start a game.
new Game(4, "impressionism");
