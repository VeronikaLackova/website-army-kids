import allSweatPants from "../dataSweatPants"
import { Link } from "react-router-dom"
import {ShopContext} from "../context/shop-context"
import { useContext } from "react"
import "./SweatPants.css"

const SweatPants = () => {

  const { addToCart } = useContext(ShopContext)


  return <section>
    
    <div className="all-sweatpants">
    {allSweatPants.map( (oneItem) => {

        return <article key={oneItem.id} className="one-sweatpant">
          <Link to={`/all-sweatpants/${oneItem.id}`}>
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

export default SweatPants
