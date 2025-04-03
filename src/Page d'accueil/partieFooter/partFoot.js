import React from "react";
import './partFoot.css'

const PartFooter = ({titre, listes, paragraphe, firstIcone, SecondIcone, ThirdIcone}) => {
    return ( 
        <div className="partFoot">
            <div className="titre">{titre}</div>
            <ul>
                {(listes && listes.length > 0 ? listes.map((list, index) => (
                    <li key={index}>{list}</li>
                )) : <p></p>)}
            </ul>
            <p>{paragraphe}</p>
            <div className="lesIcones">
                <div className="icone">{firstIcone}</div>
                <div className="icone">{SecondIcone}</div>
                <div className="icone">{ThirdIcone}</div>
            </div>
        </div>
     );
}
 
export default PartFooter;