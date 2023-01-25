function highAndLow(numbers){

    const arrNum = numbers.split(" ").map(Number)
    const arrOrdenado = arrNum.sort((a,b) => b-a)

    return `${arrOrdenado[0]} ${arrOrdenado[arrOrdenado.length -1]}`
}

console.log(highAndLow("1 9 3 4 -5 10"))