const getAllProducts = async () => {
  try {
    const res = await fetch("http://localhost:1111/api/products")
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}
const addNewProduct = () => {

}
const updateProduct = () => {

}
const deleteProduct = () => {

}

export { getAllProducts, addNewProduct, updateProduct, deleteProduct }