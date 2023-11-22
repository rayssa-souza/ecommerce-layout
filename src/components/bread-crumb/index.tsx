import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";
import clsx from "clsx";
import "./style.scss";
import useMediaQuery from "../../hooks/useMediaQuery";
import { iCategory } from "../../@types/category";

interface Props {
  category: iCategory;
  subCategory?: iCategory;
  product?: iCategory;
}
const BreadCrumb = ({ category, subCategory, product }: Props) => {
  const location = useLocation();
  const { isDesktop } = useMediaQuery();

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
            to={category.url}
            title={category.title}
            className={clsx({
              "breadcrumb-active": location.pathname === `${category.url}`,
              "breadcrumb-not-active": true,
            })}
          >
            <span>{category.title}</span>
          </Link>

          {isDesktop && (
            <>
              <div className="breadcrumb-arrow">
                <MdOutlineArrowRight />
              </div>

              <Link
                to={`${category.url}/${subCategory.url}`}
                title={subCategory.title}
                className={clsx({
                  "breadcrumb-active":
                    location.pathname === `${category.url}/${subCategory.url}`,
                  "breadcrumb-not-active": true,
                })}
              >
                <span>{subCategory.title}</span>
              </Link>
            </>
          )}
        </>
      ) : (
        <Link
          to={`${category.url}`}
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
