const tableau = new Array(100).fill().map((x, index) => index + 1)
const numberToGuess = Math.floor(Math.random() * 100)
let numberOfTries = 0

function binarySearch(tableau, numberToGuess) {
    let min = 0;
    let max = tableau.length - 1;

    while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        const guess = tableau[mid];
        numberOfTries++;

        if (guess === numberToGuess) {
            return mid;
        } else if (guess > numberToGuess) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return null;
}


const result = binarySearch(tableau, numberToGuess)
console.log("result : ", result)
console.log("numberToGuess : ", numberToGuess)
console.log("numberOfTries : ", numberOfTries)