import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Main = lazy(() => import("../pages/main"));
const Catalog = lazy(() => import("../pages/catalog"));
const Product = lazy(() => import("../pages/product"));

console.log({
  Main,
  Product,
  Catalog,
});
const AppRoutes = () => {
  return (
    <div>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/:category" element={<Catalog />} />
          <Route path="/product/:product" element={<Product />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRoutes;
