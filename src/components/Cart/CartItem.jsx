import React from "react";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../State/Store";
import { useNavigate } from "react-router-dom";
import { addItemToCart, findCart, removeCartItem, updateCartItem } from "../State/Cart/Action";

export default function CartItem({ item }) {
  const cart = store.getState().cart;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdateCartItem = (value) => {
    if (value === -1 && item.quantity === 1) {
      handleRemoveCartItem();
    }else{
      const reqData = { 
        cartItemId: item.id,
        quantity: item.quantity + value
      };
      dispatch(updateCartItem({reqData})); // Pass data directly
    }

  //   const reqData = {
  //     userEmail : email,
  //     cartItem:{
  //         foodId: item.id,
  //         quantity: ,
  //     },
  // };
  
  // console.log(item.id);
    const email = sessionStorage.getItem("email");
    
    dispatch(findCart(email));
  };
  
  const handleRemoveCartItem = () => {
    const userEmail = sessionStorage.getItem("email");
    dispatch(removeCartItem(item.id, userEmail));
  };
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src={item.food.images[0]}
            alt=""
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>{item.food.name}</p>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton
                  color="primary"
                  onClick={() => handleUpdateCartItem(-1)}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className="w-5 h-5 text-xs">{item.quantity}</div>
                <IconButton
                  color="primary"
                  onClick={() => handleUpdateCartItem(1)}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p>₹{item.totalPrice}</p>
        </div>
      </div>
    </div>
  );
}
