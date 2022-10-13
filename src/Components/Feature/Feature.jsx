import React from 'react';
import './Feature.css'
function Feature(props){
   return(
    <div className='Feature_card'>
        <div className='Feature_title'>
          <div/>
          <h1>{props.title}</h1>
        </div>
        <div className='Feature_text'>
          <p>{props.text}</p>
        </div>
    </div>
   );
}

export default Feature;