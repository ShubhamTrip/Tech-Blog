import React from "react";
import './Header.css'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'
function Header(){
    return(
        <div className="Header">
            <div className='Header_TextSection'>
                <h1 className="gradient_text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="Header_TextSection_Search">
                    <input type="text" placeholder="Your Email Address"/>
                    <button>Get Searched</button>
                </div>
                <div className="Header_TextSection_People">
                    <img src={people} alt="" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="Header_ImageSection"><img src={ai} alt="" /></div>
        </div>
    );
}

export default Header;