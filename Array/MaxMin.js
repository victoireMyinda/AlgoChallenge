const someArr = [1, 2, 3, 4, 5, 6, ]

const maxValueArr = someArr.reduce((max, e) => Math.max(max, e))
const minValueArr = someArr.reduce((max, e) => Math.min(max, e))
const somme =  someArr.reduce((sum, e) => sum + e)
console.log("max : " + maxValueArr, "min : " + minValueArr, "somme : " + somme)



const chaine = "myinda"

const codeAsci = chaine.charCodeAt()
console.log(codeAsci)