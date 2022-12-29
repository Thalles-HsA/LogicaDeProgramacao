function LongestIncreasingSequence(arr) { 

        let arrLis = new Array(arr.length);
        let i = 0;
        let j = 0;
        let longestArr = 0;
     
        for(i = 0; i < arr.length; i++){
            arrLis[i] = 1;
        }

        for(i = 1; i < arr.length; i++){
            for(j = 0; j < i; j++){
                if (arr[i] > arr[j] && arrLis[i] < arrLis[j] + 1){
                    arrLis[i] = arrLis[j] + 1; 
                }
            }
        }
     
        for(i = 0; i < arr.length; i++)
            if (longestArr < arrLis[i]){
                longestArr = arrLis[i];
            }
     
        return longestArr;
    }
  
let arr = [10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90 ]

console.log(LongestIncreasingSequence(arr))