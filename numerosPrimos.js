const main = () => {

    let numerosPrimos = new Array(); // 1º criou novo array = []

                //3
    for (var i = 0; i <= 1000; i++) {

      if (isPrime(i)){ // 2º a condição chama a function isPrime
        numerosPrimos.push(i);
      }
    }
    
    let somaPrimos = numerosPrimos.reduce((somaPrimos, numerosPrimos) => somaPrimos + numerosPrimos);
    
    return somaPrimos;
    // return numerosPrimos
  }

  
  
  function isPrime(num) { //3º param = 0

                  //2    3
    for(let i = 2; i < num; i++) {

        //3   2
      if(num % i === 0) {
          return false
      };
    }

    return num > 1;

  }
  console.log(main());