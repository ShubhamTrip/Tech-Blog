import React from "react";
import './BlogCard.css'
function BlogCard(props){
   
    return(
        <div className="BlogCard">
            <div className="CardImage"><img src={props.CardImg} alt="card Image" /></div>
            <div className='CardText'>
                <p className='CardText_Date'>{props.date}</p>
                <p className='CardText_Text'>{props.text}</p>
                <a className="CardText_Article_Link" href={props.Article_link}>Read Full article</a>
            </div>
        </div>
    );

}

export default BlogCard;