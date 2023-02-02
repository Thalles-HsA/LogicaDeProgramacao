function validateSudoku(board) {

    let boolean = true
    let linha = []
    let coluna = []

    const validacaoLinha = board.forEach(i => {
       
        i.forEach(i => {
            linha.push(i);

            if(i < 1) {
                boolean = false
            };

        });

        linha.sort()

        for(let i = 1; i < linha.length - 1; i++){
            if(linha[i] == linha[i+1]){
                boolean = false
            }
        }

        linha = []
    })

    const validacaoColuna = {
        
    }
    return boolean

}

const arrs = [
    [1, 3, 2, 5, 7, 9, 4, 6, 8],
    [4, 9, 8, 2, 6, 1, 3, 7, 5],
    [7, 5, 6, 3, 8, 4, 2, 1, 9],
    [6, 4, 3, 1, 5, 8, 7, 9, 2],
    [5, 2, 1, 7, 9, 3, 8, 4, 6],
    [1, 8, 7, 4, 2, 6, 5, 3, 1],
    [2, 1, 4, 9, 3, 5, 6, 8, 7],
    [3, 6, 5, 8, 1, 7, 9, 2, 4],
    [8, 7, 9, 6, 4, 2, 1, 5, 3]
]

console.log(validateSudoku(arrs))