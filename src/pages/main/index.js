import React from "react";
import Header from "../../components/header";
import "./style.scss";
import Section from "../../components/section";
import Container from "../../components/container";
import Footer from "../../components/footer";
import BestSellersProducts from "../../components/best-sellers-products";
import PopularProducts from "../../components/popular-products";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Container>
        <img
          className="main-banner"
          src={
            process.env.PUBLIC_URL + "/images/ordinary-imgs/ordinary-banner.png"
          }
          alt="img-banner"
        />
        <Section text={"BEST SELLERS"} />
        <p className="main-paragraph">
          All of our products are created with love and care for your skin to
          help you achieve healthy and beautiful skin.
        </p>
        <BestSellersProducts />
        {/* <CatlogNavLinks /> */}
        <Section text={"POPULAR"} />

        <PopularProducts />
        <Footer />
      </Container>
    </div>
  );
};

export default Main;
