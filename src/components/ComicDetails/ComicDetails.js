import React from "react";
import "./ComicDetails.css";

export default function ComicDetails(props) {
    const { setHeroDetail } = props 
    return (
        <div className="modal">
            <div className="button-block">
                <button className="popup-x" onClick={()=> setHeroDetail(false)}> 
                    X 
                </button>
            </div>
            <p className="comics-hero-name">
                {props.heroDetail.name}
            </p>
            <div className="comic-list">
                {props.heroDetail.comics.items.map((comic, i) => (
                        <li className="comic-titles" key={`comic-${i}`}>
                            {comic.name}
                        </li>
                ))}
             </div>
        </div>
    )
}