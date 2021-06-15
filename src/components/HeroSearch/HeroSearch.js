import React, { useEffect, useState } from "react";
import "./HeroSearch.css";
import md5 from "js-md5";
import Characters from "../Characters/Characters.js";
import Comics from "../Comics/Comics.js";

export default function HeroSearch() {
  let [characters, setCharacters] = useState([]);
  let [comics, setComics] = useState([]);
  let [inputSearch, setInputSearch] = useState("");

  let marvelApiKey = "f185f4a73012178c4360033e956d3835";
  let marvelPrivateKey = "4ef9a1650c885ad0d051cdb44d307eaaa4e8e9f1";
  let marvelApiUrl = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${inputSearch}&apikey=${marvelApiKey}`;
  let marvelComicApi = `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${inputSearch}&orderBy=onsaleDate&apikey=${marvelApiKey}`

  useEffect(() => {
    async function getRandomCharacter() {
      const ts = Number(new Date());
      const hash = md5.create();
      hash.update(ts + marvelPrivateKey + marvelApiKey);
      try {
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
        setCharacters(randomHero);
      } catch (error) {
        console.log(error);
      }
    }

    getRandomCharacter();
  }, []);

  const fetchData = async () => {
    const response = await (await fetch(marvelApiUrl)).json();

    setCharacters(response.data.results);
    setComics([]);
    console.log(response.data.results);
  };

  const searchByComic = async () => {

    const response = await (await fetch(marvelComicApi)).json();
    setCharacters([]);
    setComics(response.data.results);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const saveSearch = () => {
    if (inputSearch) {
      let favorites = [];
      const favoriteList = JSON.parse(localStorage.getItem("favorites"));

      if (Array.isArray(favoriteList) && favoriteList.length > 0) {
        favorites = [...favoriteList, inputSearch];
      } else {
        favorites = [inputSearch];
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  return (
    <div className="heroes">
      <section>
        <h2>
          <label id="search-text" htmlFor="photo-search">
            Which hero do you need?
          </label>
        </h2>
        <form className="search-form" onSubmit={handleSubmit}>
          <div>
            <input
              id="photo-search"
              type="search"
              placeholder="search a word"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            ></input>{" "}
            <button
              className="form-button save-search-button"
              type="button"
              value="Search"
              onClick={() => saveSearch()}
            >
              ❤
            </button>
          </div>
          <div>
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
          </div>
        </form>
      </section>
      <section>
        <Comics comics={comics} />
        <Characters characters={characters} />
      </section>
    </div>
  );
}
