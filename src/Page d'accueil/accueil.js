// import React, { useState } from "react";
import './accueil.css'
import Navbar from "./Navbar/navbar";
import MainPart from "./main/main";
import SectionPart from "./Section/section";
import Cardsection from "./CardSection/cards"
import BoutiquePart from "./BoutiqueProfil/boutique";
import PubSection from "./SectionPub/pub";
import FooterPart from "./Footer/footer";

import Imag from "./image/2.jpg"
import InfoSection from './Infos du Site/infos';


const Acceuil = () => {

    // const [Produits, setProduits] = useState(["Shoes", "Shirt", "Faucet", "Accesories", "Vélo", "Car", "Ball", "HeadPhone"])
    const Produits = [
        {nom: "nom", image: "0.png", prix: 20000},
        {nom: "nom", image: "0.png", prix: 20000},
        {nom: "nom", image: "0.png", prix: 20000},
        {nom: "nom", image: "0.png", prix: 20000},
        {nom: "nom", image: "0.png", prix: 20000},
        {nom: "nom", image: "0.png", prix: 20000},
        {nom: "nom", image: "0.png", prix: 20000},
        {nom: "nom", image: "0.png", prix: 20000}
    ]

    const recently = [
        {nom: "nom", image: "0.png", prix: 20000},
        {nom: "nom", image: "0.png", prix: 20000},
        {nom: "nom", image: "0.png", prix: 20000},
        {nom: "nom", image: "0.png", prix: 20000},
    ]


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
                image={Imag}
                texte="Black Friday à partir de ce 10 Avril"
             />
             <SectionPart 
                firstTitre="Produits"
                secondTitre="Recentes Produits"
                specialCard={<Cardsection produits={recently} />}
             />
             <InfoSection />
             <FooterPart />
        </div>
     );
}
 
export default Acceuil;