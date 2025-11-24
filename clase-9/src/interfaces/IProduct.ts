interface IProduct {
  name: string,
  description?: string,
  price: number,
  stock: number | string,
  category: string
}

export { IProduct }