import './App.css';
import Footer from "./components/footer/Footer";
import MarvelIcon from "./imgs/marvel-icon.png";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from "./components/HomePage/Home";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav>
        <div>
          <img src={MarvelIcon} 
          alt="Marvel Book Icon"
           /> 
        </div>
        <div>
          <button className="home-button">
            <Link to="/home" className="item"> Home </Link> 
          </button>
        </div>
      </nav>
      <main className="container">
     <Home /> 
      </main>
      <Footer /> 
    </div>
    </BrowserRouter>
  );
}

export default App;
