import React from "react";
import './card.css'

const CardPart = ({element}) => {
    // console.log(element)
    const {nom, image, prix} = element

    return ( 
        <div className="card">
            <div className="image">
                <img src={image} alt="" />
                <button>Add to card</button>
            </div>
            <h6>{nom}</h6>
            <p>$ <span>{prix}</span>fr</p>
        </div>
    );
}
 
export default CardPart;