function validParentheses(parens) {

    const arr = parens.split("")

    const parens1 = arr.filter(i => i == "(").length
    const parens2 = arr.filter(i => i == ")").length
    let acc = 0

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "("){
            acc += 1
        } else{
            acc -= 1
        }

        if(acc === -1){
         return false
        }
    }

    if (parens1 != parens2 || arr[0] == ")" || arr[arr.length -1] == "("){
        return false
    } else {
        return true
    }


  }

  console.log(validParentheses("())(()"))