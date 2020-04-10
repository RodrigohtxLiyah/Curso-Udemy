// par nome/valor
const saudacao = 'Opa' // contesto léxico 1

function exec() {
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao
}
                                        //Chave
// Objetos são grupos aninhados de pares nome/valor
const client = {
    nome: 'pedro',
    idade: 32,
    peso:90,
    endereco: {
    logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

    console.log(saudacao)
    console.log(exec())
    console.log(client)