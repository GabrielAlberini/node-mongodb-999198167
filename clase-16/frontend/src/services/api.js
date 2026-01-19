const baseUrl = import.meta.env.VITE_API_BASE

const getAllProducts = async () => {
  try {
    const res = await fetch(`${baseUrl}/products`, {
      method: "GET"
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const addNewProduct = async (product) => {
  try {
    const res = await fetch(`${baseUrl}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const deleteProduct = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/products/${id}`, {
      method: "DELETE"
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

const updateProduct = async (id, updates) => {
  try {
    const res = await fetch(`${baseUrl}/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updates)
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error.message)
  }
}

export { getAllProducts, addNewProduct, deleteProduct, updateProduct }