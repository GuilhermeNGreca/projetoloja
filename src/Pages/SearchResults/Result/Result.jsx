import React from "react";
import formatCurrency from "../../../utils/formatCurrency";
import { useLocation } from "react-router-dom";
import "./Result.css";

function PaginaResultados() {
  const location = useLocation();
  const { selectedItem } = location.state || {};

  const { title, thumbnail, price } = selectedItem;

  return (
    <div className="selected-item-page">
      <div className="result-img">
        <img
          src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
          alt="selected-product"
        />
      </div>
      <div className="result-text">
        <h2>{title}</h2>
        <p>{formatCurrency(price, "BRL")}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id natus
          impedit mollitia quia labore inventore possimus distinctio odit dicta
          quasi sunt ullam commodi temporibus, perspiciatis dolor? Voluptas eos
          tenetur qui!
        </p>
      </div>
    </div>
  );
}

export default PaginaResultados;
