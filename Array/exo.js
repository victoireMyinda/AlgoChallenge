const userList = [
    { name: "jhon", "gender" : "M", "salary" : 3500},
    { name: "jade", "gender" : "F", "salary" : 400},
    { name: "joe", "gender" : "M", "salary" : 3200},
    { name: "jacky", "gender" : "F", "salary" : 3800}
]

// Combien les hommes gagnerait au total s'ils etaient augmentés de 1000$ ?

const numberOfMany = userList.filter(user => user.gender == "M")
.map(user => user.salary += 1000)
.reduce((numberOfMany, value) => numberOfMany + value)

console.log(numberOfMany)