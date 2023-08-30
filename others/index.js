const s = ""
let tab = s.split('')
var pluscount = 0
var minuscount = 0
for (let i = 0; i < tab.length; i++) {
    if (tab[i] == '+') {
        pluscount++
    } else {
        minuscount++
    }
}

var res = pluscount - minuscount
console.log(res)