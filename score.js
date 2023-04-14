/**
 * Set and get best scores.
 */

// all the categories
const categories = ["impressionism"]

// Set a best score for the given category.
export function setScore(category, score) {
    // Scores stored in localstorage, with names "score_category"
    let current = parseInt(localStorage.getItem(`score_${category}`));
    if(score > current) localStorage.setItem(`score_${category}`,Integer.toString(current));
}

// Get the best scores.
export function displayScores() {
    for(let category of categories) {
        let score = localStorage.getItem(`score_${category}`);
        if(score == null) score = "0";
        // Display the score
        document.getElementById(`score_${category}`).innerText = score;
    }
}