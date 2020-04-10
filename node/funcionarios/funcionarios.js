const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)
    const paisFuncionario = funcionarios => funcionarios.pais == 'China'
    const sexoFuncionario = sexo => sexo.genero == 'F'
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    console.log(funcionarios.filter(paisFuncionario).filter(sexoFuncionario).reduce(menorSalario))
})