import React, { useEffect, useState} from "react";
import "./HeroSearch.css"; 
import md5 from 'js-md5';
import Characters from "../Characters/Characters.js";

export default function HeroSearch() {
    let [characters, setCharacters] = useState([]);
    let [inputSearch, setInputSearch] = useState("");
    

    let marvelApiKey = "f185f4a73012178c4360033e956d3835"; 
    let marvelPrivateKey = "4ef9a1650c885ad0d051cdb44d307eaaa4e8e9f1";
    let marvelApiUrl = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${inputSearch}&apikey=${marvelApiKey}`;
   
    
    useEffect (() => {
        async function getRandomCharacter() {
            const ts = Number(new Date());
            const hash = md5.create();
            hash.update(ts + marvelPrivateKey + marvelApiKey);
            try {
                const response = await (await fetch(
                    `https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=modified&limit=100&apikey=${marvelApiKey}&hash=${hash.hex()}`
                )).json()
                
                const heroes = response.data.results
                
                let randomHero = [];
                for (let i = 0; i < 8; i++) {
                    const randomCharacter = heroes[Math.floor(Math.random() * heroes.length)];
                   randomHero.push(randomCharacter); 
                }
                setCharacters(randomHero)
               
            } catch (error) {
                console.log(error);
            }
        }

        getRandomCharacter()
    }, [])
    

    const fetchData = async () => {
        const response = await (await fetch(marvelApiUrl)).json()
        setInputSearch('')
      
        setCharacters(response.data.results)
      }
    
      const handleSubmit = e => {
        e.preventDefault()
        fetchData()
      }

        return (
            <div className="heroes">
                <section>
                    <h2>
                        <label id="search-text"
                        htmlFor="photo-search">
                        Which hero do you need?
                        </label>
                    </h2>
                    <form className="search-form"
                    onSubmit={handleSubmit}>
                        <div>
                            <input id="photo-search" 
                            type="search" 
                            placeholder="type a word"
                            value={inputSearch}
                            onChange={(e) => setInputSearch(e.target.value)}>
                            </input>
                        </div>
                        <div>
                            <button className="search-button" 
                            type="submit" 
                            value="Search">
                                Search 
                            </button>
                        </div>
                    </form>
                </section>
                <Characters characters={characters} />
            </div>
        );
    }