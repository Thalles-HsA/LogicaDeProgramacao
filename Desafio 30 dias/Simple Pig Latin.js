function pigIt(str){

    let arr = []
    const palavras = str.split(" ")

    palavras.forEach(i => arr.push([... i]))
    
    arr.forEach(i  => i.push(i.shift()))

    const ultimo = arr[arr.length -1][0]

    if(ultimo === "!" || ultimo === "?"){
        return arr.map(i => i.join("")).join("ay ")
    } else {
        return arr.map(i => i.join("") + "ay").join(" ")
    }

}

console.log(pigIt('Pig latin is cool'))