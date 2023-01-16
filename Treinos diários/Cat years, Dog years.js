var humanYearsCatYearsDogYears = function(humanYears) {
  
    let dogYears = 0
    let catYears = 0

    if(humanYears == 1) {
        dogYears += 15
        catYears += 15

        return [humanYears, catYears, dogYears]
    } else if ( humanYears == 2 ) {
        dogYears += 15 + 9
        catYears += 15 + 9

        return [humanYears, catYears, dogYears]
    } else if ( humanYears >= 3) {
        dogYears += 15 + 9 + (5 *(humanYears-2))
        catYears += 15 + 9 + (4 *(humanYears-2))

        return [humanYears, catYears, dogYears]
    }

  }

  console.log(humanYearsCatYearsDogYears(2))