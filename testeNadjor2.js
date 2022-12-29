// Input: "1x0 * 12 = 1200"
// Output: 0
function MissingDigit(str){

        str = str.split(' ')
     
        let primeiroOperando = str[0]
        let operador = str[1]
        let segundoOperando = str[2]
        let resultado = str[str.length-1]
     
        
        if(resultado.indexOf('x') != -1){
            x = resultado
            primeiroOperando = parseInt(primeiroOperando)
            segundoOperando = parseInt(segundoOperando)
     
            if(operador == '+')
                res = primeiroOperando + segundoOperando
            else if(operador == '-')
                res = primeiroOperando - segundoOperando
            else if(operador == '*')
                res = primeiroOperando * segundoOperando
            else
                res = Math.floor(primeiroOperando / segundoOperando)
        } else{   

            resultado = parseInt(resultado)

            if(primeiroOperando.indexOf('x') != -1){
     
                x = primeiroOperando
                segundoOperando = parseInt(segundoOperando)
     
                if(operador == '+'){
                    res = resultado - segundoOperando
                } else if(operador == '-') {
                    res = resultado + segundoOperando
                } else if(operador == '*') {
                    res = Math.floor(resultado / segundoOperando)
                } else{res = resultado * segundoOperando}
            }  else {
     
                let x = segundoOperando
                primeiroOperando = parseInt(primeiroOperando)
     
                if(operador == '+')
                    res = resultado-primeiroOperando
                else if(operador == '-')
                    res = primeiroOperando - resultado
                else if(operador == '*')
                    res = Math.floor(resultado / primeiroOperando)
                else
                    res = Math.floor(primeiroOperando / resultado)
                }
        }
     
        res = res.toString()
        let k = 0
        for(let i of x){
            if(i == 'x'){
                resultado2 = res[k]
                break
            } else {
                k = k + 1
            }
        }
     
        return resultado2
    }
  
  

  console.log(MissingDigit("1x0 * 12 = 1200"))
