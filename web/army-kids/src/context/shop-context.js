import React, { createContext, useState } from 'react'
import allAccessories from '../dataAccessories'
import allHoodies from '../dataHoodies'
import allJackets from '../dataJackets'
import allSweatPants from '../dataSweatPants'
import allTshirts from '../dataTshirts'

export const ShopContext = createContext(null)

const getAllItems = () => {
    return [
        ...allAccessories,
        ...allHoodies,
        ...allJackets,
        ...allSweatPants,
        ...allTshirts
    ]
}

const getDefaultCart = () => {
    let cart = {}
    const items = getAllItems()
    items.forEach(item => {
        cart[item.id] = 0
    })
    return cart
}



const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                let itemInfo = getAllItems().find((product) => product.id === Number(itemId))
                totalAmount += cartItems[itemId] * itemInfo.price
            }
        }

        return totalAmount
    }


    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: (prev[itemId] || 0) + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: (prev[itemId] || 0) - 1}))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount }))
    }

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount }



  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
