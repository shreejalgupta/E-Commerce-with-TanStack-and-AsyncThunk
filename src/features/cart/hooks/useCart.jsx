import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../state/cartSlick";
import { useNavigate } from "react-router";
// import { store } from "../../../app/store";

export const useCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const getCartItem = JSON.parse(localStorage.getItem('cartItem')) || []
  const getCartItem = useSelector((store) => store.cartItem.cartItem);
  console.log("useCart -> ", getCartItem);
  // useEffect(()=> {
  //         dispatch(addToCart(getCartItem))
  // }, [])

  const handleAddToCart = (data) => {
    console.log(data);
    let saveItem = [...getCartItem, { ...data, qty: 1 }];
    dispatch(addToCart(saveItem));
    localStorage.setItem("cartItem", JSON.stringify(saveItem));
  };

  const handleRemove = (id) => {
    
    let saveItem = getCartItem.filter(val => val.id !== id)
    dispatch(addToCart(saveItem))
    localStorage.setItem("cartItem", JSON.stringify(saveItem));
  };

  const isInCart = (id) => {
    let isIn = getCartItem.some((elem) => elem.id === id);
    return isIn;
  };

  const handleQtyChange = (id, delta) => {
    let saveItem = getCartItem.map(val => {
        return val.id === id ? {...val, qty: val.qty + delta } : val
    })
    dispatch(addToCart(saveItem))
    localStorage.setItem("cartItem", JSON.stringify(saveItem));
    
  }

  return {
    handleAddToCart,
    isInCart,
    navigate,
    handleRemove,
    handleQtyChange,
    getCartItem
  };
};
