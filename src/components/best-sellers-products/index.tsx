import "./style.scss";
import products from "../../utils/products.json";
import SliderCarousel from "../slider-carrousel";
import ProductItem from "../product-item";

const BestSellersProducts = () => {
  return (
    <div className="best-sellers-products">
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
        {products.best_sellers.map((productItem) => {
          return <ProductItem product={productItem} key={productItem.title} />;
        })}
      </SliderCarousel>
    </div>
  );
};
export default BestSellersProducts;
