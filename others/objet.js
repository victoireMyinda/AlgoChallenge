class User {
    constructor(n, a, m) {
        this.name = n
        this.adress = a
        this.mail = m
    }

    bonjour = function() {
        console.log(`bonjour, je suis ${this.name} , j'habites ${this.adress} et mon mail est ${this.mail}`)
    }
}

const Victoire = new User("victoire", "Kinshasa, Lemba", "myindavictoire@gmail.com")
console.log(Victoire.bonjour())

class Person extends User {
    constructor(name, adress, mail, age) {
        super(name, adress, mail)
        this.age = age
    }

    bonjour = function() {
        console.log(`bonjour, je suis ${this.name} , j'habites ${this.adress} et mon mail est ${this.mail} et j'ai ${this.age}`)
    }
}

const Myinda = new Person("victoire", "Kinshasa, Lemba", "myindavictoire@gmail.com", "25 ans")
console.log(Myinda.bonjour())