import allTshirts from "../dataTshirts"
import { Link } from "react-router-dom"
import { ShopContext } from "../context/shop-context"
import { useContext, useEffect } from "react"
import "./Tshirts.css"


const Tshirts = () => {


  const { addToCart } = useContext(ShopContext)

  useEffect( () => {
    window.scrollTo(0,0)
  }, [])



  return <section>
    
    <div className="all-tshirts">
      {allTshirts.map( (oneItem) => {
   

        return <article key={oneItem.id} className="one-tshirt">
          <Link to={`/all-tshirts/${oneItem.id}`}>
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

export default Tshirts


