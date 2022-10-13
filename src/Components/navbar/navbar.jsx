import React from "react";
import './navbar.css'

function Navbar(){
    return(
        <div className="Navbar">
            <div className="Navbar_Gpt3"><p>GTP3</p></div>
            <div className="Navbar_Links">
                <a href="">Home</a>
                <a href="">What is GPT?</a>
                <a href="">Open AI</a>
                <a href="">Case Studies</a>
                <a href="">Libraries</a>
            </div>
            <div className="Navbar_Sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </div>
        </div>
    );
}

export default Navbar;