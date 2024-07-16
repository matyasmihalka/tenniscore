const evaluateTennisScore = (input) => {
    // Split the input by comma to handle multiple sets
    let sets = input.split(',').map(set => set.trim());
    let results = { valid: true, isWin: true };
    let player1WonAnySet = false;

    sets.forEach(set => {
        // Split each set by colon
        let scores = set.split(':');
        
        // If the split result does not produce exactly two items, it is invalid
        if (scores.length !== 2) {
            results = { valid: false, isWin: false };
            return;
        }

        // Parse the scores to integers
        let player1 = parseInt(scores[0], 10);
        let player2 = parseInt(scores[1], 10);

        // Check if both scores are numbers
        if (isNaN(player1) || isNaN(player2)) {
            results = { valid: false, isWin: false };
            return;
        }

        // A valid tennis set score ranges from 0 to 7 (tiebreaks can go higher, but we'll keep it simple)
        if (player1 < 0 || player1 > 7 || player2 < 0 || player2 > 7) {
            results = { valid: false, isWin: false };
            return;
        }

        // A player wins a set if they have at least 6 games and at least 2 more games than the opponent
        let player1WinsSet = (player1 >= 6 && player1 - player2 >= 2);
        let player2WinsSet = (player2 >= 6 && player2 - player1 >= 2);

        // Both players can't win the same set
        if (player1WinsSet && player2WinsSet) {
            results = { valid: false, isWin: false };
            return;
        }

        // If neither player wins the set, it's invalid
        if (!player1WinsSet && !player2WinsSet) {
            results = { valid: false, isWin: false };
            return;
        }

        // If player 1 wins any set, set player1WonAnySet to true
        if (player1WinsSet) {
            player1WonAnySet = true;
        }

        // If player 2 wins any set, and player1 has not won any set yet, set isWin to false
        if (player2WinsSet && !player1WonAnySet) {
            results.isWin = false;
        }
    });

    // Set isWin to false if player1 didn't win any set
    if (!player1WonAnySet) {
        results.isWin = false;
    }

    return results;
}

// Examples
// console.log(evaluateTennisScore("6:4"));           // { valid: true, isWin: true }
// console.log(evaluateTennisScore("3:6, 2:6"));      // { valid: true, isWin: false }
// console.log(evaluateTennisScore("7:5, 6:3, 4:6")); // { valid: true, isWin: true }
// console.log(evaluateTennisScore("7:5, 6:8, 4:6")); // { valid: true, isWin: false }
// console.log(evaluateTennisScore("invalid input")); // { valid: false, isWin: false }


export { evaluateTennisScore };
export default evaluateTennisScore;
