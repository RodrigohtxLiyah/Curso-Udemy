class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    hello() {
        return `Hello, I am ${this.name}.`
    }

    history() {
        return ` Nascido em 1999 e atualmente com ${this.age} anos`
    }
}

const flavio = new Person('Flavio', 21)
flavio.hello()

const retornos = flavio.hello() + flavio.history()

console.log(retornos)

class Programmer extends Person {
    hello() {
        return super.hello() + ` I am a programmer.`
    }
}

const flavio2 = new Programmer('Flavio', 21)
flavio2.hello()

console.log(flavio2.hello())

// class Person {
//     constructor(name) {
//         this.name = name
//     }

//     set name(value) {
//         this.name = value
//     }

//     get name() {
//         return this.name
//     }
// }

// const rodrigo = new Person('Rodrigo')

// console.log(rodrigo)