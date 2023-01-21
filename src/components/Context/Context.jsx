import React,{createContext, useState} from 'react'

import productItems from "../produtsArray"
const Context = createContext()

function ContextProvider(props){
  
    const [cartItems,setCartItems] = useState([])
    const [products,setProducts] = useState(productItems)
    const [isItemsAdded,setIsItemsAdded] = useState(false)


      const removeFromCart = (e,id) => {
        setCartItems(prevCartItem => {
           return prevCartItem.filter(item => item.id !== id)
        })
      }


      const addToCart = (e,id) => {
        const itemToAdd = products.find(item => item.id === id)
        setCartItems(prevItems => {
           return [...prevItems,itemToAdd]
        })
        setIsItemsAdded(true)
      }

console.log(cartItems)

    return(
        <Context.Provider value={{
            cartItems,
            setCartItems,
            removeFromCart,
            addToCart,
            products,
            isItemsAdded,
            setIsItemsAdded
        }}>
          {props.children}
        </Context.Provider>
    )
}


export {ContextProvider,Context}