import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { default as PaginaPrincipal } from "../Pages/HomePage/index";
import { default as PaginaResultados } from "../Pages/SearchResults/index";

export const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/SearchResults/:id" element={<PaginaResultados />} />
      </Routes>
    </Router>
  );
};
