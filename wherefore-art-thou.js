function whatIsInAName(collection, source) {

  let keys = Object.keys(source)
  let values = Object.values(source)
  console.log(keys)
  console.log(values)

  return collection.filter(e => {
    let tiene = false
    // Recorremos cada una de las keys
    for (let i = 0; i < keys.length; i++) {

      if (!e.hasOwnProperty(keys[i]) || e[keys[i]] !== source[keys[i]]) {
        return false
      }
    }
    return true

  })

  console.log(rel)
  return rel
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });