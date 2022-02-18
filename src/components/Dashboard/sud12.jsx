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


const Sudal12 = (props) => {  
 const {alert }= useAlert();
  const [edit, setEdit] = useState(true);
    const location = useLocation();
  const [jagsaalt, setJagsaalt] = useState([]);
  const [depId, setDepId] = useState(null);
  const [show, setShow] = useState(false);
  const [data, loadData] = useState(null);
  const [add, setAdd] = useState({ type: 0, id: 0, subid: 0,idx: 0 });
  const [idx,setIndex]=useState()
  const [dummy, setDummy] = useState(0);
 // const alert = useAlert();

  useEffect(() => {
    async function test() {
      let jagsaalts = await DataRequest({
       // url: "http://hr.audit.mn/public/api/v1/survey10/"+props?.SURVEY_ID,
        url: `http://hr.audit.mn/public/api/v1/survey10/${location.state}`,
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
      
            <div className="columns column is-4" style={{width:'80%'}}>
              {/* <img src={DownArrow} width="15px" style={{ marginLeft: "5px" }} /> */}
              <span
                style={{
                  color: 'rgb(0, 45, 116)',
                  fontWeight: "bold",
                  marginLeft: "5px",
                  fontSize: "1rem",
                }}
              >
                Хэвлэл мэдээллийн байгууллагуудтай байгуулсан ажил, үйлчилгээний гэрээ, төлбөрийн мэдээлэл
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
        
       
              <img
                src={Add}
                width="30px"
                height="25px"
                style={{position:'absolute', right:'10px'}}
                onClick={() =>
                  setAdd({ type: 1, state: "new", path: "survey10/" }) 
                  
                }
              />
       
     
        </div>
        {add?.type !== 0 ? <AddDialog setAdd={setAdd} add={add} setDummy={setDummy} dummy={dummy} idx={idx}/> : null}
        <div style={{ display: "flex", flexDirection: "column" }}>

  <div>
  <Table  hover>
        <thead >
        <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>№</th>
            <th colspan="3"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>Хэвлэл, мэдээллийн байгууллагын</th>
            <th colspan="7"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Гэрээт ажлын мэдээлэл</th>
            <th colspan="3"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Бусад</th>
            <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th>


  <tr>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Нэр </th>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Регистрийн дугаар</th>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Төрөл</th>
  </tr>

  
  <tr>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Гэрээт ажлын нэр</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}> Огноо</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дугаар </th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Эхлэх хугацаа</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дуусах хугацаа</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Гэрээний төлбөр</th>
    <th rowspan="4"   style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Худалдан авах ажиллагааны сонгон шалгаруулалтын хэлбэр  </th>
  </tr>

  <tr>
    <th  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зардлын төрөл</th>
    <th  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Худалдан авалтын төлөвлөгөөнд туссан эсэх</th>
    <th  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Он дамжиж хэрэгжиж байгаа эсэх</th>
  </tr>

  
 
        
        </thead>
    
        
        <tbody>
    
        {jagsaalt.map((value, index) => (
                <tr>
        <th scope="row">{index+1}</th>
         <td>{value.MEDIA_NAME}</td>
          <td>{value.MEDIA_REGISTER_NO}</td>
          <td>{value.MEDIA_TYPE}</td>
          <td>{value.CONTRACT_NAME}</td>
          <td>{value.CONTRACT_DATE}</td>
          <td>{value.CONTRACT_NO}</td>
          <td>{value.BEGIN_DATE}</td>
          <td>{value.END_DATE}</td>
          <td>{value.CONTRACT_AMOUNT}</td>
          <td>{value.PROCUREMENT_TYPE}</td>
          <td>{value.COST_TYPE}</td>
          <td>{value.IS_PLANNED === 1 ? (
                <span>Тийм</span>
            ) : value.IS_PLANNED === 2 ? (
              <span>Үгүй</span>
            ) : (
              <span>Хоосон</span>
            )}</td>
          <td>{value.IS_PREV === 1 ? (
                <span>Тийм</span>
            ) : value.IS_PREV === 2 ? (
              <span>Үгүй</span>
            ) : (
              <span>Хоосон</span>
            )}</td>
          
          <td>    <img
                    src={Edit}
                    width="20px"
                    height="20px"
                    style={{ marginTop: "12px", cursor: "pointer" }}
                    onClick={() =>
                      setAdd({
                        type: 1,
                        id: value.ID,
                        path: "/survey10/" + value.ID,
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
            url: "http://hr.audit.mn/public/api/v1/survey10/" + location.state, 
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
              MEDIA_NAME: jagsaalts?.data[props.add.idx].MEDIA_NAME,
              MEDIA_REGISTER_NO: jagsaalts.data[props.add.idx].MEDIA_REGISTER_NO,
              MEDIA_TYPE: jagsaalts.data[props.add.idx].MEDIA_TYPE,
              CONTRACT_NAME: jagsaalts.data[props.add.idx].CONTRACT_NAME,
              CONTRACT_DATE: jagsaalts.data[props.add.idx].CONTRACT_DATE,    
              CONTRACT_NO: jagsaalts.data[props.add.idx].CONTRACT_NO,
              BEGIN_DATE:jagsaalts.data[props.add.idx].BEGIN_DATE,
              END_DATE: jagsaalts.data[props.add.idx].END_DATE,
              CONTRACT_AMOUNT: jagsaalts.data[props.add.idx].CONTRACT_AMOUNT,
              PROCUREMENT_TYPE: jagsaalts.data[props.add.idx].PROCUREMENT_TYPE,
              COST_TYPE: jagsaalts.data[props.add.idx].COST_TYPE,
              IS_PLANNED: jagsaalts.data[props.add.idx].IS_PLANNED,
              IS_PREV: jagsaalts.data[props.add.idx].IS_PREV,
              CREATED_BY: userDetils?.USER_ID,
          });
        } else {
          loadData({
           // P_ID: null,
            SURVEY_ID: location.state,
            MEDIA_NAME: "",
            MEDIA_REGISTER_NO: "",
            MEDIA_TYPE: "",
            CONTRACT_NAME: "",
            CONTRACT_DATE: "",
            CONTRACT_NO: "",
            BEGIN_DATE: "",
            END_DATE: "",
            CONTRACT_AMOUNT: "",
            PROCUREMENT_TYPE: "",
            COST_TYPE: "",
            IS_PLANNED: "",
            IS_PREV: "",
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
      url:"http://hr.audit.mn/public/api/v1/survey10Insert",
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
    if (data.MEDIA_NAME === null || data.MEDIA_NAME === "") {
     alert.show("Хэвлэл мэдээллийн байгууллагын нэр оруулна уу.");
  
      return false;
    }else if(data.MEDIA_REGISTER_NO === null || data.MEDIA_REGISTER_NO === "") {
      alert.show("Хэвлэл мэдээллийн байгууллагын регистрийн дугаар оруулна уу.");
      return false;
    }else if(data.MEDIA_TYPE === null || data.MEDIA_TYPE === "") {
      alert.show("Хэвлэл мэдээллийн байгууллагын төрөл оруулна уу.");
      return false;
    }
    else if(data.CONTRACT_NAME === null || data.CONTRACT_NAME === "") {
      alert.show("Гэрээт ажлын нэр оруулна уу.");
      return false;
    }else if(data.CONTRACT_DATE === null || data.CONTRACT_DATE === "") {
      alert.show("Гэрээт ажлын огноо оруулна уу.");
      return false;
    }else if(data.CONTRACT_NO === null || data.CONTRACT_NO === "") {
      alert.show("Гэрээт ажлын дугаар оруулна уу.");
      return false;
    }else if(data.BEGIN_DATE === null || data.BEGIN_DATE === "") {
      alert.show("Гэрээт ажлын хугацаа оруулна уу.");
      return false;
    }else if(data.CONTRACT_AMOUNT === null || data.CONTRACT_AMOUNT === "") {
      alert.show("Гэрээний төлбөр оруулна уу.");
      return false;
    }else if(data.PROCUREMENT_TYPE === null || data.PROCUREMENT_TYPE === "") {
      alert.show("Худалдан авах ажиллагааны сонгон шалгаруулалтын хэлбэр оруулна уу.");
      return false;
    }else if(data.COST_TYPE === null || data.COST_TYPE === "") {
      alert.show("Зардлын төрөл оруулна уу.");
      return false;
    }else if(data.IS_PLANNED === null || data.IS_PLANNED === "") {
      alert.show("Худалдан авалтын төлөвлөгөөнд туссан эсэх талаар оруулна уу.");
      return false;
    }else if(data.IS_PREV === null || data.IS_PREV === "") {
      alert.show("Он дамжиж хэрэгжиж байгаа эсэх талаар оруулна уу.");
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
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хэвлэл, мэдээллийн байгууллагын:</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Нэр:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data?.MEDIA_NAME}
                    name="MEDIA_NAME"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                            MEDIA_NAME: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Регистрийн дугаар:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data.MEDIA_REGISTER_NO}
                    name="MEDIA_REGISTER_NO"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                            MEDIA_REGISTER_NO: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Төрөл:</h1>
                <Input id="MEDIA_TYPE"  type="select" name="MEDIA_TYPE" defaultValue={null} required
                class="input "
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                value={data.MEDIA_TYPE}
                name="MEDIA_TYPE"
                onChange={(e) =>
                  loadData({
                    ...data,
                    ...{
                        MEDIA_TYPE:e.target.value,
                        UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                    },
                  })
                }>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Радио, FM</option>
            <option>Телевиз</option>
            <option>Сонин, сэтгүүл</option>
            <option>Цахим сайт </option>
       
          </Input>
              
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Гэрээт ажлын мэдээлэл</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Гэрээт ажлын нэр:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data.CONTRACT_NAME}
                    name="CONTRACT_NAME"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                            CONTRACT_NAME:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Oгноо:</h1>
            <input
                      type="date"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      className="input"
                      value={dateFormat(data?.CONTRACT_DATE, "yyyy-mm-dd")}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            CONTRACT_DATE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    ></input>
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Дугаар:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.CONTRACT_NO}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            CONTRACT_NO: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />


           <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Эхлэх хугацаа:</h1>
            <input
                      type="date"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      className="input"
                      value={dateFormat(data?.BEGIN_DATE, "yyyy-mm-dd")}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            BEGIN_DATE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    ></input>


<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Дуусах хугацаа:</h1>
            <input
                      type="date"
                      className="input"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      //value={dateFormat(data?.END_DATE, "yyyy-mm-dd")}
                      value={dateFormat(data?.END_DATE, "yyyy-mm-dd")}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            END_DATE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    ></input>
                       <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Гэрээний төлбөр:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      name="CONTRACT_AMOUNT"
                      value={data.CONTRACT_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            CONTRACT_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
            <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Худалдан авах ажиллагааны сонгон шалгаруулалтын хэлбэр:</h1>
            <Input id="PROCUREMENT_TYPE"  type="select" name="PROCUREMENT_TYPE" defaultValue={null} required
           value={data.PROCUREMENT_TYPE}
           style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
           onChange={(e) => {
             loadData({
               ...data,
               ...{
                PROCUREMENT_TYPE: e.target.value,
                 UPDATED_BY: userDetils?.USER_ID,
                 UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
               },
             });
           }} >
                <option value="">Та сонголт хийнэ үү.</option>
                <option>Шууд худалдан авалт</option>
                <option>Харьцуулсан тендер</option>
                <option>Нээлттэй тендер</option>
          </Input>

                </div>

                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Бусад</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зардлын төрөл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data.COST_TYPE}
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                            COST_TYPE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />


            <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Худалдан авалтын төлөвлөгөөнд туссан эсэх:</h1>
            <Input id="IS_PLANNED"  type="select" name="IS_PLANNED" defaultValue={null} required
             class="input "
             style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
             value={data.IS_PLANNED}
             onChange={(e) =>
               loadData({
                 ...data,
                 ...{
                    IS_PLANNED: e.target.value,
                     UPDATED_BY: userDetils?.USER_ID,
                     UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                 },
               })
             }>
            <option value="">Та сонголт хийнэ үү.</option>
            <option value={1}>Тийм</option>
            <option value={2}>Үгүй</option>
       
          </Input>
          
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Он дамжиж хэрэгжиж байгаа эсэх:</h1>
            <Input id="IS_PREV"  type="select" name="IS_PREV" defaultValue={null} required  class="input "
             value={data.IS_PREV}
             style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
             onChange={(e) =>
               loadData({
                 ...data,
                 ...{
                    IS_PREV: e.target.value,
                     UPDATED_BY: userDetils?.USER_ID,
                     UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                 },
               })
             }>
            <option value="">Та сонголт хийнэ үү.</option>
            <option value={1}>Тийм</option>
            <option value={2}>Үгүй</option>
       
          </Input>
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
      </div>
    );
  } else {
    design = <div>Та түр хүлээнэ үү.</div>;
  }
  return design;
}


export default Sudal12;
