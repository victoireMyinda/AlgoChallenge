const sommeArr = [ 0, 1, 1, 1, 0]
const usersIsChecked = sommeArr.filter(e => e % 2 !=0).length != 0
console.log(usersIsChecked)