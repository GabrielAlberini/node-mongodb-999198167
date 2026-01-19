import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const Header = () => {

  const { logout } = useAuth()

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
          <button onClick={logout} className="nav__link nav__link--button">
            Logout
          </button>
        </nav>
      </div>
    </header>
  )
}
