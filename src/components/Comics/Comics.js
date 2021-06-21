import React from "react";
import "./Comics.css";

export default function Comics(props) {
  const { comics, onClickFavorite, localData } = props;

  const ComicList = () => {
    return comics.map((comic, i) => {
      const isFavorite = localData?.find((e) => comic.id === e.id);

      return (
        <div key={`c-${i}`}>
          <div>
            <p className="comic-title">{comic.title}</p>
            <div
              onClick={() =>
                onClickFavorite(comic, isFavorite ? "remove" : "add")
              }
            >
              {!isFavorite && <i className="ph-star non-fav-star"></i>}
              {isFavorite && <i className="ph-star-fill fav-star"></i>}
            </div>
            <img
              src={`${comic.thumbnail.path}/standard_medium.${comic.thumbnail.extension}`}
              alt=""
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="comic-cards">
      <ComicList />
    </div>
  );
}
