import React from "react";
import './titrePart.css'

const TitreSection = ({premierTitre, deuxiemeTitre}) => {
    return ( 
        <div className="titreSection">
            <h6>{premierTitre}</h6>
            <h3>{deuxiemeTitre}</h3>
        </div>
    );
}
 
export default TitreSection;