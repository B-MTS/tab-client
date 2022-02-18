import React, { useEffect, useState, useReducer } from "react";
import { Table, Button } from 'reactstrap';
import { useLocation } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter , Label, Input } from 'reactstrap';
import { DataRequest } from "../functions/DataApi";
import dateFormat from "dateformat";
import Footer from '../Navbar/footer';
import './../../App.css';
import Sidebar from '../../pages/sidebar';
import Navbar from '../Navbar/navbar';
import { useAlert } from "react-alert";
import { Add, Edit, Delete } from "./../../assets/images/zurag"
import { FaKickstarterK } from "react-icons/fa";
import Header from '../../pages/Side';
const userDetils = JSON.parse(localStorage.getItem("userDetails"));


const Sudal7 = (props) => {  
 const {alert }= useAlert();
  const [edit, setEdit] = useState(true);
    const location = useLocation();
  const [jagsaalt, setJagsaalt] = useState([]);
  const [depId, setDepId] = useState(null);
  const [show, setShow] = useState(false);
  const [data, loadData] = useState(null);
  const [add, setAdd] = useState({ type: 0, id: 0, subid: 0,idx: 0 });
  const [idx,setIndex]=useState();
  const [dummy, setDummy] = useState(0);
 // const alert = useAlert();

  useEffect(() => {
    async function test() {
      let jagsaalts = await DataRequest({
       // url: "http://hr.audit.mn/public/api/v1/survey10/"+props?.SURVEY_ID,
        url: `http://hr.audit.mn/public/api/v1/survey5/${location.state}`,
        method: "GET",
        data: {},
      });
      setJagsaalt(jagsaalts?.data);
      console.log(jagsaalts);
    }
    test();
    console.log("jagsaalt", jagsaalt);
  }, [props,dummy]);
  

  return (
    <div class="pg-body-section">
 <div
      style={{
        height: "90vh",
        display: "flex",
        maxHeight: "100vh !important",
      }}
    >
      {/* <Header title="" /> */}
      <Header/>
      <div className="card"
        style={{
          position: "absolute",
          left: "20%",
          left: "7%",
          zIndex: 1,
          top: "20px",
        }}
      > 
     
      </div> 
  
      <div className="card"
        style={{
          backgroundColor: "white",
          width: "91%",
          height: "90%",
          marginTop: "110px",
          marginLeft: "3rem",
          overflow: "scroll",
        }}
      > 
        <div className="card"
          style={{
            borderRadius: "1px",
            backgroundColor: "rgba(0,0,0,.03)",
            padding: "5px",
            height: "40px",
            color: 'rgb(0, 45, 116)'
          }}
        >
        
            <div className="column columns is-4" style={{width:'80%'}}>
              {/* <img src={DownArrow} width="15px" style={{ marginLeft: "5px" }} /> */}
              <span
                style={{
                  color: 'rgb(0, 45, 116)',
                  fontWeight: "bold",
                  marginLeft: "5px",
                  fontSize: "1rem",
                }}
              >
               Төрийн бус байгууллагуудаас  2021 онд худалдан авсан  бараа, ажил үйлчилгээний төлбөрт олгосон санхүүжилт
              </span>
              <span
                style={{
                  marginLeft: "20px",
                  color: "white",
                  height: "25px",
                  width: "50px",
                  backgroundColor: "rgb(0, 45, 116)",
                  borderRadius: "50%",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                {jagsaalt.length}
              </span>
            </div>
            <div className="column is-4"></div>
         
              <img
                src={Add}
                width="30px"
                height="25px"
                style={{position:'absolute', right:'10px'}}
                onClick={() =>
                  setAdd({ type: 1, state: "new", path: "survey5/" }) 
                  
                }
              />
       
        
        </div>
        {add?.type !== 0 ? <AddDialog setAdd={setAdd} add={add} setDummy={setDummy} dummy={dummy} idx={idx}/> : null}
        <div style={{ display: "flex", flexDirection: "column" }}>

  <div>
  <Table  hover>
        <thead >
        <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>№</th>
  
  <th style={{border:'1px solid #ccc', textAlign:'center'}}  colspan="2">Хандивын гүйлгээний</th>
  <th style={{textAlign:'center',border:'1px solid #ccc'}}  colspan="5">Санхүүжүүлсэн төсөл арга хэмжээний</th>
  <th  style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}} colspan="2" rowspan="4">Гэрээний </th>
  <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Тайлант хугацаанд санхүүжүүлсэн дүн /төгрөгөөр/</th>
  <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Гэрээний хэрэгжилтийн дүгнэсэн эсэх</th>
        <th style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}} colspan="2" rowspan="4">Санхүүжүүлэх </th>
        <th style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}}  colspan="7"rowspan="4">Төрийн бус байгууллагын мэдээлэл</th>
        <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th>
  <tr>
  <th rowspan="7" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Огноо</th>
  <th rowspan="7" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Утга</th>
</tr>
  
   
<tr>
  <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зориулалт</th>
  <th colspan="4"  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Төсвийн гүйцэтгэлийн тайлангийн хөтөлбөр, арга хэмжээ /ТБОНӨААНБ-ууд энэ хэсэг хамааралгүй/</th>
</tr>

<tr>
  <th rowspan="5" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хөтөлбөрийн нэр</th>
  <th rowspan="5" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хөтөлбөрийн код</th>
  <th rowspan="5" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зориулалтын нэр</th>
  <th rowspan="5" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зориулалтын код</th>
</tr>
<tr>
  <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дүн /төгрөгөөр/</th>
  <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хугацаа</th>
</tr>



 <tr>
  <th rowspan="3" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Шаардлагатай байсан эсэх</th>
  <th rowspan="3" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Үр дүн, тайлбар, тодруулга</th>
</tr> 



<tr>
  <th rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Регистрийн дугаар</th>
  <th rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Нэр</th>
  <th rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Үйл ажиллагааны чиглэл</th>
  <th rowspan="4"  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Холбоо барих утас</th>
  
  <th  rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>И-мэйл хаяг</th>
  <th colspan="2" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Удирдлагын </th>
</tr>
<tr>
  <th  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Овог</th>
  <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Нэр</th>
</tr>

  
 
        
        </thead>
    
        
        <tbody>
    
        {jagsaalt.map((value, index) => (
                <tr>
        <th scope="row">{index+1}</th>
         <td>{value.DONATION_DATE}</td>
          <td>{value.DONATION_VALUE}</td>
          <td>{value.PROJECT_INTENT}</td>
          <td>{value.PROJECT_NAME}</td>
          <td>{value.PROJECT_CODE}</td>
          <td>{value.PROJECT_INTENT_NAME}</td>
          <td>{value.PROJECT_INTENT_CODE}</td>
          <td>{value.CONTRACT_AMOUNT}</td>
          <td>{value.CONTRACT_PERIOD}</td>
          <td>{value.CY_INVEST_AMOUNT}</td>
          <td>{value.IS_CONCLUTION === 1 ? (
                <span>Тийм</span>
            ) : value.IS_CONCLUTION === 2 ? (
              <span>Үгүй</span>
            ) : (
              <span>Хоосон</span>
            )}</td>
          <td>{value.IS_REQUIRED === 1 ? (
                <span>Тийм</span>
            ) : value.IS_REQUIRED === 2 ? (
              <span>Үгүй</span>
            ) : (
              <span>Хоосон</span>
            )}</td>
            <td>{value.INVEST_DESCRIPTION}</td>
          <td>{value.NGO_REGISTER_NO}</td>
          <td>{value.NGO_NAME}</td>
          <td>{value.NGO_ACTIVITY}</td>
          <td>{value.NGO_CONTACT}</td>
          <td>{value.NGO_EMAIL}</td>
          <td>{value.NGO_HEAD_LASTNAME}</td>
          <td>{value.NGO_HEAD_FIRSTNAME}</td>
          <td>    <img
                    src={Edit}
                    width="20px"
                    height="20px"
                    style={{ marginTop: "12px", cursor: "pointer" }}
                    onClick={() =>
                      setAdd({
                        type: 1,
                        id: value.ID,
                        path: "/survey5/" + value.ID,
                        idx: index
                      })
                    }
                  /></td>
              </tr>
       ))}
        </tbody>
      </Table>
  </div>

</div>
      </div>
      
      <Footer/>
    </div></div> 
  );
};

function AddDialog(props) { 
const alert= useAlert();
    const location = useLocation();
// console.log(location);  
const [modal, setModal] = React.useState(false);
  
const toggle = () => setModal(!modal);
const [show, setShow] = useState(false);
  const [data, loadData] = useState();
  const [, forceRender] = useReducer((s) => s + 1, 0);
  const [edit, setEdit] = useState(true);
  useEffect(() => {
    // console.log("jagsaaltBaaaaaaaaprops", props);
    async function test() {
      if (data === undefined || data === null) {
        if (props.add.state !== "new") {
          let jagsaalts = await DataRequest({
            url: "http://hr.audit.mn/public/api/v1/survey5/" + location.state, 
            // url:"http://hr.audit.mn/public/api/v1/survey10/111",
            method: "GET",
            data: {},
          });
        //   console.log("jagsaaltBaaaaaaaa", jagsaalts);
          if (jagsaalts.data !== undefined && jagsaalts.data.length !== 0)
            //loadData(jagsaalts?.data[props.add.idx]);
            loadData({ 
              P_ID: jagsaalts.data[props.add.idx].ID, 
              SURVEY_ID: location.state, 
              DONATION_DATE: jagsaalts?.data[props.add.idx].DONATION_DATE,
              DONATION_VALUE: jagsaalts.data[props.add.idx].DONATION_VALUE,
              PROJECT_INTENT: jagsaalts.data[props.add.idx].PROJECT_INTENT,
              PROJECT_NAME: jagsaalts.data[props.add.idx].PROJECT_NAME,
              PROJECT_CODE: jagsaalts.data[props.add.idx].PROJECT_CODE,    
              PROJECT_INTENT_NAME: jagsaalts.data[props.add.idx].PROJECT_INTENT_NAME,
              PROJECT_INTENT_CODE:jagsaalts.data[props.add.idx].PROJECT_INTENT_CODE,
              CONTRACT_AMOUNT: jagsaalts.data[props.add.idx].CONTRACT_AMOUNT,
              CONTRACT_PERIOD: jagsaalts.data[props.add.idx].CONTRACT_PERIOD,
              CY_INVEST_AMOUNT: jagsaalts.data[props.add.idx].CY_INVEST_AMOUNT,
              IS_CONCLUTION: jagsaalts.data[props.add.idx].IS_CONCLUTION,
              IS_REQUIRED: jagsaalts.data[props.add.idx].IS_REQUIRED,
              INVEST_DESCRIPTION: jagsaalts.data[props.add.idx].INVEST_DESCRIPTION,
              NGO_REGISTER_NO: jagsaalts.data[props.add.idx].NGO_REGISTER_NO,
              NGO_NAME: jagsaalts.data[props.add.idx].NGO_NAME,
              NGO_ACTIVITY: jagsaalts.data[props.add.idx].NGO_ACTIVITY,
              NGO_CONTACT: jagsaalts.data[props.add.idx].NGO_CONTACT,
              NGO_EMAIL: jagsaalts.data[props.add.idx].NGO_EMAIL,
              NGO_HEAD_LASTNAME: jagsaalts.data[props.add.idx].NGO_HEAD_LASTNAME,
              NGO_HEAD_FIRSTNAME: jagsaalts.data[props.add.idx].NGO_HEAD_FIRSTNAME,
              CREATED_BY: userDetils?.USER_ID,
          });
        } else {
          loadData({
           // P_ID: null,
            SURVEY_ID: location.state,
            DONATION_DATE: "",
            DONATION_VALUE: "",
            PROJECT_INTENT: "",
            PROJECT_NAME: "",
            PROJECT_CODE: "",
            PROJECT_INTENT_NAME: "",
            PROJECT_INTENT_CODE: "",
            CONTRACT_AMOUNT: "",
            CONTRACT_PERIOD: "",
            CY_INVEST_AMOUNT: "",
            IS_CONCLUTION: "",
            IS_REQUIRED: "",
            INVEST_DESCRIPTION: "",
            NGO_REGISTER_NO: "",
            NGO_NAME: "",
            NGO_ACTIVITY: "",
            NGO_CONTACT: "",
            NGO_EMAIL: "",
            NGO_HEAD_LASTNAME: "",
            NGO_HEAD_FIRSTNAME: "",
            CREATED_BY: userDetils?.USER_ID,
          });
        }
      }
    }
    test();
  }, [props]);

  function saveToDB() {
    //   console.log("-----datadatadata-----------",data);
    if (requiredField(data) === true) {
    // console.log("testAddDepartment", data);
    DataRequest({
     // url: "http://hr.audit.mn/hr/api/v1/" + props.add.path,
      url:"http://hr.audit.mn/public/api/v1/survey5Insert",
      method: "POST", 
      data: data,
    })
      .then(function (response) {
          console.log(data, "------------------------"); 
        // if (response?.status === 200) {
            if (response?.data?.message === "success") {
           // console.log('success')
        alert.show("амжилттай хадгаллаа");
        props.setDummy(props.dummy+1)
        setShow(false);
        console.log(show);
       // props.close(false);
        } else {
         //   console.log('failure',response) 
        
        alert.show("Системийн алдаа");
      console.log("haagdah");
        }
        //history.push('/sample')
      })
      .catch(function (error) {
        //alert(error.response.data.error.message);
        console.log(error.response);
       // console.log('failure')
        alert.show("Системийн алдаа");
      }); }
  }
  function requiredField() {
    if (data.DONATION_DATE === null || data.DONATION_DATE === "") {
     alert.show("Хандивын гүйлгээний огноо оруулна уу.");
  
      return false;
    }else if(data.DONATION_VALUE === null || data.DONATION_VALUE === "") {
      alert.show("Хандивын гүйлгээний утга оруулна уу.");
      return false;
    }else if(data.PROJECT_INTENT === null || data.PROJECT_INTENT === "") {
      alert.show("Санхүүжүүлсэн төсөл арга хэмжээний зориулалт оруулна уу.");
      return false;
    }
    else if(data.PROJECT_NAME === null || data.PROJECT_NAME === "") {
      alert.show("Санхүүжүүлсэн төсөл арга хэмжээний хөтөлбөрийн нэр оруулна уу.");
      return false;
    }else if(data.PROJECT_CODE === null || data.PROJECT_CODE === "") {
      alert.show("Санхүүжүүлсэн төсөл арга хэмжээний хөтөлбөрийн код оруулна уу.");
      return false;
    }else if(data.PROJECT_INTENT_NAME === null || data.PROJECT_INTENT_NAME === "") {
      alert.show("Санхүүжүүлсэн төсөл арга хэмжээний зориулалтын нэр оруулна уу.");
      return false;
    }else if(data.PROJECT_INTENT_CODE === null || data.PROJECT_INTENT_CODE === "") {
      alert.show("Санхүүжүүлсэн төсөл арга хэмжээний зориулалтын зод оруулна уу.");
      return false;
    }else if(data.CONTRACT_AMOUNT === null || data.CONTRACT_AMOUNT === "") {
      alert.show("Гэрээний дүн оруулна уу.");
      return false;
    }else if(data.CONTRACT_PERIOD === null || data.CONTRACT_PERIOD === "") {
      alert.show("Гэрээний хугацаа оруулна уу.");
      return false;
    }else if(data.CY_INVEST_AMOUNT === null || data.CY_INVEST_AMOUNT === "") {
      alert.show("Тайлант хугацаанд санхүүжүүлсэн дүн оруулна уу.");
      return false;
    }else if(data.IS_CONCLUTION === null || data.IS_CONCLUTION === "") {
      alert.show("Гэрээний хэрэгжилтийн дүгнэсэн эсэх талаар оруулна уу.");
      return false;
    }else if(data.NGO_REGISTER_NO === null || data.NGO_REGISTER_NO === "" || data.NGO_NAME === null || data.NGO_NAME === ""|| data.NGO_EMAIL === null || data.NGO_EMAIL === "") {
      alert.show("Төрийн бус байгууллагын мэдээлэл оруулна уу.");
      return false;
    }
     else {
      return true;
    }
  }
  let design;
  if (data !== undefined && data !== null) {
    design = (
      <div>
        <div
          style={{
            position: "absolute",
            width: "40%",
            height: "auto",
            left: "25%",
            top: "10%",
            borderRadius: "6px",
            backgroundColor: "white",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            zIndex: "1",
          }}
        >
         <div
            style={{
              height: "auto",
              backgroundColor: "#002d74",
              padding: "18px 10px 18px 10px",
              color: "white",
              marginBottom: "10px",
              borderTopLeftRadius: "6px",
              borderTopRightRadius: "6px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >

            <div>{/* <span>ТУШААЛЫН БҮРТГЭЛ</span> */}</div>
            <div>
            <span
                style={{
                  fontWeight: "bold",
              position:'absolute',
              left:'15px'
                }}
              >
                СУДАЛГААНЫ МАЯГТ
              </span>
              <span
                style={{
                  fontWeight: "bold",
                  cursor: " -webkit-grab",
                  cursor: "grab",
                
                }}
                onClick={() => props.setAdd({ type: 0, id: 0 })}
              >
                X
              </span>
            </div>
          </div>

      <div style={{height:"750px",background: '#f2f2f2',width:"100%",border:'double', font:"16px/26px Georgia, Garamond, Serif",overflow:"auto"}}>
            <div>
              {/* <div className="column"> */}
        <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хандивын гүйлгээ</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Oгноо:</h1>
            <input
                      type="date"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      className="input"
                      value={dateFormat(data?.DONATION_DATE, "yyyy-mm-dd")}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            DONATION_DATE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    ></input>
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Утга:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data?.DONATION_VALUE}
                    name="DONATION_VALUE"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          DONATION_VALUE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
              
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Санхүүжүүлсэн төсөл арга хэмжээний </b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зориулалт:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data.PROJECT_INTENT}
                    name="PROJECT_INTENT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          PROJECT_INTENT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
  <h1 style={{color:'#002d74',marginBottom:'20px', marginTop:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Төсвийн гүйцэтгэлийн тайлангийн хөтөлбөр, арга хэмжээ /ТБОНӨААНБ-ууд энэ хэсэг хамааралгүй/</b></h1>
            <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Хөтөлбөрийн нэр:</h1>
            <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data.PROJECT_NAME}
                    name="PROJECT_NAME"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          PROJECT_NAME:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Хөтөлбөрийн код:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.PROJECT_CODE}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PROJECT_CODE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
 <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зориулалтын нэр:</h1>
            <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data.PROJECT_INTENT_NAME}
                    name="PROJECT_INTENT_NAME"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          PROJECT_INTENT_NAME:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зориулалтын код:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.PROJECT_INTENT_CODE}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PROJECT_INTENT_CODE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                </div>

                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Гэрээ</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Дүн /төгрөгөөр/:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.CONTRACT_AMOUNT}
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          CONTRACT_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                   <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Хугацаа:</h1>
                   <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="text"
                    value={data.CONTRACT_PERIOD}
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          CONTRACT_PERIOD: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

</div>



<div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Тайлант хугацаанд санхүүжүүлсэн дүн </b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Дүн /төгрөгөөр/:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.CY_INVEST_AMOUNT}
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          CY_INVEST_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
              

</div>

<div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Гэрээний хэрэгжилтийн дүгнэсэн эсэх</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Гэрээний хэрэгжилтийн дүгнэсэн эсэх:</h1>
                  <Input id="IS_CONCLUTION"  type="select" name="IS_CONCLUTION" defaultValue={null} required
             class="input "
             style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
             value={data.IS_CONCLUTION}
             onChange={(e) =>
               loadData({
                 ...data,
                 ...{
                  IS_CONCLUTION: e.target.value,
                     UPDATED_BY: userDetils?.USER_ID,
                     UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                 },
               })
             }>
            <option value="">Та сонголт хийнэ үү.</option>
            <option value={1}>Тийм</option>
            <option value={2}>Үгүй</option>
       
          </Input>
</div>

<div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Санхүүжүүлэх</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
            <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Шаардлагатай байсан эсэх:</h1>
            <Input id="IS_REQUIRED"  type="select" name="IS_REQUIRED" defaultValue={null} required
             class="input "
             style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
             value={data.IS_REQUIRED}
             onChange={(e) =>
               loadData({
                 ...data,
                 ...{
                  IS_REQUIRED: e.target.value,
                     UPDATED_BY: userDetils?.USER_ID,
                     UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                 },
               })
             }>
            <option value="">Та сонголт хийнэ үү.</option>
            <option value={1}>Тийм</option>
            <option value={2}>Үгүй</option>
       
          </Input>
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Үр дүн, тайлбар, тодруулга:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="text"
                    value={data.INVEST_DESCRIPTION}
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          INVEST_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                  </div>


                  <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Төрийн бус байгууллагын мэдээлэл</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
          
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Регистрийн дугаар:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="text"
                    value={data.NGO_REGISTER_NO}
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          NGO_REGISTER_NO: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                      <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Нэр:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="text"
                    value={data.NGO_NAME}
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          NGO_NAME: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                         <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Үйл ажиллагааны чиглэл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="text"
                    value={data.NGO_ACTIVITY}
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          NGO_ACTIVITY: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                     <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Холбоо барих утас:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="text"
                    value={data.NGO_CONTACT}
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          NGO_CONTACT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                       <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>И-мэйл хаяг:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="text"
                    value={data.NGO_EMAIL}
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          NGO_EMAIL: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                   <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Удирдлагын овог:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="text"
                    value={data.NGO_HEAD_LASTNAME}
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          NGO_HEAD_LASTNAME: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                   <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Удирдлагын нэр:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="text"
                    value={data.NGO_HEAD_FIRSTNAME}
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          NGO_HEAD_FIRSTNAME: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                  </div>

          <br></br>
              <Button style={{font:"16px/26px Arial, Helvetica, sans-serif"}} color="danger"
                onClick={toggle}> <input id="agree" type="checkbox" required/> Судалгааг үнэн зөв бөглөсөн болно.</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle}>Судалгааг үнэн зөв бөглөөгүй тохиолдолд үүсэх эрх зүйн үр дагавар:</ModalHeader>
                <ModalBody>
                <img src="hariuts.png"></img>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Хаах</Button>
                </ModalFooter>
            </Modal>
                  <br></br>   <br></br>
          <button
                    className="buttonTsenkher ml-1"
                    onClick={() => {
                      saveToDB();
                    }}
                  >     Хадгалах
                  </button>
                </div>
  
         
          </div> 
        </div>
      </div>
    );
  } else {
    design = <div>Та түр хүлээнэ үү.</div>;
  }
  return design;
}


export default Sudal7;
