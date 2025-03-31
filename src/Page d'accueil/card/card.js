import React from "react";
import './card.css'

const CardPart = () => {
    return ( 
        <div className="card">
            <div className="image">
                <img src="" alt="" />
            </div>
            <h6>Nom</h6>
            <p>$ <span>20000</span>fr</p>
        </div>
    );
}
 
export default CardPart;