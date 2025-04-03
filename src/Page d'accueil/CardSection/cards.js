import React from "react";
import './cards.css'
import CardPart from "../card/card";

const Cardsection = ({produits}) => {
    // console.log(produits)
    return ( 
        <div className="cards">
            {produits && produits.length > 0 ? (
                produits.map((el, index) => (
                    <CardPart key={index} element={el} />
                ))
            ) : (
                <p>No products available.</p>
            )}
            {/* {produits.map((el, index) => ( <CardPart element={el} key={index} />))} */}
            {/* {table.map((el) => {<CardPart element={el} />})} */}
            {/* <CardPart /> */}
        </div>
    );
}

export default Cardsection;