import React from "react";
import './boutique.css'
import Vendeur from "../Vendeur/vendeur.js";
import Image from "../image/1.jpg"

const BoutiquePart = () => {
    return ( 
        <div className="boutique">
            <Vendeur image={Image} nom="Beugue Fallou" />
            <Vendeur image={Image} nom="Nafina Shop" />
            <Vendeur image={Image} nom="Yamal Boutique" />
            <Vendeur image={Image} nom="Sope Naby" />
            <Vendeur image={Image} nom="Jum Store" />
            <Vendeur image={Image} nom="Tapha Chaussures" />
        </div>
    );
}
 
export default BoutiquePart;