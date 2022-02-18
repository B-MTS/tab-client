import React, { Component } from "react";
import Sidebar from '../../pages/sidebar';
import Navbar from '../Navbar/navbar';
import Footer from '../Navbar/footer';
import Sud5_fin from '../../sudalgaa5/sud5fin';

class sudalgaa5 extends React.Component {

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
               
                    <Sud5_fin/>
                    </div>
                </div>
           
        );
    }
}
export default sudalgaa5;