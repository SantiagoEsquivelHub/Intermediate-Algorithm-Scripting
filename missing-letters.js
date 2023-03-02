function fearNotLetter(str) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const arr = alphabet.split("")
  const first_letter = str[0]
  const length_str = str.length

  let index = arr.indexOf(first_letter)
  let range = arr.splice(index, length_str).sort()
  let arr_str = [...str].sort()

  let missed_letter
  for (let i = 0; i < length_str; i++) {

    if (arr_str[i] !== range[i]) {
      missed_letter = range[i]
      break
    }
  }

  return missed_letter;
}

fearNotLetter("stvwx");