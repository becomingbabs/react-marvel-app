import './App.css';
import Footer from "./components/footer/Footer";
import MarvelIcon from "./imgs/marvel-icon.png";
import HeroSearch from "./components/HeroSearch/HeroSearch.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
            <img src={MarvelIcon} 
            alt="Marvel Book Icon"
            className="marvel-book-icon"
            /> 
            <br/>
            <a>
              <button className="favorites-button">
                Favorites 
              </button>
            </a>
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
