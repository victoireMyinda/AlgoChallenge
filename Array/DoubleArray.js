// first possibility
const someArr = [1, 2, 3, 4]
const doubleArr = someArr.map(e => e * 2)
console.log(doubleArr)

//second possibility
const numbers = [1, 2, 3, 4]
const numberX2 = []
for(let i=0; i <  numbers.length; i++) {
    numberX2.push(numbers[i] * 2)
}
console.log(numberX2)