import React, { useEffect, useState, useReducer } from "react";
import { Table, Button } from 'reactstrap';
import { useLocation } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter , Label, Input } from 'reactstrap';
import { DataRequest } from "../functions/DataApi";
import dateFormat from "dateformat";
import Footer from '../Navbar/footer';
import './../../App.css';
import Sidebar from '../../pages/sidebar';
import Header from '../../pages/Side';
import Navbar from '../Navbar/navbar';
import { useAlert } from "react-alert";
import { Add, Edit, Delete } from "./../../assets/images/zurag"
const userDetils = JSON.parse(localStorage.getItem("userDetails"));


const Sudal8 = (props) => {  

  const location = useLocation();
  const [jagsaalt, setJagsaalt] = useState([]);
  const [depId, setDepId] = useState(null);
  const [menu, menuStatus] = useState(null);
  const [show, setShow] = useState(true);
  const [data, loadData] = useState(null);
  const [add, setAdd] = useState({ type: 0, id: 0, subid: 0,idx: 0 });
  const [idx,setIndex]=useState();
  const [isOpen, setIsopen] = useState(false);
  const [dummy, setDummy] = useState(0);
  //const alert = useAlert();
  
  const ToggleSidebar = () => {
    const [show, sideShow] = useState(true);
    
      switch(menuStatus)
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
  useEffect(() => {
    async function test() {
      let jagsaalts = await DataRequest({
       // url: "http://hr.audit.mn/public/api/v1/survey10/"+props?.SURVEY_ID,
        url: "http://hr.audit.mn/public/api/v1/survey6/" + location.state, 
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
       
            <div className="columns column is-4" style={{width:"80%"}}>
              {/* <img src={DownArrow} width="15px" style={{ marginLeft: "5px" }} /> */}
              <span
                style={{
                  color: 'rgb(0, 45, 116)',
                  fontWeight: "bold",

                  marginLeft: "5px",
                  fontSize: "1rem",
                }}
              >
           Ковид-19 цар тахалтай холбоотойгоор аж ахуйн нэгж, байгууллага, иргэдээс өгсөн хандив 
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
              <img
                src={Add}
                width="30px"
                height="25px"
                style={{position:'absolute', right:'10px'}}
                onClick={() =>
                  setAdd({ type: 1, state: "new", path: "survey6/" }) 
                  
                }
              />
    
          
           
          </div>
        </div>
        {add?.type !== 0 ? <AddDialog setAdd={setAdd} add={add} setDummy={setDummy} dummy={dummy} idx={idx}/> : null}
        <div style={{ display: "flex", flexDirection: "column" }}>

  <div>
  
  <Table responsive hover>
        <thead>
        <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>№</th>
            <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Хандив өгсөн иргэн, байгууллагын нэр</th>
            <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Хөрөнгийн ангилал</th>
              <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Хандивын орлогын дүн</th>
             <th style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}} colspan="2">Нягтлан бодох бүртгэлд тусгасан</th>
   <th  style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}} colspan="2">Хандивыг зарцуулах тухай шийдвэрийн</th>
   <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Хандивын зарцуулалтын дүн </th>  
    <th rowspan="2" style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}} colspan="1">Үүнээс: </th>
   <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үлдэгдэл дүн </th>
            <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th>
  <tr>
    <th rowspan="6"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дансны нэр</th>
    <th rowspan="6"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Мөнгөн дүн </th>
    
  </tr>

  <tr>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Огноо</th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дугаар</th>
    
  </tr>

  <tr>
    <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зориулалт бусаар зарцуулсан дүн</th>
    
  </tr>
        </thead>
    
        
        <tbody>
        {jagsaalt.map((value, index) => (
                <tr>
        <th scope="row">{index+1}</th>
        <td>{value.DONATER_NAME}</td>
          <td>{value.DONATION_TYPE_ID === 1 ? (
                <span>Мөнгө</span>
            ) : value.DONATION_TYPE_ID === 2 ? (
              <span>Бараа материал</span>
            ): value.DONATION_TYPE_ID === 3 ? (
              <span>Үндсэн хөрөнгө</span>
            ): value.DONATION_TYPE_ID === 4 ? (
              <span>Мал амьтад</span>
            )
             : (
              <span>Хоосон</span>
            )}</td>
          <td>{value.DONATION_AMOUNT}</td>
          <td>{value.ACCOUNT_NAME}</td>
          <td>{value.ACCOUNT_AMOUNT}</td>
          <td>{value.COST_DATE}</td>
          <td>{value.COST_DOCUMENT_NO}</td>
          <td>{value.COST_AMOUNT}</td>
          <td>{value.COST_ERROR_AMOUNT}</td>
          <td>{value.C2_AMOUNT}</td>
          <td>  <img
                    src={Edit}
                    width="20px"
                    height="20px"
                    style={{ marginTop: "12px", cursor: "pointer" }}
                    onClick={() =>
                      setAdd({
                        type: 1,
                        id: value.ID,
                        path: "/survey6/" + value.ID,
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
            url: "http://hr.audit.mn/public/api/v1/survey6/" + location.state, 
            // url:"http://hr.audit.mn/public/api/v1/survey10/111",
            method: "GET",
            data: {},
          });
        //   console.log("jagsaaltBaaaaaaaa", jagsaalts);
          if (jagsaalts.data !== undefined && jagsaalts.data.length !== 0)

            loadData({
              P_ID: jagsaalts.data[props.add.idx].ID, 
              SURVEY_ID: jagsaalts.data[props.add.idx].SURVEY_ID,
              DONATER_NAME:jagsaalts.data[props.add.idx].DONATER_NAME,
              DONATION_TYPE_ID:jagsaalts.data[props.add.idx].DONATION_TYPE_ID,
              DONATION_AMOUNT:jagsaalts.data[props.add.idx].DONATION_AMOUNT,
              ACCOUNT_NAME:jagsaalts.data[props.add.idx].ACCOUNT_NAME,
              ACCOUNT_AMOUNT:jagsaalts.data[props.add.idx].ACCOUNT_AMOUNT,
              COST_DATE:jagsaalts.data[props.add.idx].COST_DATE,
              COST_DOCUMENT_NO: jagsaalts.data[props.add.idx].COST_DOCUMENT_NO,
              COST_AMOUNT: jagsaalts.data[props.add.idx].COST_AMOUNT,
              COST_ERROR_AMOUNT: jagsaalts.data[props.add.idx].COST_ERROR_AMOUNT,
              C2_AMOUNT: jagsaalts.data[props.add.idx].C2_AMOUNT,
              CREATED_BY: userDetils?.USER_ID,  
            });
        } else {
          loadData({
            P_ID: null, 
            SURVEY_ID: location.state, 
            DONATER_NAME:'',
            DONATION_TYPE_ID:'',
            DONATION_AMOUNT:'',
            ACCOUNT_NAME:'',
            ACCOUNT_AMOUNT:'',
            COST_DATE:'',
            COST_DOCUMENT_NO: '',
            COST_AMOUNT: '',
            COST_ERROR_AMOUNT: '',
            C2_AMOUNT: '',
            CREATED_BY: userDetils?.USER_ID,  
          });
        }
      }
    }
    test();
  }, [props]);

  function saveToDB() {
    //console.log("-----datadatadata-----------",data);
  
    // console.log("testAddDepartment", data);
    if (requiredField(data) === true) {
    DataRequest({
     // url: "http://hr.audit.mn/hr/api/v1/" + props.add.path,
      url:"http://hr.audit.mn/public/api/v1/survey6Insert",
      method: "POST",
      data: data,
    })
      .then(function (response) {
          console.log(data); 
        // if (response?.status === 200) {
            if (response?.data?.message === "success") {
            console.log('success')
        alert.show("амжилттай хадгаллаа");
        props.setDummy(props.dummy+1)
        setEdit(!edit);
        } else {
            console.log('failure',response) 
        alert.show("Системийн алдаа");
        }
        //history.push('/sample')
      })
      .catch(function (error) {
        //alert(error.response.data.error.message);
        console.log(error.response);
        console.log('failure');
        alert.show("Системийн алдаа");
      });}
  }
  function requiredField() {
    if (data.DONATER_NAME === null || data.DONATER_NAME === "") {
     alert.show("Хандив өгсөн иргэн, байгууллагын нэр оруулна уу");
  
      return false;
    }else if(data.DONATION_TYPE_ID === null || data.DONATION_TYPE_ID === "") {
      alert.show("Хөрөнгийн ангилал оруулна уу");
      return false;
    }
    else if(data.DONATION_AMOUNT === null || data.DONATION_AMOUNT === "") {
      alert.show("Хандивын орлогын дүн оруулна уу");
      return false;
    }
    else if(data.ACCOUNT_NAME === null || data.ACCOUNT_NAME === "") {
      alert.show("Нягтлан бодох бүртгэлд тусгасан дансны нэр оруулна уу");
      return false;
    }
    else if(data.ACCOUNT_AMOUNT === null || data.ACCOUNT_AMOUNT === "") {
      alert.show("Нягтлан бодох бүртгэлд тусгасан мөнгөн дүн оруулна уу");
      return false;
    }
    else if(data.COST_DATE === null || data.COST_DATE === "") {
      alert.show("Огноо оруулна уу");
      return false;
    }
    else if(data.COST_DOCUMENT_NO === null || data.COST_DOCUMENT_NO === "") {
      alert.show("Дугаар оруулна уу");
      return false;
    }
    else if(data.COST_AMOUNT === null || data.COST_AMOUNT === "") {
      alert.show("Хандивын зарцуулалтын дүн оруулна уу");
      return false;
    }
    else if(data.COST_ERROR_AMOUNT === null || data.COST_ERROR_AMOUNT === "") {
      alert.show("Зориулалт бусаар зарцуулсан дүн оруулна уу");
      return false;
    }
    else if(data.C2_AMOUNT === null || data.C2_AMOUNT === "") {
      alert.show("Үлдэгдэл дүн оруулна уу");
      return false;
    }
    
     else {
      return true;
    }
  }
  let design;
  if (data != undefined && data !== null) {
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
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хандив өгсөн иргэн, байгууллагын нэр</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Байгууллагын нэр:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="text"
                  value={data?.DONATER_NAME}
                  name="DONATER_NAME"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        DONATER_NAME: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                </div>
                 <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
                 <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хөрөнгийн ангилал</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
                 <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Хөрөнгийн ангилал:</h1>
                <Input id="DONATION_TYPE_ID"  type="select" name="DONATION_TYPE_ID" defaultValue={null} required
                class="input "
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                value={data.DONATION_TYPE_ID}
                name="DONATION_TYPE_ID"
                onChange={(e) =>
                  loadData({
                    ...data,
                    ...{
                      DONATION_TYPE_ID:e.target.value,
                        UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                    },
                  })
                }>
            <option value="">Та сонголт хийнэ үү.</option>
            <option value="1">Мөнгө</option>
            <option value="2">Бараа материал</option>
            <option value="3">Үндсэн хөрөнгө</option>
            <option value="4">Мал амьтад</option>
       
          </Input>
              </div>

              <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хандивын орлогын дүн</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Хандивын орлогын дүн:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.DONATION_AMOUNT}
                  name="DONATION_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        DONATION_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Нягтлан бодох бүртгэлд тусгасан</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Дансны нэр:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="text"
                  value={data?.ACCOUNT_NAME}
                  name="ACCOUNT_NAME"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        ACCOUNT_NAME: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Мөнгөн дүн:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.ACCOUNT_AMOUNT}
                  name="ACCOUNT_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        ACCOUNT_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хандивыг зарцуулах тухай шийдвэр</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}> Огноо:</h1>
            <input
                      type="date"
                      className="input"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      //value={dateFormat(data?.END_DATE, "yyyy-mm-dd")}
                      value={dateFormat(data?.COST_DATE, "yyyy-mm-dd")}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            COST_DATE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    ></input>
     
                <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}> Дугаар :</h1>
                <input
                    class="input  is-size-7"
                    type="text"
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    name='COST_DOCUMENT_NO'
                    value={data.COST_DOCUMENT_NO}
                    onChange={(e) => {
                      loadData({
                        ...data,
                        ...{
                          COST_DOCUMENT_NO: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      });
                    }}
                  />
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хандивын зарцуулалтын дүн</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Хандивын зарцуулалтын дүн:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.COST_AMOUNT}
                  name="COST_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        COST_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Зориулалт бусаар 
зарцуулсан дүн</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зориулалт бусаар 
зарцуулсан дүн:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.COST_ERROR_AMOUNT}
                  name="COST_ERROR_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        COST_ERROR_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Үлдэгдэл 
дүн </b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
       
                   <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Үлдэгдэл 
дүн :</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.C2_AMOUNT}
                  name="C2_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        C2_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                </div>
          
            
        <br></br> <br></br>
            <Button style={{font:"16px/26px Arial, Helvetica, sans-serif"}} color="danger"
              onClick={toggle}> <input id="agree" type="checkbox" required='true'/> Судалгааг үнэн зөв бөглөсөн болно.</Button>
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


export default Sudal8;
