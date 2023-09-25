import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";
import "./style.scss";

const Ratings = ({ rating }) => {
  const starRating = () => {
    if (rating < 4.5) {
      return (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
      );
    }
    if (rating > 4.5 && rating <= 4.9) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
        </>
      );
    }
    if (rating === 5.0) {
      return (
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
    }
  };
  return (
    <div className="ratings">
      <div className="ratings-stars">{starRating()}</div>
      <div>
        <span>
          {rating} ({Math.floor(Math.random() * 200)})
        </span>
      </div>
    </div>
  );
};
export default Ratings;
