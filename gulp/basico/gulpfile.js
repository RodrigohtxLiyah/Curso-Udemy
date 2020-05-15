const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes1:')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes2:')
    return cb()
}

function copiar(cb) {
    console.log('Tarefeda de copiar!')
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!:')
    return cb()
}
module.exports.default = series(
    antes1,
    antes2,
    copiar,
    fim,
)