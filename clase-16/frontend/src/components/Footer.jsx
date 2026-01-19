import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>
          © {new Date().getFullYear()} MiTienda. Todos los derechos reservados.
        </p>

        <nav className="footer__nav">
          <Link to="/" className="footer__link">
            Home
          </Link>

          <Link to="/about" className="footer__link">
            Quiénes somos
          </Link>

          <Link to="/auth" className="footer__link">
            Login
          </Link>
        </nav>
      </div>
    </footer>
  )
}
