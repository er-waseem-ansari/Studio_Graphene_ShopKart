import React from "react";
import bottom_design from "./images/bottom_design.png";
import "./bottom_page.css";

const BottomPage = ()=>{
    return(
        <div>
        <div className="bottom_page" style={{ backgroundImage: `url(${bottom_design})` }}>
                <div className="up">
                    <div className="newsletter_heading">
                        <span className="head1">Newsletter</span>
                        <span className="head2">Get news about articles and updates in your inbox.</span>
                    </div>
                    <div className="form">
                        <form className="form_list">
                            <input placeholder="NAME"/>
                            <input placeholder="EMAIL"/>
                            <input placeholder="MESSAGE"/>
                            
                        </form>
                    </div>
                </div>
                <div className="down">
                    <span className="get_in_touch">GET<br/>IN TOUCH</span>
                    <button className="circular_button" >SEND</button>
                </div>
                
        </div>
        <div className="footer">Copyright 2022 All Right Reserved By SG</div>
        </div>
        
    )
}

export default BottomPage;