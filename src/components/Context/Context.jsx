import React,{createContext, useState} from 'react'

import productItems from "../produtsArray"
const {Provider,Consumer} = createContext()

function ContextProvider(props){
  
    const [cartItems,setCartItems] = useState([])
    const [products,setProducts] = useState(productItems)


      const removeFromCart = (e,id) => {
        setCartItems(prevCartItem => {
           return prevCartItem.filter(item => item.id !== id)
        })
        // const item = productItems.filter(item => item.id !== id)

      }


      const addToCart = (e,id) => {
        const itemToAdd = products.find(item => item.id === id)
        setCartItems(prevItems => {
           return [...prevItems,itemToAdd]
        })
      }

console.log(cartItems)

    return(
        <Provider value={{
            cartItems,
            setCartItems,
            removeFromCart,
            addToCart,
            products,
            setProducts
        }}>
          {props.children}
        </Provider>
    )
}


export {ContextProvider,Consumer}