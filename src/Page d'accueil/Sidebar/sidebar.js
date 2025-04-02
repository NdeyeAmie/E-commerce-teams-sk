import React from "react";
import './sidebar.css';

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <ul>
                <div className="element">
                    <i class="fa-solid fa-headphones"></i>
                    <li>Accesoires</li>
                </div>
                <div className="element">
                    <i class="fa-solid fa-basketball"></i>
                    <li>Articles Sport</li>
                </div>
                <div className="element">
                    <i class="fa-solid fa-shoe-prints"></i>
                    <li>Chaussures</li>
                </div>
                <div className="element">
                    <i class="fa-solid fa-shower"></i>
                    <li>Déco Maison</li>
                </div>
                <div className="element">
                    <i class="fa-solid fa-mobile"></i>
                    <li>Technologies</li>
                </div>
                <div className="element">
                    <i class="fa-solid fa-shirt"></i>
                    <li>Vêtements</li>
                </div>
            </ul>
        </div>
     );
}
 
export default Sidebar;