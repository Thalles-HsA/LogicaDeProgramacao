function descendingOrder(n){

    const arrNum = n.toString().split("")

    return +arrNum.sort((a, b ) => b - a ).join("")
}

console.log(descendingOrder(4214587))