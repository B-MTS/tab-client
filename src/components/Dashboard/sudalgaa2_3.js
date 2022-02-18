import React, { Component } from "react";
import Sidebar from '../../pages/sidebar';
import Navbar from '../Navbar/navbar';
import Footer from '../Navbar/footer';
import Sudalgaa2_3_fin from '../../sudalgaa2/sud2_3fin';

export default class Sudalgaa2_3 extends Component {

    constructor(props){
        super(props);
        this.state = {
            style:"dashboard",
            menuStatus:"open",
            sideShow: true
        };
        this.handleClick = this.handleClick.bind(this);
        
    };

    
    

    handleClick() {
    
        switch(this.state.menuStatus)
        {
        case "open":
            this.setState({
                menuStatus:"close",
                style:"dashboard dashboard-active",
                sideShow:false
            });
        break;
        case "close":
            this.setState({
                menuStatus:"open",
                style:"dashboard",
                sideShow:true
            });
        break;
        }
    }

    render() {
        return (
            <div className='dashboard' className={this.state.style}>
                <Navbar/>
                <Sidebar sideShowToggle={this.handleClick} showSide={this.state.sideShow}/>
                <Footer/> 
                <div class="page-body-section pt-6">
               
                    <Sudalgaa2_3_fin />
                    </div>
                </div>
           
        );
    }
}