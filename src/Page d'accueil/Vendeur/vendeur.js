import React from "react";
import "./vendeur.css"

const Vendeur = (props) => {
    // console.log(props)
    return ( 
        <div className="vendeur">
            <img src={props.image} alt="" />
            <h6>{props.nom}</h6>
        </div>
    );
}
 
export default Vendeur;