import React, { Component } from "react";

export default class Login extends Component {
  
    render() {
        return (
            
          <div className="auth-wrapper" style={{background: "linear-gradient(to right, #4880EC, #019CAD)"}}>
            <div className="auth-inner">
              <form className="form">
                <img src="/mnaologo.png" />

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Нэвтрэх нэр" required/>
                </div>

                <div  style={{paddingTop:"15px"}} className="form-group">
                    <input type="password" className="form-control" placeholder="Нууц үг" required/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1"  style={{padding:"17px"}}> Сануулах</label>
                    </div>
                    <p className="forgot-password text-right">
                      <a href="/"> Нууц үг мартсан?</a>
                    </p>
                </div>

                <button type="submit" className="btn btn-primary" style={{width:"100%"}}> Нэвтрэх</button>
                
              </form>
            </div>
          </div>

        );
    }
}
