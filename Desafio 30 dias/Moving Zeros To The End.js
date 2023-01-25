function moveZeros(arr) {

    let NewArr = []

    for(let i = arr.length; i>=0; i--){
        if(arr[i] === 0){
            NewArr.push(arr.splice(i,1)[0])
        }
    }

    for(let i = 0; i < NewArr.length; i++){
        arr.push(NewArr[i])
    }

    return arr

}

console.log(moveZeros([false,1,0,1,2,0,1,3,"0"]))