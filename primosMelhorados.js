// Retornar a somas dos número primos até o numero recebido em "num"

const main = (num) => {
    let numeros = []

    for (var i = 0; i <= num; i++) {
      numeros.push(i)
    }
    
    const numerosPrimos = numeros.filter ((num) => {
      for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false
        };
      }
      return num > 1;
    })
  
    let somaPrimos = numerosPrimos.reduce((somaPrimos, numerosPrimos) => somaPrimos + numerosPrimos);  

    return somaPrimos;
  }

  // retorna 41

  console.log(main(15));