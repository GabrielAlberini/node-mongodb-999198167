const multiplicar = (n1, n2) => {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "No se puede multiplicar, data invalida."
  } else {
    return n1 * n2
  }
}

// NaN -> not a number
console.log(multiplicar(1, "kdhflkjasdhf"))

console.log(multiplicar(4, 3))
