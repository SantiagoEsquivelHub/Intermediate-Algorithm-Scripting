function sumAll(arr) {

  let inicio = 0
  let final = 0

  if (arr[0] > arr[1]) {
    inicio = arr[0]
    final = arr[1]
  } else {
    inicio = arr[1]
    final = arr[0]
  }

  let suma = final

  while (inicio !== final) {
    suma += inicio
    inicio--

  }
  
  return suma
}

sumAll([5, 10]);