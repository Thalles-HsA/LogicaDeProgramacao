function alphabet(ns) {

    const arrOrdenado = ns.sort((a,b)=> a-b)

    const index1 = arrOrdenado.indexOf(arrOrdenado[0]*arrOrdenado[1])

    arrOrdenado.splice(index1, 1)

    const index2 = arrOrdenado.indexOf(arrOrdenado[1]*arrOrdenado[2])

    arrOrdenado.splice(index2, 1)

    return arrOrdenado[3]
}

console.log(alphabet(([2,6,18,3,6,7,42,14])))