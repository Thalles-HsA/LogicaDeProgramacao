function disemvowel(str) {

    const arr = str.split(" ").map(i => i.split(""))

    return arr.map(i => i.filter(i => i != "i" && i != "e" && i != "a" && i != "o" && i != "u" && i != "I" && i != "E" && i != "A" && i != "O" && i != "U" ).join("")).join(" ")
}

console.log(disemvowel("This website is for losers LOL!"))