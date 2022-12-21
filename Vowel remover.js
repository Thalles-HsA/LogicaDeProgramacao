function shortcut (string) {

    return string.replaceAll(/[aeiou]/g, '')
}

  console.log(shortcut('AAaabbBBeeEEiiII'))