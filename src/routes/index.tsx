import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/404";
const Main = lazy(() => import("../pages/main"));
const Catalog = lazy(() => import("../pages/catalog"));
const Product = lazy(() => import("../pages/product"));
const Favorites = lazy(() => import("../pages/favorites"));
const Cart = lazy(() => import("../pages/cart"));

const AppRoutes = () => {
  return (
    <div>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop/:category" element={<Catalog />} />
          <Route path="/shop/:category/:subcategory" element={<Catalog />} />
          <Route path="/p/:productId" element={<Product />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRoutes;
