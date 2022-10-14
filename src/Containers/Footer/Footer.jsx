import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div className="Footer">
             <h1 className="gradient_text">Do you want to step in to the future before others</h1>
             <button>Request Early Access</button>
             <div className="Footer_Bottom">
                <div className="Footer_Bottom_Text">
                    <h1>GTP 3</h1>
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className="Footer_Bottom_Table">
                    <table>
                        <tr>
                            <td>Links</td>
                            <td>Companies</td>
                            <td>Get in touch</td>
                        </tr>
                        <tr>
                            <td>Overons</td>
                            <td>Terms & Conditions</td>
                            <td>Get in touch</td>
                        </tr>
                        <tr>
                            <td>Counters</td>
                            <td>Privacy Policy</td>
                            <td>Contact</td>
                        </tr>
                        <tr>
                            <td>Crechterwoord</td>
                            <td>085-132567</td>
                            <td>info@payme.net</td>
                        </tr>
                    </table>
                </div>
             </div>
             <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
    );
}

export default Footer;