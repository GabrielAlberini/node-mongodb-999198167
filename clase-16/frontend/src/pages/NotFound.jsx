import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <main className="notfound">
      <section className="notfound__content">
        <h1>404</h1>
        <h2>Página no encontrada</h2>

        <p>
          La página que estás buscando no existe o fue movida.
        </p>

        <a href="/" className="notfound__link">
          Volver al inicio
        </a>
      </section>
    </main>
  )
}
