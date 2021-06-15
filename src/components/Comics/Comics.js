import React from "react"; 
import "./Comics.css"; 

export default function Comics(props) {
    return (
            <div className="comic-cards">
                    {props.comics.map((comic, i) => (
                        <div key={`c-${i}`}>
                           <p className="comic-title">
                               {comic.title}
                            </p>
                          <img src={`${comic.thumbnail.path}/standard_medium.${comic.thumbnail.extension}`} alt="" />
                        </div>
                    ))}
            </div>
    )
}