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

import p1 from "./image/p1.png"
import p2 from "./image/p2.png"
import p3 from "./image/p3.png"
import p4 from "./image/p4.png"
import p5 from "./image/p5.png"
import p6 from "./image/p6.png"
import p7 from "./image/p7.png"
import p8 from "./image/p8.png"

import r1 from "./image/r1.png"
import r2 from "./image/r2.png"
import r3 from "./image/r3.png"
import r4 from "./image/r4.png"

import InfoSection from './Infos du Site/infos';


const Acceuil = () => {

    // const [Produits, setProduits] = useState(["Shoes", "Shirt", "Faucet", "Accesories", "Vélo", "Car", "Ball", "HeadPhone"])
    const Produits = [
        {nom: "Clavier", image: p1, prix: 15000},
        {nom: "Caméra", image: p2, prix: 40000},
        {nom: "Chaussure", image: p3, prix: 25000},
        {nom: "Gel", image: p4, prix: 12500},
        {nom: "Voiture", image: p5, prix: 32000},
        {nom: "Jogging", image: p6, prix: 15000},
        {nom: "Manette", image: p7, prix: 12000},
        {nom: "Ordinateur", image: p8, prix: 250000}
    ]

    const recently = [
        {nom: "Table", image: r1, prix: 20000},
        {nom: "Sac", image: r2, prix: 9500},
        {nom: "Pull", image: r3, prix: 10000},
        {nom: "Television", image: r4, prix: 110000}
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