import React from 'react'
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import "./Menu.css"

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)


  return (
    <nav className='nav-products'>

        <div className='navigation-products'>

            <div className='menu-icon'>
                <button onClick={() => setShowMenu(!showMenu) }>
                    < GiHamburgerMenu className="hamburger-icon"/>
                </button>
            </div>

            <div className={`${showMenu ? "nav-list-products show" : "nav-list-products hide"} `}>
                <ul>
                    <li>
                        <NavLink to="/tricka" className={ ({isActive}) => 
                        isActive ? "activeLink link" : "nonactiveLink link"
                        }>TRIČKÁ</NavLink><br />
                    </li>
                    <li>
                        <NavLink to="/teplaky" className={ ({isActive}) => 
                        isActive ? "activeLink link" : "nonactiveLink link"
                        }>TEPLÁKY</NavLink><br />
                    </li>
                    <li>
                        <NavLink to="/mikiny" className={ ({isActive}) => 
                        isActive ? "activeLink link" : "nonactiveLink link"
                        }>MIKINY</NavLink><br />
                    </li>
                    <li>
                        <NavLink to="/bundy" className={ ({isActive}) => 
                        isActive ? "activeLink link" : "nonactiveLink link"
                        }>BUNDY</NavLink><br />
                    </li>
                    <li>
                        <NavLink to="/doplnky" className={ ({isActive}) => 
                        isActive ? "activeLink link" : "nonactiveLink link"
                        }>DOPLNKY</NavLink><br />
                    </li>
                </ul>
                </div>

        </div>
    </nav>
  )
}

export default Menu
