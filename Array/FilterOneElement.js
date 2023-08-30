// if element % 2 == 0 modulo paire
const someArr = [1, 2, 3, 4, 5]
const eventArr = someArr.filter(e => e % 2 == 0).reduce((accum, sum) => accum + sum)
console.log(eventArr)


//if element % 2 !==0 modulo impaire
const oddArr = someArr.filter(e => e % 2 != 0)
console.log(oddArr)