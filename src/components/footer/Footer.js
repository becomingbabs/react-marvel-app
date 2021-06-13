import React from "react"; 
import "./Footer.css"; 

export default function Footer() {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <a
                href="https://github.com/becomingbabs/react-marvel-app"
                id="open-source-link"
                target="_blank"
                rel="noreferrer"
                >
                <strong>Open source code</strong>{" "}
                </a>
                <br/>
                by Barbara. 
                <br/> 👩🏻‍💻 <br/>  
                Data provided by {" "}
                <a href="https://www.marvel.com/"
                id="Marvel-link"
                target="_blank"
                rel="noreferrer">
                    <strong>Marvel</strong>
                </a>
                <br/>
                © 2014 Marvel  
            </div>
          </footer>
    )
}