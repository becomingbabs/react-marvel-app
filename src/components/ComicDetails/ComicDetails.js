import React, { useState } from "react";
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
            <h2>
                {props.heroDetail.name}
            </h2>
            <div className="comic-list">
                {props.heroDetail.comics.items.map(comic => (
                        <li className="comic-titles" key={props.heroDetail.comics.items.index}>
                            {comic.name}
                        </li>
                ))}
             </div>
        </div>
    )
}