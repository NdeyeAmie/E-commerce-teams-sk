import React from "react";
import "./infos.css"
import PartInfos from "../part Infos/infoPart";

const InfoSection = () => {
    return ( 
        <div className="infos">
            <PartInfos titre="Lieu" details="Dakar, Sénégal" icone={<i class="fa-solid fa-location-dot"></i>} />
            <PartInfos titre="Contact" details="33 333 33 33 / 77 777 77 77" icone={<i class="fa-solid fa-phone"></i>} />
            <PartInfos titre="Mail" details="nom@gmail.com" icone={<i class="fa-solid fa-envelope"></i>} />
        </div>
    );
}
 
export default InfoSection;