const funcs = [] // não faz diferença colocar const ou var nessa situação

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()