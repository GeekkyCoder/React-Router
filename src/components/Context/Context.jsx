import React, { createContext, useState, useRef, useEffect } from "react";
import {
  onAuthUserStateChange,
  createUserDocumentFromAuth,
} from "../../utils/firebase/utils";

import productItems from "../produtsArray";
const Context = createContext();

function ContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(productItems);
  const [isItemsAdded, setIsItemsAdded] = useState(false);
  const [isDelHovered, setIsDelHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const delRef = useRef();

  const removeFromCart = (e, id) => {
    setCartItems((prevCartItem) => {
      return prevCartItem.filter((item) => item.id !== id);
    });
  };

  const handleButtonHover = () => {
    setButtonHovered((prevStat) => !prevStat);
  };

  const addToCart = (e, id) => {
    const itemToAdd = products.find((item) => item.id === id);
    setCartItems((prevItems) => {
      return [...prevItems, itemToAdd];
    });
    setIsItemsAdded(true);
  };

  function handleDelMouseEnter() {
    console.log("entered");
    setIsDelHovered(true);
  }

  function handleDelMouseLeave() {
    console.log("left");
    setIsDelHovered(false);
  }

  useEffect(() => {
    if (delRef.current) {
      console.log(delRef.current);
      delRef.current.addEventListener("onmouseenter", handleDelMouseEnter);
      delRef.current.addEventListener("onmouseleave", handleDelMouseLeave);

      // return () => {
      //   delRef.current.removeEventListener("onmouseenter", handleDelMouseEnter)
      //   delRef.current.removeEventListener("onmouseleave", handleDelMouseEnter)
      // }
    }
  }, [buttonHovered]);

  useEffect(() => {
    const unsub = onAuthUserStateChange((user) => {
      console.log(user)
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsub;
  }, []);

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        removeFromCart,
        addToCart,
        products,
        isItemsAdded,
        setIsItemsAdded,
        handleDelMouseLeave,
        handleDelMouseEnter,
        isDelHovered,
        delRef,
        handleButtonHover,
        buttonHovered,
        currentUser,
        setCurrentUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
