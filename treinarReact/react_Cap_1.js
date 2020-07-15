// let numbers = [1, 2, 3, 4, 5]
// const others = ['teste']
// numbers = [0, 1, ...others]

// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5,]
// const sum = (a, b, c, d, e) => a + b + c + d + e

// const sumOFNumbers = sum(...numbers)

// console.log(sumOFNumbers)

const person = {
    firstName: 'Tom',
    lastName: 'cruise',
    actor: true,
    age: 54
}

const { firstName: name, age } = person

console.log( name, age )

const a = [1, 2, 3, 4, 5]
const [ first, second, teste ] = a

console.log(a, first, second)

const a_string = `something`

console.log(a_string)