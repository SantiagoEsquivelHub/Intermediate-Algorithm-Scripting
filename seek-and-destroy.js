function destroyer(arr) {
  let newArr = []
  let toDestroy =
    Object.values(arguments).filter(e => e !== arr)

  console.log(toDestroy)
  console.log(arr)

  let elemToDestroy = 0


newArr = arr.filter(e =>{
  return !toDestroy.includes(e)
})

  // for (let i = 0; i < arr.length; i++) {
  //   let elementoEliminar = false

  //   /*Validamos para cada uno de los valores del arreglo si
  //   son o no iguales a los numeros a eliminar*/
  //   for (let j = 0; j < toDestroy.length; j++) {
  //     if (arr[i] === toDestroy[j]) {
  //       elementoEliminar = true
  //     }
  //   }

  //   // Si no son los elementos a eliminar, permanecen
  //   if (!elementoEliminar) {
  //     newArr.push(arr[i])
  //   }
  // }


  console.log(newArr)
  return newArr
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);