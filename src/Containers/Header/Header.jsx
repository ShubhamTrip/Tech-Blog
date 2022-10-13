import React from "react";
import './Header.css'
import ai from '../../assets/ai.png'
function Header(){
    return(
        <div className="Header">
            <div className="Header_Image"><img src={ai} alt="" /></div>
        </div>
    );
}

export default Header;