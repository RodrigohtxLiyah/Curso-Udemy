var a = 1
const c = 10
{
    let a = 2
    const c = 10
    console.log(`dentro ${a}, ${a} e ${c}`)
    var h = 15
    console.log(`${h}`)
}
console.log(`fora ${a} e ${c}`)
a = 'tamo ae'
console.log(`${a}`)
var h = 15
console.log(`${h}`)
