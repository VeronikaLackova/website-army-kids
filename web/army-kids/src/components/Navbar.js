import { NavLink } from "react-router-dom"
import logo from "../images/logo.jpg"
import { FaShoppingCart } from "react-icons/fa"
import "./Navbar.css"


const Navbar = () => {

  return <header>
    <nav>

      <div className="navigation">
        <div className="nav-header">
            <NavLink to="/">
                <img src={logo} alt="" />
            </NavLink>
        </div>

        <div className="nav-list">
          <ul>
            <li>
              <NavLink to="/prihlasenie">Prihlásenie</NavLink>
            </li>
            <li>
              <NavLink to="/register">Registrácia</NavLink>
            </li>
            <li>
              <NavLink to="/kosik">
                <div className="kosik-button">
                  <FaShoppingCart className="kosik-icon"/>
                </div>
            </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
}

export default Navbar
