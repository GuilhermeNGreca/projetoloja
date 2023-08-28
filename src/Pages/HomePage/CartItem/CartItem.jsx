import React, { useContext } from "react";
import { BsCartDashFill } from "react-icons/bs";
import "./CartItem.css";
import formatCurrency from "../../../utils/formatCurrency";
import propTypes from "prop-types";
import AppContext from "../../../contexts/AppContext";

import { Link } from "react-router-dom";

function CartItem({ data }) {
  const { id, thumbnail, title, price } = data;
  const { cartItens, setCartItens } = useContext(AppContext);

  const handleRemoveItem = () => {
    const updatedItens = cartItens.filter((item) => item.id !== id);
    setCartItens(updatedItens);
  };

  return (
    <section className="cart-item">
      <Link to={"/SearchResults/:thumbnail_id"}>
        <img
          src={thumbnail}
          alt="Imagem do Produto"
          className="cart-item-image"
        />
      </Link>

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>

        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}
export default CartItem;

CartItem.propTypes = {
  data: propTypes.object,
}.isRequired;
