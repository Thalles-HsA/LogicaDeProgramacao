function squareDigits(num){

    const arrNum = num.toString().split("")

    let arrQuadrado = arrNum.map(i => i ** 2).join("")

    return parseInt(arrQuadrado)
}

console.log(squareDigits(9119))