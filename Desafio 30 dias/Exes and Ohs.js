function XO(str) {

    const arr = str.split("")

    const arrX = arr.filter(i => i == "x" || i == "X").length

    const arrO = arr.filter(i => i == "o" || i == "O").length

    return arrX == arrO

}


console.log(XO("xXXoOo"))