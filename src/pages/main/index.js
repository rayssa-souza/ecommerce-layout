import React from "react";
import Header from "../../components/header";
import "./style.scss";
import Section from "../../components/section";
import Container from "../../components/container";
import Footer from "../../components/footer";
import BestSellersProducts from "../../components/best-sellers-products";
import PopularProducts from "../../components/popular-products";
import Sliders from "../../components/slider-carrousel";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Container>
        <Sliders
          settings={{
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            pauseOnHover: true,
          }}
        >
          <img
            className="main-banner"
            src={
              process.env.PUBLIC_URL +
              "/images/ordinary-imgs/ordinary-banner.png"
            }
            alt="img-banner"
          />
          <img
            className="main-banner"
            src={
              process.env.PUBLIC_URL +
              "/images/ordinary-imgs/ordinary-banner.png"
            }
            alt="img-banner"
          />
          <img
            className="main-banner"
            src={
              process.env.PUBLIC_URL +
              "/images/ordinary-imgs/ordinary-banner.png"
            }
            alt="img-banner"
          />
        </Sliders>
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
