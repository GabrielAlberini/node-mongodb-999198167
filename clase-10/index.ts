const multiplicar2 = (n1: number, n2: number) => n1 * n2

// NaN -> not a number
console.log(multiplicar2(1, 3))
console.log(multiplicar2(4, 3))

const multiplicar3 = (n1: any, n2: any) => {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "No se puede multiplicar, data invalida."
  } else {
    return n1 * n2
  }
}

multiplicar3(true, {})