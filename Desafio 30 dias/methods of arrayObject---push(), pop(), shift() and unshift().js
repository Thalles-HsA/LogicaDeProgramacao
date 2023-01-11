function infiniteLoop(arr,d,n){

   for( let i = 0; i < n; i++){

    if(d === "left"){
        arr[0].push(arr[1].shift())
        arr[1].push(arr[2].shift())
        arr[2].push(arr[0].shift())

    }
    if(d === "right"){
        arr[0].unshift(arr[2].pop())
        arr[1].unshift(arr[0].pop())
        arr[2].unshift(arr[1].pop())
    }
   }

    return arr
}

  console.log(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",3))

    //adiciona no final push();
    //adiciona no começo unshift();

    //remove do começo shift();
    //remove do final pop();
    