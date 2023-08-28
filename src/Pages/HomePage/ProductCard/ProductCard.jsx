import React, { useContext } from "react";
import "./ProductCard.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import propTypes from "prop-types";
import formatCurrency from "../../../utils/formatCurrency";
import AppContext from "../../../contexts/AppContext";

import { useNavigate } from "react-router-dom";

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  const { cartItens, setCartItens } = useContext(AppContext);
  const handleAddCart = () => {
    setCartItens([...cartItens, data]);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/SearchResults/${data.id}`, { state: { selectedItem: data } });
  };

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className="card__image"
        onClick={handleClick}
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, "BRL")}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button
        type="button"
        className="button__add-card"
        onClick={handleAddCart}
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}
export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
