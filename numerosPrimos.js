const main = (num) => {

    let numerosPrimos = new Array();
    for (var i = 0; i <= num; i++) {

      if (isPrime(i)){
        numerosPrimos.push(i);
      }
    }

    let soma = 0

    for(let i = 0; i<numerosPrimos.length; i++){
      soma += numerosPrimos[i];
    }
    
    return soma;
  }
  function isPrime(num) {

    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
          return false
      };
    }
    return num > 1;
  }

  console.log(main(15));