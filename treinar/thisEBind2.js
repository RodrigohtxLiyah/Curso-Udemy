function numeros() {
    this.segundos = 0

    const self = this
    setInterval(function(){
        self.segundos++
        console.log(self.segundos)
    }, 1000)
}

new numeros