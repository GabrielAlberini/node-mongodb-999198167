const baseUrl = import.meta.env.VITE_API_BASE

const login = async (email, password) => {
  try {
    console.log({ email, password })
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error(error.message)
  }
}

export { login }