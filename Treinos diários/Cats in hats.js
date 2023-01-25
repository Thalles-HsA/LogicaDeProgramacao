function height(n) {
    let soma = 2000000
    
    for(let i = 0; i < n; i++){

        soma += soma - (soma * 2.5)
    }

    return soma.toFixed(3)
}

console.log(height(7))