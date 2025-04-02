import React from "react";
import './boutique.css'
import Vendeur from "../Vendeur/vendeur.js";
import Image from "../image/1.jpg"

const BoutiquePart = () => {
    return ( 
        <div className="boutique">
            <Vendeur image={Image} nom="Nom" />
            <Vendeur image={Image} nom="Nom" />
            <Vendeur image={Image} nom="Nom" />
            <Vendeur image={Image} nom="Nom" />
        </div>
    );
}
 
export default BoutiquePart;