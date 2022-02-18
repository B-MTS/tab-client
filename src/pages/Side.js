import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList } from "react-icons/fa";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "./../Header.css";
import './../components/Navbar/navbar';
import {
  RigthArrow,
  LeftArrow,
  Logo,
  User,
  Group,
  Bag,
  Documents,
  UserB,
  GroupB,
  BagB,
  DocumentsB,
  DashboardW,
  Dashboard,
  Tailan,
  TailanB,
} from "../assets/images/zurag";
import "react-pro-sidebar/dist/css/styles.css";
import { useHistory } from "react-router-dom";
const Header = (props) => {
  
    const [menuCollapse, setMenuCollapse] = useState(false)
    const history = useHistory();
    const [menuClick, setMenuClick] = useState({
      menu0: false,
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      menu5: false,
      menu6: false,
      menu7: false,
      menu8: false,
    });
    const userDetils = JSON.parse(localStorage.getItem("userDetails"));
  const menuIconClick = () => {
  
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  function SelectMenu(value) {
    let temp = {
      menu0: false,
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      menu5: false,
      // menu6: false,
      // menu7: false,
    };
    setMenuClick({ ...temp, ...value });
    if (value?.menu0) {
      history.push("/web/dashboard");
      setMenuCollapse(true);
    } else if (value?.menu1) {
      history.push("/web/zaavar");
      setMenuCollapse(true);
    }
    // else if (value?.menu7) {
    //   history.push("/web/HuilTogtoomj/");
    //   history.push("/web/EmployeeInformation");
    //   setMenuCollapse(true);
    // }
  }
  return (
    <>
 
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>   
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? <img style={{marginTop:'10px', width: '45px', height: '35px'}} src="/small.png"  /> : <img style={{marginTop:'10px', width: '180px', height: '78px'}} src="/LOGOO.png"  />}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
          {userDetils.USER_TYPE_NAME !== "SURVEY" ? (
            <Menu iconShape="square">
              <MenuItem active={menuClick.menu0} icon={<FaList/>}>
              <div
                    className="CustomMenu"
                    onClick={() => SelectMenu({ menu0: !menuClick.menu0 })}
                  >
              
                    <p
                      className="MenuText"
                      style={{
                        color: `${menuClick.menu0 ? "#418ee6" : "black"}`,
                        marginBottom:'0'
                      }}
                    >
                      
                 Судалгаа
                    </p>
                  </div> </MenuItem>
           
            </Menu>
            ) : (
                <Menu iconShape="square"></Menu>)}
              
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
