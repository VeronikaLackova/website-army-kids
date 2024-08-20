import React from 'react'
import { useNavigate } from 'react-router-dom'
import allAccessories from '../dataAccessories'
import allHoodies from '../dataHoodies'
import allJackets from '../dataJackets'
import allSweatPants from '../dataSweatPants'
import allTshirts from '../dataTshirts'
import { ShopContext } from '../context/shop-context'
import { useContext } from "react"
import CartItem from './CartItem'
import "./Kosik.css"

const Kosik = () => {

  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  

  const getAllItems = () => {
    return [
        ...allAccessories,
        ...allHoodies,
        ...allJackets,
        ...allSweatPants,
        ...allTshirts
    ]
}

  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  return (
    <div className='kosik'>
      <div>
        <h1>Nákupný košík</h1>
      </div>
      <div className='kosik-produkty'>
        {getAllItems().map((product) => {
          if (cartItems[product.id] && cartItems[product.id] > 0) {
            return <CartItem key={product.id} data={product} />
          }
          return null
        })}

      </div>

    {totalAmount > 0 ? (
      <div className='pokladna'>
        <p>Medzisúčet: {totalAmount} €</p>
        <button onClick={() => navigate("/tricka")}>Pokračovať v nákupe</button>
        <button>Pokladňa</button>
      </div>
    ) : (
      <h1>Váš košík je prázdny</h1>
    )}
    </div>
  )
}

export default Kosik
