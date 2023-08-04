import React from "react";
import Header from "../../components/header";
import "./style.scss";
import Section from "../../components/section";
import Container from "../../components/container";
import Footer from "../../components/footer";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <img
        className="main-banner"
        src="https://place-hold.it/1264x642"
        alt="img-banner"
      />
      <Container>
        <Section text={"BEST SELLERS"} />
        {/* <BestSellers /> */}
        <p className="main-paragraph">
          All of our products are created with love and care for your skin to
          help you achieve healthy and beautiful skin.
        </p>
        {/* <CatlogNavLinks /> */}
        <Section text={"POPULAR"} />
        <Footer />
      </Container>
    </div>
  );
};

export default Main;
