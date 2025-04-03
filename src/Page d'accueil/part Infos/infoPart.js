import React from "react";
import "./infoPart.css"

const PartInfos = ({icone, titre, details}) => {
    return ( 
        <div className="partInfo">
            <div className="icone">
                {icone}
            </div>
            <h6>{titre}</h6>
            <p>{details}</p>
        </div>
    );
}
 
export default PartInfos;