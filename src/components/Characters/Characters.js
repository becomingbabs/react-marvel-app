import React, { useState } from "react"; 
import "./Characters.css"; 
import ComicDetails from "../ComicDetails/ComicDetails";

export default function Characters(props) {
    let [heroDetail, setHeroDetail] = useState(false);

    return (
            <div className="character-cards">
                    {props.characters.map((hero, i) => (
                        <div onClick={() => setHeroDetail(hero)} key={`hero-${i}`}>
                           <p className="hero-name">
                               {hero.name}
                            </p>
                          <img src={`${hero.thumbnail.path}/standard_medium.${hero.thumbnail.extension}`} alt="" />
                        </div>
                    ))}
                    {heroDetail && 
                <ComicDetails setHeroDetail={setHeroDetail} heroDetail={heroDetail} />} 
            </div>
            
    )
}