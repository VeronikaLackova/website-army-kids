import { NavLink, useParams } from "react-router-dom"
import allAccessories from "../dataAccessories"
import { ShopContext } from "../context/shop-context"
import { useContext, useState, useEffect } from "react"
import "./OneAccessory.css"

const OneAccessory = () => {
  
  const { addToCart } = useContext(ShopContext)

  useEffect( () => {
    window.scrollTo(0,0)
  }, [])

    const {itemId} = useParams()

    const oneSpecificItem = allAccessories.find( (oneItem) => {
      return oneItem.id === parseInt(itemId)
    })

    const {id, image, title, price, tags} = oneSpecificItem

    const [isZoomed, setIsZoomed] = useState(false)

    const toggleZoom = () => {
      setIsZoomed(!isZoomed)
    }


return <section className="one-accessory-more">
<div className="product-info">
    <div className={`image-section ${isZoomed ? "zoomed" : ""}`} onClick={toggleZoom}>
      <img src={image} alt={title} />
    </div>
    <div className="details-section">
      <h2>{title}</h2>
      <p>{tags}</p>
      <hr />
      <p className="price">{price} €</p>
      <button className="add-button" onClick={() => addToCart(id)}>Pridať do košíka</button>
      <NavLink to="/doplnky">Späť na všetky doplnky</NavLink>
    </div>
</div>
</section>
}

export default OneAccessory
