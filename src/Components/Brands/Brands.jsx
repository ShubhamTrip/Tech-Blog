import React from "react";
import './Brands.css'
import { google, slack, atlassian, dropbox, shopify } from './imports';

function Brands(){
    return(
        <div className="Brands">
            <div><img src={google} alt="" /></div>
            <div><img src={shopify} alt="" /></div>
            <div><img src={slack} alt="" /></div>
            <div><img src={dropbox} alt="" /></div>
            <div><img src={atlassian} alt="" /></div>
      
        </div>
    );
}

export default Brands;