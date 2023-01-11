function alienLanguage(str){

    const arrUpperCase = str.toUpperCase().split(" ")

    for(let i = 0; i < arrUpperCase.length; i++) {

      let todosMenosUltimo = arrUpperCase[i].slice(0, -1);
      let ultimo = arrUpperCase[i].slice(-1).toLowerCase()

      arrUpperCase[i] = todosMenosUltimo + ultimo
    }
    
    return arrUpperCase.join(" ")
    
}

console.log(alienLanguage("My name is John"))