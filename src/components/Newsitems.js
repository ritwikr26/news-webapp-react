import React, { Component } from 'react'
import noimg from './no-image.jpeg';
export class Newsitems extends Component {
    render() {
        let {title,description,url,imgurl,ndate}=this.props;
        if(imgurl===null || imgurl===""){
            imgurl=noimg;
        }
        if(description===null || description===""){
            description="No Description";
        }
        else{
            description=description.slice(0,100);
        }
        if(ndate===null || ndate===""){
            description="date N.A.";
        }
        else{
            ndate = new Date(ndate).toUTCString();
        }
       

        if(title===null || title===""){
            title="No Title";
        }
        else{
            title=title.slice(0,100);
        }
        
        return (
            <>
                <a href={url} target= "_blank" rel="noopener noreferrer" className="card my-3 bg-secondary text-white" style={{width: "18rem",height:"25rem",textDecoration:"none",color:"black"}}>
                    <img src={imgurl} style={{height:"150px",width:"17.9rem"}} className="card-img-top" alt="News images"/>
                        <div className="card-body">
                            <div>
                            <h5 className="card-title text-">{title}...</h5>
                            <p className="card-text fw-light">{description}...</p>
                            </div>
                            <p className="card-text fw-black text-black" align="right"><i>~ {ndate}</i></p>
                        </div>
                    </a>
                </>
            
        )
    }
}

export default Newsitems
