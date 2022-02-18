import React, { Component } from "react";
import { FaServer,FaTasks } from "react-icons/fa";

export default class Sidebar extends Component {

    constructor(props){
        super(props);
        this.state = {show : true}
        // console.log(props.showSide)
    }

    render() {
       
        return (

            <aside class="menu">
                <div class="logo">
                    <a href="#">
                    <img src="/LOGOO.png"  />
                    </a>

                    <a role="button" onClick={this.props.sideShowToggle} class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                {/* <p class="menu-label">
                    {this.props.showSide ? 'General' : 'G'}
                </p> */}
                <ul class="menu-list">
                    <li style={{textAlign:"center"}}>
                        <a>{this.props.showSide ? 'Нэгтгэл' : <FaServer/>} </a>
                    </li>
                    <li style={{textAlign:"center"}}>
                        <a>{this.props.showSide ? 'Дашбоард' : <FaTasks/>} </a>
                    </li>
               
                </ul>
            </aside>
        );
    }
}
    