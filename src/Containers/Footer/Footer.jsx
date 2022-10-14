import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div className="Footer">
             <h1>Do you want to step in to the future before others</h1>
             <button>Request Early Access</button>
             <div className="Footer_Bottom">
                <div>
                    <h1>GTP 3</h1>
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div>
                    <table>
                        <th>
                            <td>Links</td>
                            <td>Companies</td>
                            <td>Get in touch</td>
                        </th>
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
        </div>
    );
}

export default Footer;