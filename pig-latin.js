function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"]
  const first_letter = str[0]
  let is_vowel =
    vowels.includes(first_letter)
  let str2 = str
  let grupo = []

  let new_str = ""
  for (let i = 0; i < [...str].length; i++) {
    if (vowels.includes([...str][i])) {
      break
    } else {
      str2 = str2.slice(1)

      grupo.push([...str][i])
    }
  }
  grupo = grupo.join("")
  console.log("grupo: ", grupo)
  console.log("str2: ", str2)

  if (is_vowel) {
    //Añadir way al final del str

    new_str = str + "way"
  } else {
    //Añadir (la consonante + ay) al final del str

    new_str = str2 + grupo + "ay"

  }

  console.log("first_letter: ", first_letter)
  console.log("is_vowel: ", is_vowel)
  console.log("new_str: ", new_str)
  return new_str;
}

translatePigLatin("glove");