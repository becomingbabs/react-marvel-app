import React from "react"; 
import "./Footer.css"; 

export default function Footer() {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <a
                href="https://github.com/becomingbabs/react-dictionary-app"
                id="open-source-link"
                target="_blank"
                rel="noreferrer"
                >
                <strong>Open source code</strong>{" "}
                </a>
                <br/>
                by Barbara. 
                <br/> 👩🏻‍💻 <br/>  
                This app was inspired by {" "}
                <a href="https://www.marvel.com/"
                id="Marvel-link"
                target="_blank"
                rel="noreferrer">
                    Marvel
                </a>
                <br/>
                using their free API.  
            </div>
          </footer>
    )
}