import React from "react";
import './accueil.css'
import Navbar from "./Navbar/navbar";
import MainPart from "./main/main";
import SectionPart from "./Section/section";
import Cardsection from "./CardSection/cards"
import BoutiquePart from "./BoutiqueProfil/boutique";
import PubSection from "./SectionPub/pub";

import Imag from "./image/2.png"


const Acceuil = () => {
    return ( 
        <div className="accueil">
            <Navbar />
            <MainPart />
            <SectionPart 
                firstTitre="Catégories"
                secondTitre="Nos Produits"
                specialCard={<Cardsection />}
            />
            <SectionPart 
                firstTitre="Vendeurs"
                secondTitre="Top Boutiques"
                specialCard={<BoutiquePart />}
            />
            <PubSection 
                image={Imag}
                texte="Black Clover"
             />
        </div>
     );
}
 
export default Acceuil;