import React,{useState}from "react";
import './navbar.css'
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
function Navbar(){
    
    const [toggle, setToggle]=useState(false);
    const linkList =()=>(
        <>
        <a href="">Home</a>
        <a href="">What is GPT?</a>
        <a href="">Open AI</a>
        <a href="">Case Studies</a>
        <a href="">Libraries</a>
        </>
    )
    return(
        <div className="Navbar">
            <div className="Navbar_Gpt3"><p>GTP3</p></div>
            <div className="Navbar_Links">
                {linkList()}
            </div>
            <div className="Navbar_Sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </div>
            <div className='Navbar_menu'>
                {toggle?
                 <AiOutlineClose size={24}  onClick={()=>setToggle(false)}/>    
                :<AiOutlineMenu size={24}  onClick={()=>setToggle(true)}/>
                }
                
                {toggle && (
                    <div className="Navbar_menu_container">
                        {linkList()}
                        <div className="Navbar_menu_container_sign">
                        <p>Sign In</p>
                         <button type="button">Sign Up</button>
                      </div>
                    </div>)
                }

                
                
            </div>

        </div>
    );
}

export default Navbar;