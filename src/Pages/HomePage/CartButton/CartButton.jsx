import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartButton.css";
import AppContext from "../../../contexts/AppContext";

function CartButton() {
  const { cartItens, isCartVisible, setIsCartVisible } = useContext(AppContext);

  const openClose = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <button type="button" className="cart__button" onClick={openClose}>
      <AiOutlineShoppingCart />

      {cartItens.length > 0 && (
        <span className="cart-status">{cartItens.length}</span>
      )}
    </button>
  );
}
export default CartButton;
