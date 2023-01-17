function solution(number){

    let arr = []

    for(let i = 1; i < number; i++) {
        arr.push(i)
    }

    if(number > 3) {

      return arr.filter(i => i % 3 === 0 || i % 5 === 0).reduce((acc, cur) => acc + cur)

    } else if ( number <= 3) {
        return 0
    }

}

console.log(solution(3))