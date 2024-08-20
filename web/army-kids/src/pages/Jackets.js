import allJackets from "../dataJackets"
import { Link } from "react-router-dom"
import {ShopContext} from "../context/shop-context"
import { useContext } from "react"
import "./Jackets.css"

const Jackets = () => {

  const { addToCart } = useContext(ShopContext)


  return <section>
    
    <div className="all-jackets">
      {allJackets.map( (oneItem) => {

        return <article key={oneItem.id} className="one-jacket">
          <Link to={`/all-jackets/${oneItem.id}`}>
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

export default Jackets
