import React from "react";
import './Blog.css'
import {BlogCard} from '../../Components';
import {blog1,blog2,blog3,blog4,blog5} from './index';
import data from './content.js';
function Blog(){
    
    return(
        <div className="Blog">
             <div className="gradient_text"><h1>A lot is happening, We are blogging about it.</h1></div>
             <div className="CardSection">
                <div className="CardGroup1"><BlogCard text={data[0].text} date='12 Sept 2020' CardImg={blog1}/></div>
                <div className="CardGroup2">
                  <BlogCard text={data[1].text} date='12 Sept 2020' CardImg={blog2}/>
                  <BlogCard text={data[2].text} date='12 Sept 2020' CardImg={blog3}/>
                  <BlogCard text={data[3].text} date='12 Sept 2020' CardImg={blog4}/>
                  <BlogCard text={data[4].text} date='12 Sept 2020' CardImg={blog5}/>
                </div>
             </div>
        </div>
    );
}

export default Blog;