import React, { Component } from "react";
import './../../App.css';

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default class Footer extends Component {
    render() {
        return (

            <footer class="site-footer">
          
              <div class="row">
      
              <hr/>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                  <p class="copyright-text">Copyright 2022 &copy; 
               <a href="https://audit.mn/"> ҮНДЭСНИЙ АУДИТЫН ГАЗАР</a>.
                  </p>
                </div>
      
                <div class="pos col-md-4 col-sm-6 col-xs-12">
                  <ul class="social-icons">
                    {/* <li><a class="facebook" href="#"><FaFacebook/></a></li>
                    <li><a class="twitter" href="#"><FaTwitter/></a></li>
                    <li><a class="linkedin" href="#"><FaLinkedin/></a></li>    */}
                  </ul>
                </div>
              </div>
            </div>
      </footer>
           
        );
    }
}
    