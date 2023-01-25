function* generator(n) {

    const str = []
    let acc = 1
    
    while( acc <= 10){

        str.push(`${n} x ${i} = ${n*i}`)
        acc ++
    }
    
    return str.join(" ")
    
    }
    
    console.log(generator(3))