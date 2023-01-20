import React,{createContext, useState} from 'react'

import productItems from "../produtsArray"
const {Provider,Consumer} = createContext()

function ContextProvider(props){
  
    const [cartItems,setCartItems] = useState([])


      const removeFromCart = (e,id) => {
        setCartItems(prevCartItem => {
           return prevCartItem.filter(item => item.id !== id)
        })
        // const item = productItems.filter(item => item.id !== id)

      }


      const addToCart = (e,id) => {
        const item = productItems.find(item => item.id === id)
       setCartItems((prevItem => {
        return [...prevItem, item]
       }))
      }
//    console.log(cartItems.map(item => (item)))

console.log(cartItems)

    return(
        <Provider value={{
            cartItems,
            setCartItems,
            productItems,
            removeFromCart,
            addToCart
        }}>
          {props.children}
        </Provider>
    )
}


export {ContextProvider,Consumer}