import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import ScrollToTop from "./components/scroll-to-top";
import "./assets/styles/reset.scss";
import Header from "./components/header";
import Container from "./components/container";
import Footer from "./components/footer";
import { EcommerceProvider } from "./contexts/ecommerce-context";

function App() {
  return (
    <EcommerceProvider>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes />
        <Footer />
      </BrowserRouter>
    </EcommerceProvider>
  );
}

export default App;
