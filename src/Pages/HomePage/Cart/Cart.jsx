import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../../contexts/AppContext";
import formatCurrency from "../../../utils/formatCurrency";

function Cart() {
  const { cartItens, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItens.reduce((acumulador, item) => {
    return item.price + acumulador;
  }, 0);

  return (
    <section className={`cart ${isCartVisible ? "cart--active" : ""}`}>
      <div className="cart-itens">
        {cartItens.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <div className="cart-resume">
        Total da compra: {formatCurrency(totalPrice, "BRL")}
      </div>
    </section>
  );
}
export default Cart;
