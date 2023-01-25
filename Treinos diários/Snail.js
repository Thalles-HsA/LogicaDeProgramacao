snail = function(array) {
 
    let arrSnail = []
    
    arrSnail.push(...array[0])

    // if(array.length == 3) {
    //     arrSnail.push(array[1][array[1].length - 1])
    //     arrSnail.push(...array[2].reverse())
    //     arrSnail.push(...array[1].splice(0, array[1].length - 1))
    // }

    // if(array.length == 4){
    //     arrSnail.push(array[1][array[1].length - 1])
    //     arrSnail.push(array[2][array[2].length - 1])
    //     arrSnail.push(...array[3].reverse())
    //     arrSnail.push(array[2][0])
    //     arrSnail.push(...array[1].splice(0, array[1].length - 1))
    //     arrSnail.push(...array[2].splice(1, array[2].length - 1).reverse())
    // }

   return array
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))