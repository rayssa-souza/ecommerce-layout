import React from "react";
import { useState } from "react";
import IconButton from "../icon-button";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./style.scss";

const FavoriteProductButton = () => {
  const [isfavorite, setIsfavorite] = useState(false);

  const handleisFavorite = () => {
    setIsfavorite(!isfavorite);
  };

  return (
    <div className="favorite-products">
      <IconButton
        icon={isfavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        color={isfavorite ? "red" : undefined}
        onClick={handleisFavorite}
      />
    </div>
  );
};

export default FavoriteProductButton;
