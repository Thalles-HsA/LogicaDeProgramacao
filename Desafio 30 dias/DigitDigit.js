function squareDigits(num){

    const arrNum = num.toString().split("")

    const numQuadrado = arrNum.map(i => i ** 2).join("")

    return  parseInt(numQuadrado)

}

console.log(squareDigits(9119))