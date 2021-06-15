import React from "react"; 
import "./Footer.css"; 

export default function Footer() {
    return (
        <footer className="app-footer">
                Data provided by {" "}
                <a href="https://www.marvel.com/"
                id="Marvel-link"
                target="_blank"
                rel="noreferrer">
                    <strong>Marvel</strong>
                </a>
                <br/>
                © 2014 Marvel 
          </footer>
    )
}