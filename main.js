import { setScore, displayScores } from "./score.js";
import { Game } from "./Game.js";
import "./style.css"
import "./navbar.css"

// On load
displayScores();
const game = new Game(3, "impressionism");

