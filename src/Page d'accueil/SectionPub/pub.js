import React from "react";
import "./pub.css"

const PubSection = ({image, texte}) => {
    return ( 
        <div className="pubContent">
            <img src={image} alt="" />
            <div className="degradEx">
                <h3>{texte}</h3>
            </div>
        </div>
    );
}
 
export default PubSection;