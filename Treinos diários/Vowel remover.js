function shortcut (string) {

    return string.replaceAll(/[aeiou]/, '')
}

  console.log(shortcut('AAaabbBBeeEEiiII'))