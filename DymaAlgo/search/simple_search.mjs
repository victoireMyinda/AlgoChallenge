const tableau = new Array(100).fill().map((x, index) => index + 1)
const numberToGuess = Math.floor(Math.random() * 100)
let numberOfTries = 0

function simpleSearch(tableau, numberToGuess) {
    for(let i = 0 ; i <= tableau.length; i++) {
        numberOfTries ++ ;
        if(tableau[i] === numberToGuess) {
            return i ;
        }
    }
}


const result = simpleSearch(tableau, numberToGuess)
console.log("result : ", result)
console.log("numberToGuess : ", numberToGuess)
console.log("numberOfTries : ", numberOfTries)