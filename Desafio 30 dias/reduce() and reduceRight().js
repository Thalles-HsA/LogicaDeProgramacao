function tailAndHead(arr){

    const strArr = arr.map(i => i.toString())
    let novoArr = []

    for(let i = 0; i< arr.length - 1;i++){
        novoArr.push(parseInt(strArr[i].slice(-1)) + parseInt(strArr[i+1][0]))
    }

    return novoArr.reduce((acc, cur) => acc*cur)
    
}

console.log(tailAndHead([123,456,789,12,34,56,78]))