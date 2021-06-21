import React, { useEffect, useState } from "react";
import "./HeroSearch.css";
import md5 from "js-md5";
import MarvelIcon from "../../imgs/marvel-icon.jpg";
import Characters from "../Characters/Characters.js";
import Comics from "../Comics/Comics.js";
import FavoritesList from "../FavoritesList/FavoritesList";
import Deadpool from "../../imgs/deadpool.png";

export default function HeroSearch(props) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [comics, setComics] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [showFavoriteList, setShowFavoriteList] = useState(false);
  const [localData, setLocalData] = useState([]);

  let marvelApiKey = "f185f4a73012178c4360033e956d3835";
  let marvelPrivateKey = "4ef9a1650c885ad0d051cdb44d307eaaa4e8e9f1";
  let marvelApiUrl = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${inputSearch}&apikey=${marvelApiKey}`;
  let marvelComicApi = `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${inputSearch}&orderBy=onsaleDate&apikey=${marvelApiKey}`;

  useEffect(() => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setLocalData(favorites);

    async function getRandomCharacter() {
      const ts = Number(new Date());
      const hash = md5.create();
      hash.update(ts + marvelPrivateKey + marvelApiKey);
      try {
        setCharacters([]);
        setComics([]);
        setIsLoading(true);
        const response = await (
          await fetch(
            `https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=modified&limit=100&apikey=${marvelApiKey}&hash=${hash.hex()}`
          )
        ).json();

        const heroes = response.data.results;

        let randomHero = [];
        for (let i = 0; i < 8; i++) {
          const randomCharacter =
            heroes[Math.floor(Math.random() * heroes.length)];
          randomHero.push(randomCharacter);
        }

        setIsLoading(false);
        setCharacters(randomHero);
      } catch (error) {
        console.log(error);
      }
    }
    getRandomCharacter();
  }, []);

  const fetchData = async () => {
    setCharacters([]);
    setComics([]);
    setIsLoading(true);
    const response = await (await fetch(marvelApiUrl)).json();
    setCharacters(response.data.results);
    setIsLoading(false);
    setComics([]);
    setInputSearch("");
  };

  const searchByComic = async () => {
    if (!inputSearch) {
      alert("Please type a word in the search box");
    } else {
      setCharacters([]);
      setComics([]);
      setIsLoading(true);
      const response = await (await fetch(marvelComicApi)).json();
      setCharacters([]);
      setIsLoading(false);
      setComics(response.data.results);
      setInputSearch("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputSearch) {
      alert("Please type a word in the search box");
    } else {
      fetchData();
    }
  };

  const onClickFavorite = (element, action) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    console.log(favorites);
    if (action === "add") {
      favorites = [...favorites, element];
    } else if (action === "remove") {
      favorites = favorites.filter((elem) => elem.id !== element.id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setLocalData(favorites);
  };

  return (
    <div className="heroes">
      {showFavoriteList && (
        <FavoritesList
          favoriteList={localData}
          setShowFavoriteList={setShowFavoriteList}
          onClickFavorite={onClickFavorite}
        />
      )}
      <nav>
        <div className="nav-left">
          <div>
            <img
              src={MarvelIcon}
              alt="Marvel Icon"
              className="marvel-book-icon"
            />
          </div>
          <div>
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                id="photo-search"
                type="search"
                placeholder="search a word"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
              ></input>{" "}
              <button
                className="form-button search-button"
                type="submit"
                value="Search"
              >
                By Hero
              </button>
              <button
                className="form-button search-button"
                type="button"
                onClick={() => searchByComic()}
                value="Search"
              >
                By Comic
              </button>
            </form>
          </div>
        </div>
        <div className="favorites-container">
          <button
            className="favorites-button"
            type="submit"
            value="Search"
            onClick={() => setShowFavoriteList(true)}
          >
            <i className="ph-star-fill favorites-list-star"></i>
          </button>
        </div>
      </nav>
      <section className="heroes-section">
        {isLoading && (
          <div className="loading-text">
            Loading{" "}
            <span className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </span>
            <div>
              <img className="deadpool-loading" src={Deadpool} alt="" />
            </div>
          </div>
        )}
        <Comics
          comics={comics}
          localData={localData}
          onClickFavorite={onClickFavorite}
        />
        <Characters
          localData={localData}
          characters={characters}
          onClickFavorite={onClickFavorite}
        />
      </section>
    </div>
  );
}
