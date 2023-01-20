import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { Consumer } from "./Context/Context";

export default function Product() {

  const {
    products,
    addToCart,
    
  } = useContext(Consumer);



  let id = 0;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <div data-aos="fade-up" className="product">
        {products.map((prod) => (
          <Card key={++id} className="card" sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={prod.name}
            />
            <CardMedia
              component="img"
              height="194"
              image={prod.imgUrl}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography
                variant="body2"
                sx={{ color: "GrayText", fontWeight: "bold" }}
              >{`${prod.price}-PKR`}</Typography>
              <Button
                onClick={(e) => addToCart(e, prod.id)}
                sx={{ marginLeft: "auto" }}
                variant="contained"
                color="success"
              >
                Add
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
     
    </div>
  );
}
