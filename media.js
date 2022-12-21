// var notas = [10, 6, 8, 5.5, 10]  
// var soma = 0

// function calcularMedia () {
//         for(var i = 0; i < notas.length; i++) {
//                 soma += notas[i];
//         }
//         return soma / notas.length
// }


// notas.pop()
// console.log (`A média é ${calcularMedia()}`)


// const arrayVazia = [,,,];
// console.log(arrayVazia.length)
// console.log(arrayVazia[0])
// console.log(arrayVazia[1])
// console.log(arrayVazia[2])

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 
'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = alunos.slice (0, alunos.length / 2)
const sala2 = alunos.slice (alunos.length / 2)

console.log(sala1)
console.log(sala2)

alunos.splice()