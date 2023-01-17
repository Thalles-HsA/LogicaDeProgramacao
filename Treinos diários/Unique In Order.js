var uniqueInOrder = (iterable) => {

    const arr = []

    for(let i = 0; i < iterable.length; i++){

        if(iterable[i] !== iterable[i+1]){
            arr.push(iterable[i])

        }
    }

    return arr
    
  }

                    //     0 1 2 3 4
console.log(uniqueInOrder('AAAABBBCcDAABBC'))