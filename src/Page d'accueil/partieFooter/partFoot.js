import React from "react";
import './partFoot.css'

const PartFooter = ({titre, listes}) => {
    return ( 
        <div className="partFoot">
            <div className="titre">{titre}</div>
            <ul>
                {listes.map((list) => <li>{list}</li>)}
            </ul>
        </div>
     );
}
 
export default PartFooter;