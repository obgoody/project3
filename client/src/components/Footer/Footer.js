import React, { Component } from "react";
import google from './images/google.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';



const imageStyles = {
    borderRadius: "50%",
    padding:"10px 0",
    width:"40px",
    // height:"40px"
  }

class Footer extends Component {




    render() {
        return (
            <div className="footer" style={{backgroundColor: "#626e60"}}>
                
                    <div className="container">
                        <div className="row text-center" id="signInFooter">
                            <div className="col-sm-4 text-center">
                                <a href="http://www.github.com"> <img style = {imageStyles} src={github} id="gitImg"
                                    alt="github" /></a>
                            </div>
                            <div className="col-sm-4 text-center">
                                <a href="https://www.linkedin.com"><img style = {imageStyles} src={linkedin} id="linkedinImg"
                                    alt="linkedin" /></a>
                            </div>
                            <div className="col-sm-4 text-center">
                                <a href="https://www.google.com"><img style = {imageStyles} src={google} id="googleImg"
                                    alt="google" /></a>
                            </div>
                        </div>
                    </div>
               
            </div>

        )

    }
}
export default Footer;