function firstToLast(str,c){

    const primeiroIndex = str.indexOf(c)
    const ultimoIndex = str.lastIndexOf(c)

    const resultado = ultimoIndex - primeiroIndex

    return str.search(c) === -1 ? str.search(c) : resultado
}

console.log(firstToLast("ababc","c"))