function threeInOne(arr){
    
    let arr2 = []

    for(let i = 0; i < arr.length; i +=3 ){

        let novoArr = arr.slice(i,i+3)
        let soma = 0
    
        for(let i = 0; i < novoArr.length; i++){
            soma += novoArr[i]
        }

        arr2.push(soma)

    }
    

    return arr2
    
}

  console.log(threeInOne( [1,2,3,4,5,6,7,8,9]))