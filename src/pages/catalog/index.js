import React from "react";
import { useParams, Link } from "react-router-dom";
import catalog from "../../utils/catalog.json";
import productDetail from "../../utils/productDetails.json";
import GridContainer from "../../components/grid-container";
import GridItem from "../../components/grid-item";
import FavoriteProductButton from "../../components/favorite-product-button";
import Container from "../../components/container";
import BreadCrumb from "../../components/bread-crumb";

import "./style.scss";

const Catalogue = () => {
  const { category, subcategory } = useParams();

  const key = subcategory ? subcategory : category;
  const productsCategory = catalog[key];

  return (
    <div className="catalogue">
      <Container>
        {productsCategory.parentCategory ? (
          <BreadCrumb
            category={productsCategory.parentCategory}
            subCategory={{
              title: productsCategory.title,
              url: productsCategory.id,
            }}
          />
        ) : (
          <BreadCrumb
            category={{
              title: productsCategory.title,
              url: productsCategory.id,
            }}
          />
        )}
        <div className="catalogue-span">
          <span>{productsCategory.title}</span>
        </div>
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
                  <Link to={item.url} title={item.title}>
                    <img alt="product-img" src={item.image} />
                  </Link>
                  <div className="catalogue-products-text">
                    <div className="catalogue-title-wrapper">
                      <h2>
                        <Link to={item.url} title={item.title}>
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
      </Container>
    </div>
  );
};

export default Catalogue;
