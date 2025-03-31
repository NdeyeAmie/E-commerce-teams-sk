import React from "react";
import './section.css'
import TitreSection from "../SectionTitre/titrePart";
import Cardsection from "../CardSection/cards";

const SectionPart = () => {
    return ( 
        <div className="partSection">
            <TitreSection premierTitre="Catégories" deuxiemeTitre="Nos Produits" />
            <Cardsection />
        </div>
    );
}
 
export default SectionPart;