import React from "react";
import './sidebar.css';

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <ul>
                <div className="element">
                    <i className="fa-solid fa-compact-disc"></i>
                    <li>Accesoires</li>
                </div>
                <div className="element">
                    <i className="fa-regular fa-font-awesome"></i>
                    <li>Décoration</li>
                </div>
                <div className="element">
                    <i className="fa-solid fa-compact-disc"></i>
                    <li>Accesoires</li>
                </div>
                <div className="element">
                    <i className="fa-regular fa-font-awesome"></i>
                    <li>Décoration</li>
                </div>
                <div className="element">
                    <i className="fa-solid fa-compact-disc"></i>
                    <li>Accesoires</li>
                </div>
                <div className="element">
                    <i className="fa-regular fa-font-awesome"></i>
                    <li>Décoration</li>
                </div>
            </ul>
        </div>
     );
}
 
export default Sidebar;