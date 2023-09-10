import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";
import clsx from "clsx";
import "./style.scss";
import useMediaQuery from "../../hooks/useMediaQuery";

const BreadCrumb = ({ category, subCategory, product }) => {
  const location = useLocation();
  // const { isDesktop, isTablet, isMobile } = useMediaQuery();

  return (
    <div className="breadcrumb">
      <Link
        to="/"
        title="home"
        className={clsx({
          "breadcrumb-active": location.pathname === `/`,
          "breadcrumb-not-active": true,
        })}
      >
        <span>Home</span>
      </Link>
      <div className="breadcrumb-arrow">
        <MdOutlineArrowRight />
      </div>

      {subCategory ? (
        <>
          <Link
            to={`/shop${category.url}`}
            title={category.title}
            className={clsx({
              "breadcrumb-active": location.pathname === `/shop${category.url}`,
              "breadcrumb-not-active": true,
            })}
          >
            <span>{category.title}</span>
          </Link>
          <div className="breadcrumb-arrow">
            <MdOutlineArrowRight />
          </div>

          <Link
            to={`/shop${category.url}/${subCategory.url}`}
            title={subCategory.title}
            className={clsx({
              "breadcrumb-active":
                location.pathname === `/shop${category.url}/${subCategory.url}`,
              "breadcrumb-not-active": true,
            })}
          >
            <span>{subCategory.title}</span>
          </Link>
        </>
      ) : (
        <Link
          to={`/shop${category.url}`}
          title={category.title}
          className={clsx({
            "breadcrumb-active": location.pathname.includes(`${category.url}`),
            "breadcrumb-not-active": true,
          })}
        >
          <span>{category.title}</span>
        </Link>
      )}
      {product && (
        <>
          <div className="breadcrumb-arrow">
            <MdOutlineArrowRight />
          </div>
          <Link
            to={`/p/${product.url}`}
            title={product.title}
            className={clsx({
              "breadcrumb-active": location.pathname.includes(`${product.url}`),
              "breadcrumb-not-active": true,
            })}
          >
            <span>{product.title}</span>
          </Link>
        </>
      )}
    </div>
  );
};
export default BreadCrumb;

// v => code the bread crumb component with category, subcategory and product;
// v => finish off the catalog component through inserting the products category on top of the div and addind link to the "hair and body" title.
// ... => code the product page using the productsDetail json.
// v => Fill out the productsDetail.json with the products info from the catalog. Fetch info from the ordinary website.
//=> Call the bs and pop component on the product page.
//=> code the favorite products behavior.(context ansd local storage). And move the icon inside the image on mobile version.
//=> code de addtocart component. (context and local storage)
// v => when change de path, scroll to top of the page.
