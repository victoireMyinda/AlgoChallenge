
function maxWord(arr) {
    const maxArr = arr.split(" ").map((e => e.length)).reduce((accu, max) => Math.max(accu, max))
    return maxArr

}
// console.log(maxWord("Je suis vraiment malade"))


function sortWord(arr) {
    const word = arr.split(" ").map((e => e.length)).sort((a, b) => a - b)
    return word
}

// console.log(sortWord("je suis malade"))


