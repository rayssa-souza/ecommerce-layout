import React from "react";
import "./style.scss";
import Section from "../../components/section";
import Container from "../../components/container";

import BestSellersProducts from "../../components/best-sellers-products";
import PopularProducts from "../../components/popular-products";
import Sliders from "../../components/slider-carrousel";
import catalog from "../../utils/catalog.json";

const Main = () => {
  const bestSellersProducts = catalog["best-sellers"];
  const popularProducts = catalog["popular"];
  return (
    <div className="main">
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
        <Section
          text={"BEST SELLERS"}
          link={`/shop/${bestSellersProducts.id}`}
        />
        <p className="main-paragraph">
          All of our products are created with love and care for your skin to
          help you achieve healthy and beautiful skin.
        </p>
        <BestSellersProducts />

        <Section text={"POPULAR"} link={`/shop/${popularProducts.id}`} />

        <PopularProducts />
      </Container>
    </div>
  );
};

export default Main;
