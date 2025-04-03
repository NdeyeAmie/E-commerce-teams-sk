import React from "react";
import "./infos.css"
import PartInfos from "../part Infos/infoPart";

const InfoSection = () => {
    return ( 
        <div className="infos">
            <PartInfos titre="Lieu" details="Dakar, Sénégal" />
            <PartInfos titre="Contact" details="33 333 33 33 / 77 777 77 77" />
            <PartInfos titre="Mail" details="nom@gmail.com" />
        </div>
    );
}
 
export default InfoSection;