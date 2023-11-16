import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard></AddressCard>
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3}></OrderTracker>
      </div>

      <Grid container className="space-y-5">
        {[1, 1, 1, 1].map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex  items-center space-x-4">
                <img
                  className="w-[8rem] h-[10rem] object-cover object-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmcQaGjBxt9sKwdQdYeB7cX8UR1W5C6RVYQ&usqp=CAU"
                  alt=""
                ></img>
                <div space-y-2 ml-5>
                  <p>Men Slim Mid Rise Black Jeans</p>
                  <p>
                    <span>Color: Black</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: Levi's</p>
                  <p>₹1999</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                  // onClick={() => navigate(`/account/rate/${item.product.id}`)}
                  className="flex items-center cursor-pointer"
                >
                  <StarBorderIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid> 
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
