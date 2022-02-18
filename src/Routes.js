import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "./components/login/login";
import Dashboard from './components/Dashboard/dashboard';
import Sudalgaa2_3 from './components/Dashboard/sudalgaa2_3';
import sudalgaa10 from './components/Dashboard/sudalgaa10';
import sudalgaa9 from './components/Dashboard/sudalgaa9';
import sudalgaa8 from './components/Dashboard/sudalgaa8';
import sudalgaa7 from './components/Dashboard/sudalgaa7';
import sudalgaa6 from './components/Dashboard/sudalgaa6';
import sudalgaa4 from './components/Dashboard/sudalgaa4';
import sudalgaa5 from './components/Dashboard/sudalgaa5';
import sudalgaa3 from './components/Dashboard/sudalgaa3';
import Sudalgaa1 from './sudalgaa1/sudalgaa1';
import Sudalgaa2_1 from './sudalgaa2/sudalgaa2-1';
import Sudalgaa2_2 from './sudalgaa2/sudalgaa2-2';
import Sudal12 from './components/Dashboard/sud12';
import Sudal1 from './components/Dashboard/sud1';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/sud1" component={Sudal1} exact/> 
                <Route path="/sud12" component={Sudal12} exact/>  
                <Route path="/sud12j" component={sudalgaa10} />
                <Route path="/sudalgaa11" component={sudalgaa9} />
                <Route path="/sudalgaa10" component={sudalgaa8} />
                <Route path="/sudalgaa9" component={sudalgaa7} />
                <Route path="/sudalgaa8" component={sudalgaa6} />
                <Route path="/sudalgaa7" component={sudalgaa5} />
                <Route path="/sudalgaa6" component={sudalgaa4} />
                <Route path="/sudalgaa5" component={sudalgaa3} />
                <Route path="/sud4" component={Sudalgaa2_3} />
                <Route path="/sud3" component={Sudalgaa2_2} />
                <Route path="/sudalgaa2" component={Sudalgaa2_1} />

                <Route path="/sudalgaa1" component={Sudalgaa1} />
                 <Route path="/dashboard" component={Dashboard} /> 
                  <Route exact path='/' component={Login} /> 
                </Switch>
            </Router>
        )
    }
}
