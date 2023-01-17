function descendingOrder(n){

    const arr = n.toString().split("")

    return parseInt(arr.sort((a, b) => b-a).join(""))
}

console.log(descendingOrder(4214587))