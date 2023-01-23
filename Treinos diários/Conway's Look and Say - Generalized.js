function lookSay(number){

    const arrNum = String(number).split("")
    let novoArr = []
    let acc = 0

    for(let i = 0; i < arrNum.length; i++) {

        if(arrNum[i]===arrNum[i+1]){
            acc++
        } else {
            novoArr.push(acc + 1)
            novoArr.push(arrNum[i])
            acc = 0
        }
    }

    return +novoArr.join("")

}

console.log(lookSay(2014))