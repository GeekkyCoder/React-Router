import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { Context } from "./Context/Context";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navigation() {
  const { cartItems, isItemsAdded } = useContext(Context);

  return (
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
      </ul>
    </div>
  );
}

export default Navigation;
