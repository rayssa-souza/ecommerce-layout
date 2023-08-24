import React from "react";
import { useParams } from "react-router-dom";
import catalog from "../../utils/catalog.json";
import GridContainer from "../../components/grid-container";
import GridItem from "../../components/grid-item";
import { Link } from "react-router-dom";
import FavoriteProductButton from "../../components/favorite-product-button";
import "./style.scss";
import Container from "../../components/container";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Catalogue = () => {
  const { category, subcategory } = useParams();

  const key = subcategory ? subcategory : category;
  const productsCategory = catalog[key];

  return (
    <div className="catalogue">
      <Header />

      <Container>
        <GridContainer>
          {productsCategory.products.map((item) => {
            return (
              <GridItem
                xs={"50%"}
                sm={"50%"}
                lg={"25%"}
                spacing={5}
                key={item.id}
              >
                <div className="catalogue-products-img">
                  <Link to="" title={item.title}>
                    <img alt="product-img" src={item.url} />
                  </Link>
                  <div className="catalogue-products-text">
                    <div className="catalogue-title-wrapper">
                      <h2>
                        <Link to="" title={item.title}>
                          {item.title}
                        </Link>
                      </h2>
                      <FavoriteProductButton />
                    </div>
                    <h3 className="catalogue-price">{`$ ${item.price}`}</h3>
                  </div>
                </div>
              </GridItem>
            );
          })}
        </GridContainer>
        <Footer />
      </Container>
    </div>
  );
};

export default Catalogue;
