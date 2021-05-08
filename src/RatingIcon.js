import React, { useMemo } from "react";
import StarIcon from "./StarIcon";

const RatingIcon = (props) => {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return "#EE9546";
    } else if (!hoverRating && rating >= index) {
      return "#EE9546";
    }
    return "lightGrey";
  }, [hoverRating, rating, index]);

  return (
    <div
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
      onClick={() => onSaveRating(index)}
    >
      <StarIcon fill={fill} />
    </div>
  );
};

export default RatingIcon;
