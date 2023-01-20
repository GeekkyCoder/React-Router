import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { Consumer } from "./Context/Context";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Navigation() {
  const { cartItems, productItems } = useContext(Consumer);

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
          <Typography>{cartItems.length}</Typography>
          <NavLink to="/cart">
            <AddShoppingCartIcon htmlColor="black" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
