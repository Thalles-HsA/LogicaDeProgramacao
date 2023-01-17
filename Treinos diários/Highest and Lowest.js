function highAndLow(numbers){

    const arrNum = numbers.split(" ").map(Number)
    const arrOrdenado = arrNum.sort((a, b) => a-b)

    return arrOrdenado[arrOrdenado.length -1].toString() + " " + arrOrdenado[0].toString()
}

console.log(highAndLow("1 9 3 4 -5 10"))