import "./Footer.css"
import banner from "../images/banner.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React from 'react'


const Footer = () => {

  const FacebookButton = () => {
    window.open('https://www.facebook.com/Armykidsfashion', '_blank')
  }

  const InstagramButton = () => {
    window.open('https://www.instagram.com/armykidsfashion/', '_blank')
  }

  return <footer>
    <div className="pre-footer">
       <div className="image-container"> 
        <img src={banner} alt="" /> 
       </div> 
     </div>

    <div className="row-footer">
    
      <div className="address-footer-container">
        <p>
          Army kids s.r.o.
          <br />
          Baničova 169/14
          <br />
          040 18 Košice
        </p>
        <a href="mailto:armykids@gmail.com">armykids@gmail.com</a>

        <div className="social-container">
            <button onClick={FacebookButton}>
              < FaFacebook className="facebook-icon"/>
            </button>
            <button onClick={InstagramButton}>
              < FaInstagram className="instagram-icon"/>
            </button>
        </div>
      </div>

      <div className="footer-below-links">
        <h1>Podmienky</h1>
        <a href="/doprava"><div><p>Doprava a platba</p></div></a>
        <a href="/reklamacia"><div><p>Reklamačný poriadok</p></div></a>
        <a href="/podmienky"><div><p>Obchodné podmienky</p></div></a>
        <a href="/ochrana"><div><p>Ochrana osobných údajov</p></div></a>
        <a href="/vratenie"><div><p>Vrátenie a výmena tovaru</p></div></a>
      </div>

      <hr />

      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Army kids. Všetky práva vyhradené.
        </p>
      </div>

    </div>
  </footer>
}

export default Footer
