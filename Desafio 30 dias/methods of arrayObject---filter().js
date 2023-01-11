function countGrade(scores){

    const obj = {

        S: scores.filter(i => i >= 100).length,
        A: scores.filter(i => i < 100 && i >= 90).length,
        B: scores.filter(i => i < 90 && i >= 80).length,
        C: scores.filter(i => i < 80 && i >= 60).length,
        D: scores.filter(i => i < 60 && i >= 0).length,
        X: scores.filter(i => i == -1).length

    }

    return obj

}

  console.log(countGrade([50,60,70,-1,100,100]))
  