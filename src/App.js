import React, { useState } from 'react';
import './App.css';
import Footer from "./components/Footer/Footer.js";
import MarvelIcon from "./imgs/marvel-icon.png";
import HeroSearch from "./components/HeroSearch/HeroSearch.js";
import FavoritesList from './components/FavoritesList/FavoritesList';

function App() {
  const [showFavoriteList, setShowFavoriteList] = useState(false)
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
            <img src={MarvelIcon} 
            alt="Marvel Book Icon"
            className="marvel-book-icon"
            />
            <div>
              <button className="favorites-button" 
                type="submit" 
                value="Search"
                onClick={() => setShowFavoriteList(true)}
                >
                    Favorites
              </button>
            </div>
            {showFavoriteList && <FavoritesList setShowFavoriteList={setShowFavoriteList}/>}
        </header>
        <main>
          <HeroSearch /> 
        </main>
          <Footer /> 
      </div>
    </div>
  );
}

export default App;
