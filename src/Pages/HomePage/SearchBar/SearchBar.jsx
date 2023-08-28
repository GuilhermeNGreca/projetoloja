import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";

import fetchProducts from "../../../api/fetchProducts";
import "./SearchBar.css";
import AppContext from "../../../contexts/AppContext";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        type="search"
        placeholder="Buscar produtos"
        className="search__input"
        required
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}
export default SearchBar;
