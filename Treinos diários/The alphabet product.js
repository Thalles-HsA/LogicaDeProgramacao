function alphabet(ns) {

    const arrOrdenado = ns.sort((a, b) => a - b)

    const indexA = arrOrdenado.indexOf(arrOrdenado[0]*arrOrdenado[1])

    arrOrdenado.splice(indexA, 1)

    const indexB = arrOrdenado.indexOf(arrOrdenado[1]*arrOrdenado[2])

    arrOrdenado.splice(indexB, 1)
    

    return arrOrdenado[3]
}

console.log(alphabet(([1, 2, 3, 4, 4, 12])))