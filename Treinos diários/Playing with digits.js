function digPow(n, p) {

let a = 0
let b = 0
let c = 0
let d = 0
let e = 0
let f = 0
let g = 0

const stringNumero = n + ""
const novoNumero = stringNumero.split("")

a = novoNumero[0]
b = novoNumero[1]
c = novoNumero[2]
d = novoNumero[3]
e = novoNumero[4]
f = novoNumero[5]
g = novoNumero[6]


let funcao = ((a ** p) + (b ** (p+1)))


let k = funcao / n


return k

}

console.log(digPow(89, 1))