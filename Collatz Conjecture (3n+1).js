var hotpo = function(n){
  let contador = 1

  if(n == 0 || n == 1){
    contador = 0
  } else {
    if (n % 2 == 0){
      n = n / 2 
      contador ++
     }
     
     let funcao = (n*3)+1
 
     while (funcao > 1) { 
 
     if(funcao % 2 === 0){
       funcao = funcao / 2
     } else {
       funcao = (funcao * 3) + 1 
     }
 
     contador ++
   }
  }
 return contador

}

console.log(hotpo(22))