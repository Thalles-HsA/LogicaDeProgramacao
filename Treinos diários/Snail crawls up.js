function snail(column, day, night) {

    let dias = 0
    
    if(column < day) {
        return 1
    }

    while(column > night){
        dias++
        column -= day
        column += night
    }
    
    return dias
  }

  console.log(snail(10,3,2))