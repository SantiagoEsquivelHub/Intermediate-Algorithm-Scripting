function pairElement(str) {

  let dna = {
    C: "G",
    G: "C",
    A: "T",
    T: "A"
  }
  //Adenina con Timina
  //Citosina con Guanina

  const arr = [...str]

  let dna_paired = arr.map(e => {
    // console.log(dna[e])
    let aux = [e, dna[e]]
    console.log(aux)
    return aux
  })


  console.log(dna_paired)
  return dna_paired;
}

pairElement("ATCGA");