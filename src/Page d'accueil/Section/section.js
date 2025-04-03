import React from "react";
import './section.css'
import TitreSection from "../SectionTitre/titrePart";
// import Cardsection from "../CardSection/cards";

const SectionPart = ({firstTitre, secondTitre, specialCard}) => {
    return ( 
        <div className="partSection">
            <TitreSection premierTitre={firstTitre} deuxiemeTitre={secondTitre} />
            {specialCard}
            {/* <Cardsection /> */}
        </div>
    );
}
 
export default SectionPart;