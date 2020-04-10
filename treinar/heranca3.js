const computador = {pvideo: 'gtx1660', gabinete: 'bizon'}

const upgrade1 = Object.create(computador)
upgrade1.pvideo = 'gtx1080'
console.log(upgrade1.gabinete)

const upgrade2 = Object.create(computador,{
    pvideo: {value: '2080TI', writable: false, enumerable: true}
})

console.log(upgrade2.pvideo)
upgrade2.pvideo = 'AMD'
console.log(`${upgrade2.pvideo} tem gabinete ${upgrade2.gabinete}`)

console.log(Object.keys(upgrade1))
console.log(Object.keys(upgrade2))

for(let key in upgrade2) {
    upgrade2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}