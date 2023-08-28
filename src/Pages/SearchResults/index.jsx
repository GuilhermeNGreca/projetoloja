import React from "react";
import Provider from "../../contexts/Provider";
import PaginaResultados from "./Result/Result";
import Cart from "../HomePage/Cart/Cart";
import Header from "../HomePage/Header/Header";

function teste() {
  return (
    <Provider>
      <Header />
      <PaginaResultados />
      <Cart />
    </Provider>
  );
}
export default teste;
