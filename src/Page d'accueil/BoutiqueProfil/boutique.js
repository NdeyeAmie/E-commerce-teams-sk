import React from "react";
import './boutique.css'
import Vendeur from "../Vendeur/vendeur.js";
import logo1 from "../image/logo1.png"
import logo2 from "../image/logo2.png"
import logo3 from "../image/logo3.png"
import logo4 from "../image/logo4.png"
import logo5 from "../image/logo5.png"
import logo6 from "../image/logo6.png"

const BoutiquePart = () => {
    return ( 
        <div className="boutique">
            <Vendeur image={logo1} nom="Beugue Fallou" />
            <Vendeur image={logo2} nom="Nafina Shop" />
            <Vendeur image={logo3} nom="Yamal Boutique" />
            <Vendeur image={logo4} nom="Sope Naby" />
            <Vendeur image={logo5} nom="Jum Store" />
            <Vendeur image={logo6} nom="Tapha Chaussures" />
        </div>
    );
}
 
export default BoutiquePart;