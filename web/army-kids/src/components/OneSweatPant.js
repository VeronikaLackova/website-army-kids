import { NavLink, useParams } from "react-router-dom"
import allSweatPants from "../dataSweatPants"
import {ShopContext} from "../context/shop-context"
import { useContext, useState, useEffect} from "react"
import "./OneSweatPant.css"

const OneSweatPant = () => {

  const { addToCart } = useContext(ShopContext)

  useEffect( () => {
    window.scrollTo(0,0)
  }, [])

    const {itemId} = useParams()

    const oneSpecificItem = allSweatPants.find( (oneItem) => {
      return oneItem.id === parseInt(itemId)
    })

    const {id, image, title, price, tags} = oneSpecificItem

    const [isZoomed, setIsZoomed] = useState(false)

    const toggleZoom = () => {
      setIsZoomed(!isZoomed)
    }


//   return <section className="one-sweatpant-more">
//     <h2>{title}</h2>
//     <img src={image} alt="" />
//     <p>{price} €</p>
//     <p>{tags}</p>
//     <Link to="/teplaky">Späť na všetky tepláky</Link>
//   </section>
// }

return <section className="one-sweatpant-more">
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
      <NavLink to="/teplaky">Späť na všetky tepláky</NavLink>
    </div>
</div>
</section>
}

export default OneSweatPant
