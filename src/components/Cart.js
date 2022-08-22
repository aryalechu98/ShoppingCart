import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const dispatch=useDispatch()
  const cartHandler=()=>{
    dispatch((cartActions.setShowCart()))
  }
  const quantity = useSelector(state=>state.cart.totalQuantity);
  return (
    <div className="cartIcon">
      <h3 onClick={cartHandler}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
