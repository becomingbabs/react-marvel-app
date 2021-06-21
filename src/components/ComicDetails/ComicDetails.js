import React from "react";
import "./ComicDetails.css";
import DisappointedDeadpool from "../../imgs/deadpool-sticker.png";

export default function ComicDetails(props) {
    const { setHeroDetail } = props 
    
    console.log(props.heroDetail.comics);
    
    if (props.heroDetail.comics.available !== 0) {
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
    } else {
        return (
            <div className="modal">
                <div className="button-block">
                    <button className="popup-x" onClick={()=> setHeroDetail(false)}> 
                        X 
                    </button>
                </div>
                <p className="comics-hero-name">
                Bummer! No comics listed for {props.heroDetail.name}. Sorry! 
                </p>
                <div>
                    <img src={DisappointedDeadpool} alt="" /> 
                </div>
                   
            </div>
        )
    }
    
}