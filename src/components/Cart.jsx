import React, { useContext, useEffect } from "react";
import { Context } from "./Context/Context";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Aos from "aos";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    isDelHovered,
    handleDelMouseEnter,
    handleDelMouseLeave,
    delRef,
    handleButtonHover,
    buttonHovered
  } = useContext(Context);

  let id = 0;

  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          <h1 data-aos="slide-down" style={{ textAlign: "center" }}>
            Cart Items
          </h1>
          <div data-aos="fade-up" className="product">
            {cartItems.map((item) => (
              <Card key={++id} className="card" sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title={item.name}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={item.imgUrl}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                  onMouseEnter={handleButtonHover}
                    // onMouseEnter={handleDelMouseEnter}
                    // omMouseLeave={handleDelMouseLeave}
            
                    onClick={(e) => removeFromCart(e, item.id)}
                    sx={{ marginLeft: "auto" }}
                    variant="contained"
                    color="error"
                  >
                    <div  >
                    {!isDelHovered ? (
                    
                      <DeleteOutlineOutlinedIcon
                      ref={delRef}
                        onClick={(e) => removeFromCart(e, item.id)}
                      />
                    ) : (
                      <DeleteIcon
                      // ref={delRef}
               
                        onClick={(e) => removeFromCart(e, item.id)}
                      />
                      )}
                      </div>
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>No items for now</h1>
      )}
    </div>
  );
}

export default Cart;
