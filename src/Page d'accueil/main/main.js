import React from "react";
import './main.css'
import Sidebar from "../Sidebar/sidebar";
import Banniere from "../Banner/banner";

const MainPart = () => {
    return ( 
        <div className="leMain">
            <div className="left">
                <Sidebar />
            </div>
            <div className="right">
                <Banniere />
            </div>
        </div>
    );
}
 
export default MainPart;