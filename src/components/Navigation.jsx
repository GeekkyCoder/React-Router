import React, { useContext,useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { Context } from "./Context/Context";
import { Outlet } from "react-router-dom";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// import {getRedirectResult} from "firebase/auth"

import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth
} from ".././utils/firebase/utils";

function Navigation() {
  const { cartItems } = useContext(Context);

  // const handleSignInWithGoogle = async () => {
  //   const { user } = await signInWithGooglePopUp();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

// useEffect(()=> {
//    const handleRedirect = async () => {
//     const response = await getRedirectResult(auth)
//    if(response){
//     const userDocRef = await createUserDocumentFromAuth(response.user);
//    }
//    }
//    handleRedirect()
// },[])

  return (
    <div>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/">Hompage</NavLink>
          </li>
          <li>
            <NavLink to="/header">Header</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/sidebar">Sidebar</NavLink>
          </li>
          <li>
            {cartItems.length > 0 && (
              <Typography data-aos="flip-up" sx={{ color: "rgb(99 102 241)" }}>
                {cartItems.length}
              </Typography>
            )}
            <NavLink to="/cart">
              {!cartItems.length ? (
                <AddShoppingCartIcon htmlColor="black" />
              ) : (
                <ShoppingCartIcon htmlColor="black" />
              )}
            </NavLink>
          </li>
          <li>
           <NavLink to={"/signup"}>Sign up</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Navigation;
