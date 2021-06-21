import React from "react";
import "./FavoritesList.css";

export default function FavoritesList(props) {
  const { setShowFavoriteList, favoriteList } = props

  console.log(favoriteList)

  return (
    <div className="favorites-modal">
      <div className="button-block">
        <button className="popup-x" onClick={()=> setShowFavoriteList(false)}> 
            X 
        </button>
      </div>
        <ul className="favorites-list">
          {favoriteList.map((favorite, i) => (
            <li className="favorites-titles" key={`f-${i}`}>{favorite.name || favorite.title}</li>
          ))}
        </ul>
    </div>
  );
}
