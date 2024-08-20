import allHoodies from "../dataHoodies"
import { Link } from "react-router-dom"
import {ShopContext} from "../context/shop-context"
import { useContext } from "react"
import "./Hoodies.css"

const Hoodies = () => {

  const { addToCart } = useContext(ShopContext)


  return <section>
    
    <div className="all-hoodies">
    {allHoodies.map( (oneItem) => {

        return <article key={oneItem.id} className="one-hoodie">
          <Link to={`/all-hoodies/${oneItem.id}`}>
              <img src={oneItem.image} alt="" />
          </Link>
          <h2>{oneItem.title}</h2>
          <p>{oneItem.price} €</p>
          <button className="add-button" onClick={() => addToCart(oneItem.id)}>Pridať do košíka</button>
        </article>
      })}
    </div>
  </section>
}

export default Hoodies
