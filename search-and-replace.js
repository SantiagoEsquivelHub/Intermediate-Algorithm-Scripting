function myReplace(str, before, after) {

  const regxs = {
    lower: /^[a-z0-9 ]/,
    upper: /^[A-Z0-9 ]/,
  }

  console.log(regxs.lower.test(before))
  if (regxs.lower.test(before)) {
    after = after[0].toLowerCase() + after.slice(1)

  };
  if (regxs.upper.test(before)) {
    after = after[0].toUpperCase() + after.slice(1)
  };

  console.log('after: ', after)




  let arr = str.split(" ")
  const on_arr = arr.includes(before)
  const index =
    on_arr
      ? arr.indexOf(before)
      : null

  index
    ? arr[index] = after
    :

    // console.log("arr: ", arr)
    console.log("on_arr: ", on_arr)
  console.log("index: ", index)
  arr = arr.join(" ")
  console.log("arr: ", arr)
  return arr;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");