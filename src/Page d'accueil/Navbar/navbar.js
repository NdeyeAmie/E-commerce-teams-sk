import React from "react";
import './navbar.css'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src="" alt="" />
                <h4>Logo</h4>
            </div>
            <div className="barre">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" />
            </div>
            <div className="autres">
                <div className="connexion">
                    <i className="fa-solid fa-user"></i>
                    <p>Se connecter</p>
                </div>
                <div className="panier">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>0</span>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;