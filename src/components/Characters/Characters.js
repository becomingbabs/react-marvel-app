import React, { useState } from "react";
import "./Characters.css";
import ComicDetails from "../ComicDetails/ComicDetails";

export default function Characters(props) {
  const { characters, onClickFavorite, localData } = props;
  let [heroDetail, setHeroDetail] = useState(false);

  const CharacterList = () => {
    return characters.map((hero, i) => {
      const isFavorite = localData?.find((e) => hero.id === e.id);

      return (
        <div key={`hero-${i}`}>
          <div className="character-block">
            <p className="hero-name">{hero.name}</p>
            <div
              className="favorite-star-char"
              onClick={() =>
                onClickFavorite(hero, isFavorite ? "remove" : "add")
              }
            >
              {!isFavorite && <i className="ph-star non-fav-star"></i>}
              {isFavorite && <i className="ph-star-fill fav-star"></i>}
            </div>
            <img
            className="character-image"
              onClick={() => setHeroDetail(hero)}
              src={`${hero.thumbnail.path}/standard_medium.${hero.thumbnail.extension}`}
              alt=""
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="character-cards">
      <CharacterList />
      {heroDetail && (
        <ComicDetails setHeroDetail={setHeroDetail} heroDetail={heroDetail} />
      )}
    </div>
  );
}
