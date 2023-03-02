function diffArray(arr1, arr2) {
  const newArr = [];


  let arreglo = arr1.concat(arr2).sort()
  console.log(arreglo)

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i + 1] && arreglo[i] !== arreglo[i + 1] || !arreglo[i + 1]) {
      console.log(arreglo[i])
      newArr.push(arreglo[i])
    } else if (arreglo[i + 1] && arreglo[i] == arreglo[i + 1]) {
      i++
    }
  }

  return newArr
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]))