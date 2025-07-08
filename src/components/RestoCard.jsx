import React from "react"; // Make sure React is imported if this is a separate file
import {IMG_CDN_URL} from "../utils/constants"

const RestoCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId} // Corrected line
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{sla?.slaString}</h3>
      <h3>{avgRating} stars</h3>
    </div>
  );
};

export default RestoCard;