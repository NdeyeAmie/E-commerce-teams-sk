import React from "react";
import './accueil.css'
import Navbar from "./Navbar/navbar";
import MainPart from "./main/main";
import SectionPart from "./Section/section";

const Acceuil = () => {
    return ( 
        <div className="accueil">
            <Navbar />
            <MainPart />
            <SectionPart />
        </div>
     );
}
 
export default Acceuil;