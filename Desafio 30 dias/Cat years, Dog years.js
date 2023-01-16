var humanYearsCatYearsDogYears = function(humanYears) {

    let catYears = 0
    let dogYears = 0

    if(humanYears == 1){
        catYears = 15
        dogYears = 15

        return [humanYears,catYears,dogYears];
    }

    if(humanYears == 2) {
        catYears = 15 + 9
        dogYears = 15 + 9

        return [humanYears,catYears,dogYears];
    }

    if(humanYears >= 3) {
        catYears = 15 + 9 + ((humanYears - 2) * 4)
        dogYears = 15 + 9 + ((humanYears - 2) * 5)

        return [humanYears,catYears,dogYears];
    }

}

console.log(humanYearsCatYearsDogYears(1))
