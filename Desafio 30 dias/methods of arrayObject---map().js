function isolateIt(arr){

    return arr.map(i => {

        if(i.length % 2 === 1 ){
            return i.slice(0, i.length/2) + "|" + i.slice(i.length/2 + 1)
        } else {
            return i.slice(0, i.length/2) + "|" + i.slice(i.length/2)
        }
    })
 }

console.log(isolateIt(["abcde","fghi"]))

