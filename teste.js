function treinoDeBiceps (repeticoes) {
  levantarPeso = 0

  for (let i = 0; i < repeticoes; i++) {
    levantarPeso++
  }
  
  return levantarPeso
}

    console.log (treinoDeBiceps(10))