import React from "react";
import "./footer.css"
import PartFooter from "../partieFooter/partFoot";

const FooterPart = () => {
    return ( 
        <footer>
            <div className="footContent">
                <PartFooter titre="Logo" paragraphe="Lorem impsu del viro para el dinaro foe joeh lil dash gral mit att par fom ride am congratus milas eros" />
                <PartFooter titre="Section" listes={['Accueil','Services','Produits','Boutiques']} />
                <PartFooter titre="Produits" listes={['Accessoires','Technologies','Sport','Vetements']} />
                <PartFooter titre="Réseaux" firstIcone={<i class="fa-brands fa-facebook"></i>} SecondIcone={<i class="fa-brands fa-square-instagram"></i>} ThirdIcone={<i class="fa-brands fa-tiktok"></i>} />
            </div>
        </footer>
    );
}
 
export default FooterPart;