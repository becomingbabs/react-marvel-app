import React, { useState, useEffect } from "react";
import "./FavoritesList.css";

export default function FavoritesList(props) {
  const [ favoriteList, setFavoriteList ] = useState([])
  const { setShowFavoriteList } = props 

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));

    setFavoriteList(favorites)
  }, []);

  return (
    <div className="favorites-modal">
      <div className="button-block">
        <button className="popup-x" onClick={()=> setShowFavoriteList(false)}> 
            X 
        </button>
      </div>
        <ul className="favorites-list">
          {favoriteList.map((favorite, i) => (
            <li className="favorites-titles" key={`f-${i}`}>{favorite}</li>
          ))}
        </ul>
    </div>
  );
}
