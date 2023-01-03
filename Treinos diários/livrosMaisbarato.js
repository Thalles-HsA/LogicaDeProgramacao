const livros = [
{
    titulo: "JavaScript",
    preco: 25
},
{
    titulo: "PHP",
    preco: 15
},
{
    titulo: "NodeJS",
    preco: 30
},
{
    titulo: "Angular",
    preco: 45
},
{
    titulo: "HTML/CSS",
    preco: 10
},
{
    titulo: "React",
    preco: 40
},
{
    titulo: "TypeScript",
    preco: 20
}
]

let maisBarato = 0;
let maisCaro = 0;

for (let i = 0; i < livros.length; i++){

    if(livros[i].preco < livros[maisBarato].preco){
        maisBarato = i
    } if (livros[i].preco > livros[maisCaro].preco){
        maisCaro = i
    }
}

const soma = livros.reduce((media, livros) => media + livros.preco, 0);
const media = soma / livros.length
let preços = livros.preco
const livrosOrdenador = preços.sort()

console.log (`O livro mais barato é o de ${livros[maisBarato].titulo} e custa ${livros[maisBarato].preco} reais`)
console.log (`O livro mais caro é o de ${livros[maisCaro].titulo} e custa ${livros[maisCaro].preco} reais`)
console.log (`O valor de todos os livros junto ficaria ${soma} reais`)
console.log (`A média de valor dos livros é de ${media} reais`)
console.log (livrosOrdenador)
