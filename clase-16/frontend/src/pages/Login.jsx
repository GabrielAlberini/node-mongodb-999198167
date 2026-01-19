import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { login as apiLogin } from "../services/apiAuth.js"

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const { login: loginContext } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await apiLogin(formData.email, formData.password)
      const { token, email } = response.data
      loginContext({ email, token })
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }



  return (
    <main className="auth">
      <section className="auth__card">
        <h1>Inicia Sesión</h1>

        <form onSubmit={handleSubmit} className="auth__form">
          <div className="form__group">
            <label>Email</label>
            <input
              type="email"
              placeholder="email@ejemplo.com"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
          </div>

          <div className="form__group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>

          <button className="auth__button">
            Ingresar
          </button>
        </form>
      </section>
    </main >
  )
}
