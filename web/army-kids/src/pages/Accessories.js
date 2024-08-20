import allAccessories from "../dataAccessories"
import { Link } from "react-router-dom"
import { ShopContext } from "../context/shop-context"
import { useContext } from "react"
import "./Accessories.css"

const Accessories = () => {

  const { addToCart } = useContext(ShopContext)


  return <section>
    
    <div className="all-accessories">
    {allAccessories.map( (oneItem) => {

        return <article key={oneItem.id} className="one-accessory">
          <Link to={`/all-accessories/${oneItem.id}`}>
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

export default Accessories
