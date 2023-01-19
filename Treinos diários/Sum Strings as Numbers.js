function sumStrings(a,b) { 

    const numA = BigInt(a)
    const numB = BigInt(b)

    return (numA + numB).toString()

}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))