// const { Observable } = require('rxjs')

// let done = true
// const isItDoneYet = new Promise((resolve, reject) => {
//     if (done) {
//         const workDone = 'Aqui é o que eu construí'
//         resolve(workDone)
//     } else {
//         const why = 'Continua funcionando em outra coisa'
//         reject(why)
//     }
// })

// console.log(isItDoneYet)

// function observando() {
//     return new Observable(subscriber => {
//         if(done) {
//             const workDoneRxjs = 'Aqui é o que eu contrui em rxjs'
//             subscriber.next(workDoneRxjs)
//         } else {
//             const whyRx = 'Continua funcionando em outra coisa com rx'
//             subscriber.error(whyRx)
//         }
//         subscriber.complete()
//     })
// }

// observando()
//     .subscribe(console.log)


// const cheCKIfItsDone = () => {
//     isItDoneYet
//     .then(ok => ok + ` ${done}`)
//     .then(console.log)
//     .catch(err => {
//         console.error(err)
//     })
// }

// cheCKIfItsDone()

const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Eu fiz algo')
        }, 3000)
    })
}

const doSomeThing = async () => {
    console.log(await doSomethingAsync())
}

console.log('Antes')
doSomeThing()
console.log('Depois')

const lista = ['Maçã', 'Laranja', 'Ovo']
const res = lista.map(item => item[1]).filter(item => item === 'a')

console.log(res)