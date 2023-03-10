function uniteUnique(arr) {
  let new_arr = Object.values(arguments)
  let merge = []
  let result = []

  for (let i = 0; i < new_arr.length; i++) {
    merge = merge.concat(new_arr[i])
  }

  result = merge.filter((e, index) => {
    return merge.indexOf(e) === index
  })

  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);