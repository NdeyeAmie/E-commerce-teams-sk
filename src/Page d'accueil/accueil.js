// import React, { useState } from "react";
import './accueil.css'
import Navbar from "./Navbar/navbar";
import MainPart from "./main/main";
import SectionPart from "./Section/section";
import Cardsection from "./CardSection/cards"
import BoutiquePart from "./BoutiqueProfil/boutique";
import PubSection from "./SectionPub/pub";
import FooterPart from "./Footer/footer";

import Produits from './image/image';
import Recently from './image/rencently';

import InfoSection from './Infos du Site/infos';


const Acceuil = () => {

    return ( 
        <div className="accueil">
            <Navbar />
            <MainPart />
            <SectionPart 
                firstTitre="Catégories"
                secondTitre="Nos Produits"
                specialCard={<Cardsection produits={Produits} />}
            />
            <SectionPart 
                firstTitre="Vendeurs"
                secondTitre="Top Boutiques"
                specialCard={<BoutiquePart />}
            />
            <PubSection 
                image={'/image/2.jpg'}
                texte="Black Friday à partir de ce 10 Avril"
             />
             <SectionPart 
                firstTitre="Produits"
                secondTitre="Recentes Produits"
                specialCard={<Cardsection produits={Recently} />}
             />
             <InfoSection />
             <FooterPart />
        </div>
     );
}
 
export default Acceuil;