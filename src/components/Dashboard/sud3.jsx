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


const Sudal2 = (props) => {  
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
        url: `http://hr.audit.mn/public/api/v1/survey2_2/${location.state}`,
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
      Төрийн болон орон нутгийн өмчит, тэдгээрийн оролцоотой хуулийн этгээдийн 2021 оны санхүүгийн тайлангийн зарим үзүүлэлт
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
                  setAdd({ type: 1, state: "new", path: "survey2_2/" }) 
                  
                }
              />
         
        </div>
        {add?.type !== 0 ? <AddDialog setAdd={setAdd} add={add} setDummy={setDummy} dummy={dummy} idx={idx}/> : null}
        <div style={{ display: "flex", flexDirection: "column" }}>

  <div>
  <Table  hover>
        <thead >
       
            <th rowspan="16" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>№</th>
            <th colspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Авлага</th>
            <th rowspan="16"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Өөрчлөлтийн шалтгаан, тайлбар</th>
            <th colspan="2" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Эргэлтийн бус хөрөнгө</th>
            <th rowspan="16"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Өөрчлөлтийн шалтгаан, тайлбар</th>
            <th colspan="2" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Өр төлбөр</th>
            <th rowspan="16"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Өөрчлөлтийн шалтгаан, тайлбар</th>
            <th colspan="5" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Урт хугацаат өр төлбөр</th>
            <th colspan="2" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Өмчийн хэсэг нэмж төлөгдсөн капитал, эздийн өмчийн бусад хэсэг</th>
            <th rowspan="16"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Өөрчлөлтийн шалтгаан, тайлбар</th>
            <th colspan="2" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Борлуулалтын орлого</th>
            <th rowspan="16"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Өөрчлөлтийн шалтгаан, тайлбар</th>
            <th colspan="2" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Ашиг, алдагдал</th>
            <th colspan="8" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>2021 оны хөрөнгө оруулалтын эх үүсвэр</th>
            <th rowspan="16" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Үйлдэл</th>
  <tr>
    <th rowspan="15" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2021 оны үлдэгдэл</th>
    <th rowspan="15" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2022 оны үлдэгдэл </th>
  </tr>
  <tr>
    <th rowspan="13" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2021 оны үлдэгдэл</th>
    <th rowspan="13" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2022 оны үлдэгдэл </th>
  </tr>
  <tr>
    <th rowspan="12" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2021 оны үлдэгдэл</th>
    <th rowspan="12" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2022 оны үлдэгдэл </th>
  </tr>
  <tr>
  <th rowspan="11" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2021 оны үлдэгдэл</th>
    <th rowspan="11" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2022 оны үлдэгдэл </th>
    <th rowspan="11" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Үүссэн шалтгаан</th>
    <th rowspan="11" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Хугацаандаа төлөлт</th>
    <th rowspan="11" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Хугацаандаа барагдуулах боломж</th>
  </tr>
  <tr>
    <th rowspan="10" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2021 оны үлдэгдэл</th>
    <th rowspan="10" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2022 оны үлдэгдэл </th>
  </tr>
  <tr>
    <th rowspan="9" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2021 оны үлдэгдэл</th>
    <th rowspan="9" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2022 оны үлдэгдэл </th>
  </tr>
  <tr>
    <th rowspan="8" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2021 оны үлдэгдэл</th>
    <th rowspan="8" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2022 оны үлдэгдэл </th>
  </tr>
  <tr>
    <th colspan="2" rowspan="1" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Өөрийн хөрөнгөөр</th>
    <th  colspan="2" rowspan="1" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Улсын төсвөөс</th>
    <th colspan="2" rowspan="1" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Орон нутгийн төсвөөс</th>
    <th colspan="2" rowspan="1" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Төслийн санхүүжилтээр</th>
  </tr>
  <tr>
    <th rowspan="6" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2021 оны үлдэгдэл</th>
    <th rowspan="6" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2022 оны үлдэгдэл </th>
  </tr>
  <tr>
    <th rowspan="5" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2021 оны үлдэгдэл</th>
    <th rowspan="5" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2022 оны үлдэгдэл </th>
  </tr>
  <tr>
    <th rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2021 оны үлдэгдэл</th>
    <th rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2022 оны үлдэгдэл </th>
  </tr>
  <tr>
    <th rowspan="1" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2021 оны үлдэгдэл</th>
    <th rowspan="1" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>2022 оны үлдэгдэл </th>
  </tr>
        </thead>
    
        
        <tbody>
    
        {jagsaalt.map((value, index) => (
                <tr>
        <th scope="row">{index+1}</th>
         <td>{value.RECEIVE_PREV_AMOUNT}</td>
          <td>{value.RECEIVE_CY_AMOUNT}</td>
          <td>{value.RECEIVE_DESCRIPTION}</td>
          <td>{value.NONASSET_PREV_AMOUNT}</td>
          <td>{value.NONASSET_CY_AMOUNT}</td>
          <td>{value.NONASSET_DESCRIPTION}</td>
          <td>{value.DEBT_PREV_AMOUNT}</td>
          <td>{value.DEBT_CY_AMOUNT}</td>
          <td>{value.DEBT_DESCRIPTION}</td>
          <td>{value.LONG_DEBT_PREV_AMOUNT}</td>
          <td>{value.LONG_DEBT_CY_AMOUNT}</td>
          <td>{value.LONG_DEBT_DESCRIPTION}</td>
          <td>{value.LONG_DEBT_PAYMENT}</td>
          <td>{value.LONG_DEBT_IS_COMPLETE}</td>
          <td>{value.PROPERTY_PREV_AMOUNT}</td>
          <td>{value.PROPERTY_CY_AMOUNT}</td>
          <td>{value.PROPERTY_DESCRIPTION}</td>
          <td>{value.INCOME_PREV_AMOUNT}</td>
          <td>{value.INCOME_CY_AMOUNT}</td>
          <td>{value.INCOME_DESCRIPTION}</td>

          <td>{value.PROFIT_PREV_AMOUNT}</td>
          <td>{value.PROFIT_CY_AMOUNT}</td>
          <td>{value.INVEST_ORG_PREV_AMOUNT}</td>
          <td>{value.INVEST_ORG_CY_AMOUNT}</td>
          <td>{value.INVEST_STATE_PREV_AMOUNT}</td>
          <td>{value.INVEST_STATE_CY_AMOUNT}</td>
          <td>{value.INVEST_LOCAL_PREV_AMOUNT}</td>
          <td>{value.INVEST_LOCAL_CY_AMOUNT}</td>
          <td>{value.INVEST_PROJECT_PREV_AMOUNT}</td>
          <td>{value.INVEST_PROJECT_CY_AMOUNT}</td>
          <td>    <img
                    src={Edit}
                    width="20px"
                    height="20px"
                    style={{ marginTop: "12px", cursor: "pointer" }}
                    onClick={() =>
                      setAdd({
                        type: 1,
                        id: value.ID,
                        path: "/survey2_2/" + value.ID,
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
            url: "http://hr.audit.mn/public/api/v1/survey2_2/" + location.state, 
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
              RECEIVE_PREV_AMOUNT: jagsaalts?.data[props.add.idx].RECEIVE_PREV_AMOUNT,
              RECEIVE_CY_AMOUNT: jagsaalts.data[props.add.idx].RECEIVE_CY_AMOUNT,
              RECEIVE_DESCRIPTION: jagsaalts.data[props.add.idx].RECEIVE_DESCRIPTION,

              NONASSET_PREV_AMOUNT: jagsaalts.data[props.add.idx].NONASSET_PREV_AMOUNT,
              NONASSET_CY_AMOUNT: jagsaalts.data[props.add.idx].NONASSET_CY_AMOUNT,    
              NONASSET_DESCRIPTION: jagsaalts.data[props.add.idx].NONASSET_DESCRIPTION,
              DEBT_PREV_AMOUNT:jagsaalts.data[props.add.idx].DEBT_PREV_AMOUNT,
              DEBT_CY_AMOUNT: jagsaalts.data[props.add.idx].DEBT_CY_AMOUNT,
              DEBT_DESCRIPTION: jagsaalts.data[props.add.idx].DEBT_DESCRIPTION,
              LONG_DEBT_PREV_AMOUNT: jagsaalts.data[props.add.idx].LONG_DEBT_PREV_AMOUNT,
              LONG_DEBT_CY_AMOUNT: jagsaalts.data[props.add.idx].LONG_DEBT_CY_AMOUNT,
              LONG_DEBT_DESCRIPTION: jagsaalts.data[props.add.idx].LONG_DEBT_DESCRIPTION,    
              LONG_DEBT_PAYMENT: jagsaalts.data[props.add.idx].LONG_DEBT_PAYMENT,
              LONG_DEBT_IS_COMPLETE:jagsaalts.data[props.add.idx].LONG_DEBT_IS_COMPLETE,
              PROPERTY_PREV_AMOUNT: jagsaalts.data[props.add.idx].PROPERTY_PREV_AMOUNT,
              PROPERTY_CY_AMOUNT: jagsaalts.data[props.add.idx].PROPERTY_CY_AMOUNT,
              PROPERTY_DESCRIPTION: jagsaalts.data[props.add.idx].PROPERTY_DESCRIPTION,
              INCOME_PREV_AMOUNT: jagsaalts.data[props.add.idx].INCOME_PREV_AMOUNT,
              INCOME_CY_AMOUNT: jagsaalts.data[props.add.idx].INCOME_CY_AMOUNT,    
              INCOME_DESCRIPTION: jagsaalts.data[props.add.idx].INCOME_DESCRIPTION,
              PROFIT_PREV_AMOUNT:jagsaalts.data[props.add.idx].PROFIT_PREV_AMOUNT,
              PROFIT_CY_AMOUNT: jagsaalts.data[props.add.idx].PROFIT_CY_AMOUNT,
              INVEST_ORG_PREV_AMOUNT: jagsaalts.data[props.add.idx].INVEST_ORG_PREV_AMOUNT,
              INVEST_ORG_CY_AMOUNT: jagsaalts.data[props.add.idx].INVEST_ORG_CY_AMOUNT,
              INVEST_STATE_PREV_AMOUNT: jagsaalts.data[props.add.idx].INVEST_STATE_PREV_AMOUNT,
              INVEST_STATE_CY_AMOUNT: jagsaalts.data[props.add.idx].INVEST_STATE_CY_AMOUNT,
              INVEST_LOCAL_PREV_AMOUNT: jagsaalts.data[props.add.idx].INVEST_LOCAL_PREV_AMOUNT,
              INVEST_LOCAL_CY_AMOUNT: jagsaalts.data[props.add.idx].INVEST_LOCAL_CY_AMOUNT,
              INVEST_PROJECT_PREV_AMOUNT: jagsaalts.data[props.add.idx].INVEST_PROJECT_PREV_AMOUNT,
              INVEST_PROJECT_CY_AMOUNT: jagsaalts.data[props.add.idx].INVEST_PROJECT_CY_AMOUNT,
              CREATED_BY: userDetils?.USER_ID,
          });
        } else {
          loadData({
           // P_ID: null,
            SURVEY_ID: location.state,
            RECEIVE_PREV_AMOUNT: "",
            RECEIVE_CY_AMOUNT: "",
            RECEIVE_DESCRIPTION: "",
            NONASSET_PREV_AMOUNT: "",
            NONASSET_CY_AMOUNT: "",
            NONASSET_DESCRIPTION: "",
            DEBT_PREV_AMOUNT: "",
            DEBT_CY_AMOUNT: "",
            DEBT_DESCRIPTION: "",
            LONG_DEBT_PREV_AMOUNT: "",
            LONG_DEBT_CY_AMOUNT: "",
            LONG_DEBT_DESCRIPTION: "",
            LONG_DEBT_PAYMENT: "",
            LONG_DEBT_IS_COMPLETE: "",
            PROPERTY_PREV_AMOUNT: "",
            PROPERTY_CY_AMOUNT: "",
            PROPERTY_DESCRIPTION: "",
            INCOME_PREV_AMOUNT: "",
            INCOME_CY_AMOUNT: "",
            INCOME_DESCRIPTION: "",
            PROFIT_PREV_AMOUNT: "",
            PROFIT_CY_AMOUNT: "",
            INVEST_ORG_PREV_AMOUNT: "",
            INVEST_ORG_CY_AMOUNT: "",
            INVEST_STATE_PREV_AMOUNT: "",
            INVEST_STATE_CY_AMOUNT: "",
            INVEST_LOCAL_PREV_AMOUNT: "",
            INVEST_LOCAL_CY_AMOUNT: "",
            INVEST_PROJECT_PREV_AMOUNT: "",
            INVEST_PROJECT_CY_AMOUNT: "",
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
      url:"http://hr.audit.mn/public/api/v1/survey2_2Insert",
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
    if (data.RECEIVE_PREV_AMOUNT === null || data.RECEIVE_PREV_AMOUNT === "") {
     alert.show("Авлага оруулна уу");
  
      return false;
    }else if(data.RECEIVE_DESCRIPTION === null || data.RECEIVE_DESCRIPTION === "") {
      alert.show("Өөрчлөлтийн шалтгаан, тайлбар оруулна уу");
      return false;
    }
    else if(data.NONASSET_PREV_AMOUNT === null || data.NONASSET_PREV_AMOUNT === "") {
      alert.show("Эргэлтийн бус хөрөнгө оруулна уу");
      return false;
    }
    else if(data.PROFIT_CY_AMOUNT === null || data.PROFIT_CY_AMOUNT === "") {
      alert.show("Ашиг, алдагдал оруулна уу");
      return false;
    }
    else if(data.DEBT_PREV_AMOUNT === null || data.DEBT_PREV_AMOUNT === "") {
      alert.show("Өр төлбөр оруулна уу");
      return false;
    }
    else if(data.INVEST_PROJECT_PREV_AMOUNT === null || data.INVEST_PROJECT_PREV_AMOUNT === "") {
      alert.show("2021 оны хөрөнгө оруулалтын эх үүсвэр оруулна уу");
      return false;
    }
    else if(data.LONG_DEBT_CY_AMOUNT === null || data.LONG_DEBT_CY_AMOUNT === "") {
      alert.show("Урт хугацаат өр төлбөр оруулна уу");
      return false;
    }
    else if(data.INCOME_CY_AMOUNT === null || data.INCOME_CY_AMOUNT === "") {
      alert.show("Борлуулалтын орлого оруулна уу");
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
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Авлага</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2021 оны үлдэгдэл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.RECEIVE_PREV_AMOUNT}
                    name="RECEIVE_PREV_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          RECEIVE_PREV_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2022 оны үлдэгдэл :</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.RECEIVE_CY_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            RECEIVE_CY_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Өөрчлөлтийн шалтгаан, тайлбар:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.RECEIVE_DESCRIPTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            RECEIVE_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                       
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Эргэлтийн бус хөрөнгө</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2021 оны үлдэгдэл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.NONASSET_PREV_AMOUNT}
                    name="NONASSET_PREV_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          NONASSET_PREV_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2022 оны үлдэгдэл :</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.NONASSET_CY_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            NONASSET_CY_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Өөрчлөлтийн шалтгаан, тайлбар:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.NONASSET_DESCRIPTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            NONASSET_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                       
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Өр төлбөр</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2021 оны үлдэгдэл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.DEBT_PREV_AMOUNT}
                    name="DEBT_PREV_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          DEBT_PREV_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2022 оны үлдэгдэл :</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.DEBT_CY_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            DEBT_CY_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Өөрчлөлтийн шалтгаан, тайлбар:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.DEBT_DESCRIPTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            DEBT_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                       
                </div>


                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Урт хугацаат өр төлбөр</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2021 оны үлдэгдэл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.LONG_DEBT_PREV_AMOUNT}
                    name="LONG_DEBT_PREV_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          LONG_DEBT_PREV_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2022 оны үлдэгдэл :</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.LONG_DEBT_CY_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            LONG_DEBT_CY_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Үүссэн шалтгаан:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.LONG_DEBT_DESCRIPTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            LONG_DEBT_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />


<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зээлийн төлөлөлт график хугацаандаа төлөлтөө хийж байгаа юу?</h1>
            <Input id="LONG_DEBT_PAYMENT"  type="select" name="LONG_DEBT_PAYMENT" defaultValue={null} required
             class="input "
             style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
             value={data.LONG_DEBT_PAYMENT}
             onChange={(e) =>
               loadData({
                 ...data,
                 ...{
                  LONG_DEBT_PAYMENT: e.target.value,
                     UPDATED_BY: userDetils?.USER_ID,
                     UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                 },
               })
             }>
            <option value="">Та сонголт хийнэ үү.</option>
            <option>Тийм</option>
            <option>Үгүй</option>
       
          </Input>



          
<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Графикт хугацаандаа барагдуулах боломжой юу?</h1>
            <Input id="LONG_DEBT_IS_COMPLETE"  type="select" name="LONG_DEBT_IS_COMPLETE" defaultValue={null} required
             class="input "
             style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
             value={data.LONG_DEBT_IS_COMPLETE}
             onChange={(e) =>
               loadData({
                 ...data,
                 ...{
                  LONG_DEBT_IS_COMPLETE: e.target.value,
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
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Өмчийн хэсэг/төр, хувийн, хувьцаа/, нэмж төлөгдсөн капитал, эздийн өмчийн бусад хэсэг</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2021 оны үлдэгдэл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.PROPERTY_PREV_AMOUNT}
                    name="PROPERTY_PREV_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          PROPERTY_PREV_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2022 оны үлдэгдэл :</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.PROPERTY_CY_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PROPERTY_CY_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Өөрчлөлтийн шалтгаан, тайлбар:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.PROPERTY_DESCRIPTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PROPERTY_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                       
                </div>



                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Борлуулалтын орлого</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2021 оны үлдэгдэл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.INCOME_PREV_AMOUNT}
                    name="INCOME_PREV_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          INCOME_PREV_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2022 оны үлдэгдэл :</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.INCOME_CY_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            INCOME_CY_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Өөрчлөлтийн шалтгаан, тайлбар:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.INCOME_DESCRIPTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            INCOME_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                       
                </div>




                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Ашиг, алдагдал</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2021 оны үлдэгдэл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.PROFIT_PREV_AMOUNT}
                    name="PROFIT_PREV_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          PROFIT_PREV_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2022 оны үлдэгдэл :</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.PROFIT_CY_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PROFIT_CY_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />

                    </div>
                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>2021 оны хөрөнгө оруулалтын эх үүсвэр</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
<h1 style={{color:'#002d74',marginBottom:'20px', marginTop:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Өөрийн хөрөнгөөр</b></h1>
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2021 оны үлдэгдэл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.INVEST_ORG_PREV_AMOUNT}
                    name="INVEST_ORG_PREV_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          INVEST_ORG_PREV_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2022 оны үлдэгдэл :</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.INVEST_ORG_CY_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            INVEST_ORG_CY_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
<h1 style={{color:'#002d74',marginBottom:'20px', marginTop:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Улсын төсвөөс</b></h1>
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2021 оны үлдэгдэл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.INVEST_STATE_PREV_AMOUNT}
                    name="INVEST_STATE_PREV_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          INVEST_STATE_PREV_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2022 оны үлдэгдэл :</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.INVEST_STATE_CY_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            INVEST_STATE_CY_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                    <h1 style={{color:'#002d74',marginBottom:'20px', marginTop:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Орон нутгийн төсвөөс</b></h1>
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2021 оны үлдэгдэл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.INVEST_LOCAL_PREV_AMOUNT}
                    name="INVEST_LOCAL_PREV_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          INVEST_LOCAL_PREV_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2022 оны үлдэгдэл :</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.INVEST_LOCAL_CY_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            INVEST_LOCAL_CY_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                    <h1 style={{color:'#002d74',marginBottom:'20px', marginTop:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Төслийн санхүүжилтээр</b></h1>
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2021 оны үлдэгдэл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.INVEST_PROJECT_PREV_AMOUNT}
                    name="INVEST_PROJECT_PREV_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          INVEST_PROJECT_PREV_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>2022 оны үлдэгдэл :</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.INVEST_PROJECT_CY_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            INVEST_PROJECT_CY_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
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


export default Sudal2;
