import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">

        <nav className="header__nav">
          <Link to="/" className="nav__link">
            Home
          </Link>

          <Link to="/quienes-somos" className="nav__link">
            Quiénes somos
          </Link>

          <Link to="/login" className="nav__link nav__link--button">
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}
