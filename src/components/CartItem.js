import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch=useDispatch()
  const incrementCartItem=()=>{
    dispatch((cartActions.addToCart({
      name,
    id,
    price,
    })))
  }
  const decrementCartItem=()=>{
    dispatch((cartActions.removeFromCart(id)))
  }
  console.log(name)
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button onClick={decrementCartItem} className="cart-actions" >
        -
      </button>
      <button onClick={incrementCartItem} className="cart-actions" >
        +
      </button>
    </div>
  );
};

export default CartItem;
