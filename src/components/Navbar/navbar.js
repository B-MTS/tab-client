import React, { Component } from "react";
import './../../App.css';
export default class Navbar extends Component {
    render() {
        return (

            <nav class="fix navbar" role="navigation" aria-label="main navigation">

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown">
                                <img src="3135715.png" width="40" height="40" class="rounded-circle"/>
                                </a>

                                <div class="navbar-dropdown">
                                    <a class="navbar-item">
                                        Гарах
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            // <nav class="navbar" role="navigation" aria-label="main navigation">

            //     <div id="navbarBasicExample" class="navbar-menu">
            //         <div class="navbar-start">
            //         </div>

            //         <div class="navbar-end">
            //             <div class="navbar-item">
            //                 <div class="navbar-item has-dropdown is-hoverable">
            //                     <a class="navbar-link">
            //                         Мөнхцэцэг
            //                     </a>

            //                     <div class="navbar-dropdown">
            //                         <a class="navbar-item">
            //                             Гарах
            //                         </a>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </nav>
        );
    }
}
    