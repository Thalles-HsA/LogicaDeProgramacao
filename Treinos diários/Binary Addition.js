function addBinary(a,b) {

    let soma = a + b
    let acc = []
    
    while (soma >= 2 ) { 
        acc.push(Math.trunc(soma) % 2)
        soma /=  2
    }

    acc.push(Math.trunc(soma))

    let binario = acc.reverse().join('')
  
    return binario
    
}


// metodo ultra mega fácil.

function addBinary2(a,b){
    return (a+b).toString(2)
}

console.log(addBinary(5, 9))
console.log(addBinary2(5, 9))

