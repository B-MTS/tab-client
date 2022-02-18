import "./App.css";

import "bulma/css/bulma.min.css";
import React, { useEffect, useState } from "react";
import Routes from './Routes'
import { Route, useHistory, useLocation } from "react-router-dom";
// import Sudalgaa10 from './components/Dashboard/sudalgaa10';
// import Sudalgaa9 from './components/Dashboard/sudalgaa9';
// import Sudalgaa8 from './components/Dashboard/sudalgaa8';
// import Sudalgaa7 from './components/Dashboard/sudalgaa7';
// import Sudalgaa6 from './components/Dashboard/sudalgaa6';
// import Sudalgaa5 from './components/Dashboard/sudalgaa5';
// import Sudalgaa4 from './components/Dashboard/sudalgaa4';
// import Sudalgaa3 from './components/Dashboard/sudalgaa3';
import Sudal2 from './components/Dashboard/sud2';
import Sudal3 from './components/Dashboard/sud3';
import Sudal4 from './components/Dashboard/sud4';
import Sudal5 from './components/Dashboard/sud5';
import Sudal6 from './components/Dashboard/sud6';
import Sudal7 from './components/Dashboard/sud7';
import Sudal8 from './components/Dashboard/sud8';
import Sudal9 from './components/Dashboard/sud9';
import Sudal10 from './components/Dashboard/sud10';
import Sudal11 from './components/Dashboard/sud11';
import Sudal12 from './components/Dashboard/sud12';
// import Sudalgaa2_1 from './sudalgaa2/sudalgaa2-1';
// import Sudalgaa2_2 from './sudalgaa2/sudalgaa2-2';
import Sudal1 from './components/Dashboard/sud1';
// import Sudalgaa2_3 from './components/Dashboard/sudalgaa2_3';
// import Sudalgaa1 from './sudalgaa1/sudalgaa1';
import { useAlert } from 'react-alert';
import Dashboard from "./components/Dashboard/dashboard";
import { HashRouter, Redirect } from "react-router-dom";
import { UserB, BackButton } from "./assets/images/zurag";
import Background from "./assets/images/background.png";
import { DataRequest } from "./functions/DataApi";
import Footer from './components/Navbar/footer';

const axios = require("axios");
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); 
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};
const Header = (props) => {
  const history = useHistory();
  const userDetils = JSON.parse(localStorage.getItem("userDetails"));

  function onSelect(option) {
    if (option === "2") {
      localStorage.removeItem("userDetails");
      fakeAuth.signout(() => {
        history.push("/");
      });

    }
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "0px",
        width: "100vw",
        minHeight: "70px",
        backgroundColor: "#fff",
        boxShadow: "0.5px 0.866px 2px 0px rgb(0 0 0 / 15%)",
        display: "flex",
        zIndex: "1",
     
      }}
    >
      <div style={{ marginLeft: "7%", marginTop: "20px" }}>
        {props.back ? (
          <img
            src={BackButton}
            alt=""
            height="25"
            width="25"
            onClick={() => props.butsakh()}
            style={{ cursor: "pointer" }}
          />
        ) : null}
        <span
          style={{
            color: "#418ee6",
            fontSize: 25,
            fontFamily: "RalewayRegular",
            marginLeft: "10px",
          }}
        >
          {props.title}
        </span>
      </div>

      <div class="navbar-menu" id="nav-links" style={{ marginTop: "15px",  boxShadow: '0 10px 10px rgba(0,0,0,0.01), 0 3px 3px rgba(0,0,0,0.01)' }}>
        <div class="navbar-end">
          <div>
          <img src="3135715.png" width="40" height="40" class="rounded-circle"/>
            {/* <img src={UserB} width="45" height="45" alt="" /> */}
          </div>

          <select
            style={{
              border: "none",
              backgroundColor: "#ffff",
              marginBottom: "12px",
            }}
          
            value={1}
            onChange={(text) => onSelect(text.target.value)}
          >
            <option value="1" disabled selected hidden>
              {userDetils !== undefined ? userDetils?.USER_NAME : "Admin"}
            </option>
            <option value={2}>Гарах</option>
          </select>
        </div>
      </div>
    </div>
  );
};
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
function Login(props) {
  const [ner, setNer] = useState();
  const [nuutsUg, setNuutsUg] = useState();
  const [sanuulakh, setSanuulakh] = useState(false);
  const { state } = useLocation();
  const alert = useAlert();
  const [login, setLogin] = useState();
console.log("ner",ner);
console.log("nuutsUg",nuutsUg);
console.log("sanuulakh",sanuulakh);
console.log("+++++++++++++",JSON.parse(localStorage.getItem("rememberedUser")));

useEffect(() => {
  if (localStorage.getItem("rememberedUser")?.includes("userName")) {
    setNer(JSON.parse(localStorage.getItem("rememberedUser")).userName);
    setNuutsUg(JSON.parse(localStorage.getItem("rememberedUser")).password);
  }
  // setNer(JSON.parse(localStorage.getItem("rememberedUser"))?.userName);
  // setNuutsUg(JSON.parse(localStorage.getItem("rememberedUser"))?.password);
}, [props]);

function downHandler(e) {
  if (e.key === "Enter") {
    nevtrekh();
  }
}
function nevtrekh() {
  if (ner !== undefined && nuutsUg !== undefined) {
    axios.defaults.headers["Content-Type"] =
      "application/x-www-form-urlencoded;charset=UTF-8";
    axios({
      method: "post", //put
      url: "http://hr.audit.mn/reg/api/v1/login",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },

      data: {
        username: ner,
        password: nuutsUg,
        systemid: 7,
      },
    })
      .then(function (response) {
        if (
          response?.data?.USER_ID !== 0 &&
          response?.data?.USER_ID !== null &&
          response?.data?.USER_ID !== undefined
        ) {
          if (sanuulakh) {
            localStorage.removeItem("rememberedUser");
            localStorage.setItem(
              "rememberedUser",
              JSON.stringify({
                userName: ner,
                password: "",
              })
            );
          }
          DataRequest({
            url:
              "http://hr.audit.mn/reg/api/v1/profile/" +
              response?.data?.USER_ID +
              "/" +
              7,
            method: "GET",
            data: {},
          })
            .then(function (response) {
              console.log("test", response.data);
              localStorage.setItem(
                "userDetails",
                JSON.stringify(response?.data)
              );
          
                fakeAuth.authenticate(() => {
                  setLogin(true);
                });

                // });
              })
              .catch(function (error) {
              });
          } else alert.show("Хэрэглэгчийн нэвтрэх нэр, нууц үг буруу байна!!!");
  
        })
        .catch(function (error) {
        });
    }
  }
  const userDetils = JSON.parse(localStorage.getItem("userDetails"));
  if (fakeAuth.isAuthenticated === true) {
    if (userDetils?.USER_TYPE_NAME === "SURVEY")
      return <Redirect to={state?.form || "/web/dashboard/"} />;
    else return <Redirect to={state?.form || "/web/dashboard/"} />;
  }
  return (
    <div
      style={{
        backgroundImage: "url(" + Background + ")",
        display: "flex",
        flexDirection: "column",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        justifyContent: "center",
        overflow: "hidden",
        alignItems: "center",
      }}
    >
    <div className="auth-wrapper" style={{background: "linear-gradient(to right, #4880EC, #019CAD)"}}>
    <div className="auth-inner">
      <div className="form">
        <img src="/mnaologo.png" />
       
       
        <div className="form-group">
            <input  tabIndex="1"
            class="input is-normal"
            id="UserName" value={ner}    onChange={(text) => setNer(text.target.value)} type="text" className="form-control" placeholder="Нэвтрэх нэр" required/>
        </div>

        <div  style={{paddingTop:"15px"}} className="form-group">
            <input tabIndex="2" onKeyDown={downHandler} value={nuutsUg} onChange={(text) => setNuutsUg(text.target.value)} name="Password" type="password" className="form-control" placeholder="Нууц үг" required/>
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input tabIndex="3" value={sanuulakh} onChange={() => setSanuulakh(!sanuulakh)} type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"   style={{padding:"17px"}}> Сануулах</label>
            </div>
            <p className="forgot-password text-right">
              <a href="/"> Нууц үг мартсан?</a>
            </p>
        </div>

        <button type="submit" className="btn btn-primary" style={{width:"100%"}} onClick={nevtrekh}> Нэвтрэх</button>
        
      </div>
    </div>
  </div>
     </div>
    
  );
}

function App() {

  return (
    <div>
      <HashRouter
        getUserConfirmation={(message, callback) => {
          const allowTransition = window.confirm(message);
          callback(allowTransition);
        }}
      >
        <Route path="/" exact>
          <Login />
        </Route>

        
        <Route path="/web">
          <Header />
<Footer/>
        </Route>

        <PrivateRoute path="/web/dashboard/" component={Dashboard} />

        <Route path="/web/sud1/" component={Sudal1} exact/> 
         <PrivateRoute path="/web/sud2/" component={Sudal2} exact /> 
         <PrivateRoute path="/web/sud3/" component={Sudal3} exact /> 
         <PrivateRoute path="/web/sud4/" component={Sudal4} exact /> 
         <PrivateRoute path="/web/sud5/" component={Sudal5} exact /> 
         <PrivateRoute path="/web/sud6/" component={Sudal6} exact /> 
         <PrivateRoute path="/web/sud7/" component={Sudal7} exact /> 
         <PrivateRoute path="/web/sud8/" component={Sudal8} exact /> 
         <PrivateRoute path="/web/sud9/" component={Sudal9} exact /> 
         <PrivateRoute path="/web/sud10/" component={Sudal10} />
          <PrivateRoute path="/web/sud11/" component={Sudal11} />
         <Route path="/web/sud12/" component={Sudal12} exact/>  
   

      </HashRouter>
    </div>
  );
}

export default App;
