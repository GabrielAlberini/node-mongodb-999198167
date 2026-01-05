import { useState } from "react"

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <main className="auth">
      <section className="auth__card">
        <h1>{isLogin ? "Iniciar sesión" : "Crear cuenta"}</h1>

        <form className="auth__form">
          {!isLogin && (
            <div className="form__group">
              <label>Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
              />
            </div>
          )}

          <div className="form__group">
            <label>Email</label>
            <input
              type="email"
              placeholder="email@ejemplo.com"
            />
          </div>

          <div className="form__group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
            />
          </div>

          {!isLogin && (
            <div className="form__group">
              <label>Confirmar contraseña</label>
              <input
                type="password"
                placeholder="••••••••"
              />
            </div>
          )}

          <button className="auth__button">
            {isLogin ? "Ingresar" : "Registrarse"}
          </button>
        </form>

        <p className="auth__switch">
          {isLogin ? "¿No tenés cuenta?" : "¿Ya tenés cuenta?"}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Registrate" : "Iniciá sesión"}
          </button>
        </p>
      </section>
    </main>
  )
}
