import React from "react";

import Header from "./Header/Header";
import Products from "./Products/Products";
import Provider from "../../contexts/Provider";
import Cart from "./Cart/Cart";

function PaginaPrincipal() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
}

export default PaginaPrincipal;
