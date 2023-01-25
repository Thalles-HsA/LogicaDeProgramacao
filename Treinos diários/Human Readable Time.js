function humanReadable (seconds) {

    let horas = 0
    let minutos = 0
    let segundos = 0

    for(let i = 0; i < seconds; i++){

        if(segundos < 60){
            segundos++
        }

        if(segundos == 60) {
            segundos = 0
            minutos += 1
        }

        if(minutos == 60) {
            minutos = 0
            horas +=1
        }
    }
    
    let strHoras = `${horas}:`
    let strMinutos = `${minutos}:`
    let strSegundos = `${segundos}`

    if(horas.toString().split("").length < 2){
        strHoras = `0${horas}:`
    }
    if(minutos.toString().split("").length < 2){
        strMinutos = `0${minutos}:`
    }
    if(segundos.toString().split("").length < 2){
        strSegundos = `0${segundos}`
    }
    

    return strHoras+strMinutos+strSegundos
  }

 console.log((humanReadable(3600)))