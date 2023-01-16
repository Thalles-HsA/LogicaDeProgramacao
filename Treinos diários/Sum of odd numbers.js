function rowSumOddNumbers(n) {

    let arr = []
    
    //cria o array com os numeros impares
    
    for(let i = 0; i < ((n+1)*n); i++){

        if(i % 2 != 0){
            arr.push(i)
        }
    }

    let a = 0
    let b = 1
    let acc = 0
    let arrTriangulo = []

    // cria o array em triangulo
    while( acc < n){

        arrTriangulo.push(arr.slice(a,b))

        a = b
        acc++
        b = a+acc+1
                
    }

    //soma o array da linha especificada em 'n'
    const soma = arrTriangulo[n-1].reduce((acumulador, soma) => acumulador + soma)

    return soma

}

    //formula super facil de fazer 

function rowSumOddNumbers2(n) {
    return Math.pow(n, 3);
    }
    
console.log(rowSumOddNumbers2(42))