import { useParams } from "react-router-dom";
import catalog from "../../utils/catalog.json";
import GridContainer from "../../components/grid-container";
import GridItem from "../../components/grid-item";
import Container from "../../components/container";
import BreadCrumb from "../../components/bread-crumb";
import "./style.scss";
import ProductItem from "../../components/product-item";
import { iCategoryDetail } from "../../@types/category";

const Catalogue = () => {
  const { category, subcategory } = useParams();
  const key = subcategory ? subcategory : category;
  const productsCategory: iCategoryDetail = catalog[key as string];

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
                <ProductItem product={item} />
              </GridItem>
            );
          })}
        </GridContainer>
      </Container>
    </div>
  );
};

export default Catalogue;
