function smartSum(n){

    let arr = []

    n.forEach(i => {
        if(i.length > 1) {
            i.forEach(i => {
                if(i.length > 1){
                    arr.push(i.reduce((acc,cur) => acc + cur))
                } else {
                    arr.push(i)
                }
            })
        } else {
            arr.push(i)
        } 
    })

    return arr.reduce((acc,cur) => acc + cur)
}


console.log(smartSum(1,2,[[3,4],5],6))
