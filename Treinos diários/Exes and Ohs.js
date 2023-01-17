function XO(str) {

    const arr = str.split('')

    let arrX = arr.filter(i => i ==="x" || i == "X").length
    let arrY = arr.filter(i => i ==="o" || i == "O").length

    return arrX === arrY

}


console.log(XO("xxoOo"))