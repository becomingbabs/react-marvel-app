import React, { useState } from "react"; 
import "./Characters.css"; 
import ComicDetails from "../ComicDetails/ComicDetails";

export default function Characters(props) {
    let [heroDetail, setHeroDetail] = useState(false);

    return (
        <section>
            <div className="character-cards">
                    {props.characters.map(hero => (
                        <div onClick={() => setHeroDetail(hero)}>
                           <p className="hero-name">
                               {hero.name}
                            </p>
                          <img src={`${hero.thumbnail.path}/standard_medium.${hero.thumbnail.extension}`} alt="" key={hero.id} />
                        </div>
                    ))}
            </div>
            {heroDetail && 
            <ComicDetails setHeroDetail={setHeroDetail} heroDetail={heroDetail} />} 
        </section>
    )
}