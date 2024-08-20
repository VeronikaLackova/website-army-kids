import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context'
import "./CartItem.css"

const CartItem = (props) => {

    const { id, image, title, price } = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

  return (
    <div className='cart-item'>
      <img src={image} alt={title}/>
      <div className='description'>
        <p> <b> {title} </b></p>
        <p> {price} €</p>
      </div>
        <div className='count-handler'>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} onChange={(event) => updateCartItemCount(Number(event.target.value), id)}/>
          <button onClick={() => addToCart(id)}> + </button>
        </div>
    </div>
  )
}

export default CartItem
