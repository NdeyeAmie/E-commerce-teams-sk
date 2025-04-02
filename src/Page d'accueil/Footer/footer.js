import React from "react";
import "./footer.css"
import PartFooter from "../partieFooter/partFoot";

const FooterPart = () => {
    return ( 
        <footer>
            <div className="footContent">
                <PartFooter titre="Titres" listes={['Accueil','Services','Produits','Boutiques']} />
                <PartFooter titre="Titres" listes={['Accueil','Services','Produits','Boutiques']} />
                <PartFooter titre="Titres" listes={['Accueil','Services','Produits','Boutiques']} />
                <PartFooter titre="Titres" listes={['Accueil','Services','Produits','Boutiques']} />
            </div>
        </footer>
    );
}
 
export default FooterPart;