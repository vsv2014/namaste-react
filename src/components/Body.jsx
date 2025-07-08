  import RestoCard from "./RestoCard";
  import resList from "../utils/mockData";
  import { useState } from "react";

  const Body = () => {
    // CORRECTED: Removed the extra curly brace at the beginning

   

    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setlistOfRestaurants(filteredList);
          }}>Top-Rated Restuarants</button>
        </div>

     
          <div className="toggle">
          <button className="toggle-btn" onClick={() => {
          }}>Top-Rated Restuarants</button>
        </div>


        <div className="rest-container">
          {listOfRestaurants.map((restaurant) => (
            <RestoCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;
