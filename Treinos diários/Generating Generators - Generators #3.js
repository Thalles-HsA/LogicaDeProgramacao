function* generator(a, b) {

const str = []

for( let i1 = 1; i1 <= b; i1++){

    for( let i2 = 1; i2 <= 10; i2++){
        yield str.push(`${i1} x ${i2} = ${i1*i2}`)
    }
}

}

var gen = generator(1, 3);

console.log(gen.next())