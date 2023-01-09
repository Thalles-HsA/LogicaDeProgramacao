function splitAndMerge(string, separator) {

    const primeiroArr = string.split(" ")
    let segundoArr = []

    for(let i = 0; i < primeiroArr.length; i++){
        segundoArr.push(primeiroArr[i].split("").join(separator))
    }

    return segundoArr.join(" ")

}

console.log(splitAndMerge("Hello World!", "-"))