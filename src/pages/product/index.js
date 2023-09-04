import React from "react";
import { useParams } from "react-router-dom";
import productDetails from "../../utils/productDetails.json";
import "./style.scss";
import Container from "../../components/container";

const ProductPage = () => {
  const { productId } = useParams();
  const productSlug = productDetails[productId];

  return (
    <div className="product-page">
      <Container>
        {productSlug.image.map((imgItem) => {
          return <img src={imgItem} alt="product-img" />;
        })}
        <div>{productSlug.title}</div>
      </Container>
    </div>
  );
};

export default ProductPage;
