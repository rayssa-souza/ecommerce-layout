import "./style.scss";
import products from "../../utils/products.json";
import GridItem from "../grid-item";
import GridContainer from "../grid-container";
import useMediaQuery from "../../hooks/useMediaQuery";
import SliderCarousel from "../slider-carrousel";
import ProductItem from "../product-item";

const PopularProducts = () => {
  const { isDesktop } = useMediaQuery();
  return (
    <div className="popular-products">
      {isDesktop ? (
        <GridContainer>
          {products.popular_products.map((productItem, index) => {
            return (
              <GridItem
                xs={"33.33%"}
                sm={"33.33%"}
                lg={index === 2 ? "50%" : "25%"}
                spacing={5}
                key={productItem.id}
              >
                <ProductItem product={productItem} key={productItem.title} />
              </GridItem>
            );
          })}
        </GridContainer>
      ) : (
        <SliderCarousel
          settings={{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover: true,
            arrows: false,

            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  autoplay: false,
                  swipeToSlide: true,
                },
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  autoplay: false,
                  swipeToSlide: true,
                },
              },
            ],
          }}
        >
          {products.popular_products.map((productItem) => {
            return (
              <ProductItem product={productItem} key={productItem.title} />
            );
          })}
        </SliderCarousel>
      )}
    </div>
  );
};
export default PopularProducts;
