import React, { useState } from "react";
import RatingIcon from "./RatingIcon";

const RatingWidget = ({ setRatingValue }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };

  const onMouseLeave = () => {
    setHoverRating(0);
  };

  const onSaveRating = (index) => {
    setRating(index);
    setRatingValue(index);
  };

  return (
    <div className="box-rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <RatingIcon
          index={index}
          key={index}
          rating={rating}
          hoverRating={hoverRating}
          onSaveRating={onSaveRating}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </div>
  );
};

export default RatingWidget;
