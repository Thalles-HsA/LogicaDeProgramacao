function solution(number){

    let arr = []

    for(let i = 3; i < number; i++){
        arr.push(i)
    }

    if(number > 3){
        return arr.filter(i => i % 3 === 0 || i % 5 === 0).reduce((acc,cur)=>acc+cur)
    } else {
        return 0
    }

}

console.log(solution(1))