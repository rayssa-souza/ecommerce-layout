import React from "react";
import { useParams } from "react-router-dom";

import productDetails from "../../utils/productDetails.json";
import Container from "../../components/container";
import GridContainer from "../../components/grid-container";
import GridItem from "../../components/grid-item";
import ProductDetailSlider from "../../components/product-detail-slider";
import BreadCrumb from "../../components/bread-crumb";
import Section from "../../components/section";
import "./style.scss";
import AccordionInfo from "../../components/accordion-info";
import TabInfo from "../../components/tab-info";
import useMediaQuery from "../../hooks/useMediaQuery";
import BestSellersProducts from "../../components/best-sellers-products";
import PopularProducts from "../../components/popular-products";

const ProductPage = () => {
  const { productId } = useParams();
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  const productInfo = productDetails[productId];

  return (
    <div className="product-page">
      <Container>
        {productInfo.subcategory ? (
          <BreadCrumb
            category={productInfo.parentCategory}
            subCategory={productInfo.subcategory}
            product={{ title: productInfo.title, url: productInfo.id }}
          />
        ) : (
          <BreadCrumb
            category={productInfo.parentCategory}
            product={{ title: productInfo.title, url: productInfo.id }}
          />
        )}
        <GridContainer>
          <GridItem xs={"100%"} sm={"100%"} lg={"40%"}>
            <ProductDetailSlider images={productInfo.image} />
          </GridItem>
          <GridItem xs={"100%"} sm={"100%"} lg={"60%"}>
            <div className="product-page-info">
              <div className="product-page-title-and-price">
                <h1 className="product-page-title">{productInfo.title}</h1>
                <span className="product-page-price">
                  $ {productInfo.price}
                </span>
              </div>
              <div className="product-page-specs">
                {productInfo.specs.map((item) => {
                  return (
                    <div key={item.title}>
                      <span>{item.title}</span>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
              </div>
              {(isMobile || isTablet) && (
                <>
                  <AccordionInfo
                    title={"DESCRIPTION"}
                    text={productInfo.description}
                  />
                  <AccordionInfo
                    title={"ADDITIONAL INFORMATION"}
                    text={productInfo.addiotional_information}
                  />
                </>
              )}
            </div>
          </GridItem>
        </GridContainer>
        {isDesktop && (
          <TabInfo
            tab1={{
              title: "DESCRIPTION",
              text: productInfo.description,
            }}
            tab2={{
              title: "ADDITIONAL INFORMATION",
              text: "teste tes te tes te te t et",
            }}
          />
        )}
        <Section text={"BEST SELLERS"} link={`/shop/best-sellers`} />
        <BestSellersProducts />
        <Section text={"POPULAR"} link={`/shop/popular`} />
        <PopularProducts />
      </Container>
    </div>
  );
};

export default ProductPage;
