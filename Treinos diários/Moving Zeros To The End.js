function moveZeros(arr) {

    let arrDe0 = []

    for(let i = arr.length; i >= 0; i--) {

        if(arr[i] === 0) {

           arrDe0.push(arr.splice(i,1)[0])
        }
    }

    for(let i = 0; i < arrDe0.length; i++) {
        arr.push(arrDe0[i])
    }

    return arr
  
}

console.log(moveZeros([+0, 1, null, 2, false, 1, +0 ]))