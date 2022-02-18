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


const Sudal4 = (props) => {  
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
        url: `http://hr.audit.mn/public/api/v1/survey2_3/${location.state}`,
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
        Төрийн болон орон нутгийн өмчит, тэдгээрийн оролцоотой хуулийн этгээдийн Төлөөлөн удирдах зөвлөлийн талаарх мэдээлэл
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
                  setAdd({ type: 1, state: "new", path: "survey10/" }) 
                  
                }
              />
            
        </div>
        {add?.type !== 0 ? <AddDialog setAdd={setAdd} add={add} setDummy={setDummy} dummy={dummy} idx={idx}/> : null}
        <div style={{ display: "flex", flexDirection: "column" }}>

  <div>
  <Table  hover>
        <thead >
        <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>№</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>ТУЗ-ийн бүрэлдэхүүн</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>ТУЗ-ийн бүрэлдэхүүн болсон шийдвэрийн огноо</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>ТУЗ-ийн бүрэлдэхүүн болсон шийдвэрийн дугаар</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Овог</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Нэр</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Одоо ажиллаж байгаа байгууллагын нэр</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Албан тушаал</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Сарын цалин</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Урамшуулал </th>
 
           
    <th style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}} colspan="3" rowspan="1">2021 онд ТУЗ гишүүнд олгосон нэг удаагийн тэтгэмж, орон сууцны хөнгөлөлт</th>
  <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th>
  <tr>
    <th rowspan="2"  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Тушаал шийдвэрийн огноо</th>
    <th rowspan="2"  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Тушаал шийдвэрийн дугаар</th>
    <th rowspan="2"  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Мөнгөн дүн</th>
  </tr>
        </thead>
    
        
        <tbody>
    
        {jagsaalt.map((value, index) => (
                <tr>
        <th scope="row">{index+1}</th>
         <td>{value.HEAD_ROLE}</td>
          <td>{value.HEAD_DATE}</td>
          <td>{value.HEAD_DOCUMENT_NO}</td>
          <td>{value.HEAD_LASTNAME}</td>
          <td>{value.HEAD_FIRSTNAME}</td>
          <td>{value.HEAD_ORGANIZATION}</td>
          <td>{value.HEAD_ORG_ROLE}</td>
          <td>{value.HEAD_SALARY}</td>
          <td>{value.HEAD_PROMOTION}</td>
          <td>{value.SUPPORT_DATE}</td>
          <td>{value.SUPPORT_DOCUMENT_NO}</td>
          <td>{value.SUPPORT_AMOUNT }</td>
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
            url: "http://hr.audit.mn/public/api/v1/survey2_3/" + location.state, 
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
              HEAD_ROLE: jagsaalts?.data[props.add.idx].HEAD_ROLE,
              HEAD_DATE: jagsaalts.data[props.add.idx].HEAD_DATE,
              HEAD_DOCUMENT_NO: jagsaalts.data[props.add.idx].HEAD_DOCUMENT_NO,
              HEAD_LASTNAME: jagsaalts.data[props.add.idx].HEAD_LASTNAME,
              HEAD_FIRSTNAME: jagsaalts.data[props.add.idx].HEAD_FIRSTNAME,    
              HEAD_ORGANIZATION: jagsaalts.data[props.add.idx].HEAD_ORGANIZATION,
              HEAD_ORG_ROLE:jagsaalts.data[props.add.idx].HEAD_ORG_ROLE,
              HEAD_SALARY: jagsaalts.data[props.add.idx].HEAD_SALARY,
              HEAD_PROMOTION: jagsaalts.data[props.add.idx].HEAD_PROMOTION,
              SUPPORT_DOCUMENT_NO: jagsaalts.data[props.add.idx].SUPPORT_DOCUMENT_NO,
              SUPPORT_DATE: jagsaalts.data[props.add.idx].SUPPORT_DATE,
              SUPPORT_AMOUNT: jagsaalts.data[props.add.idx].SUPPORT_AMOUNT,
              CREATED_BY: userDetils?.USER_ID,
          });
        } else {
          loadData({
           // P_ID: null,
            SURVEY_ID: location.state,
            HEAD_ROLE: "",
            HEAD_DATE: "",
            HEAD_DOCUMENT_NO: "",
            HEAD_LASTNAME: "",
            HEAD_FIRSTNAME: "",
            HEAD_ORGANIZATION: "",
            HEAD_ORG_ROLE: "",
            HEAD_SALARY: "",
            HEAD_PROMOTION: "",
            SUPPORT_DOCUMENT_NO: "",
            SUPPORT_DATE: "",
            SUPPORT_AMOUNT: "",
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
      url:"http://hr.audit.mn/public/api/v1/survey2_3Insert",
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
    if (data.HEAD_ROLE === null || data.HEAD_ROLE === "") {
     alert.show("ТУЗ-ийн бүрэлдэхүүн оруулна уу");
      return false;
    }else if(data.HEAD_DATE === null || data.HEAD_DATE === "") {
      alert.show("ТУЗ-ийн бүрэлдэхүүн болсон шийдвэрийн огноо, дугаар оруулна уу");
      return false;
    }
    else if(data.HEAD_FIRSTNAME === null || data.HEAD_FIRSTNAME === "") {
      alert.show("Овог нэр оруулна уу");
      return false;
    }
    else if(data.HEAD_ORGANIZATION === null || data.HEAD_ORGANIZATION === "") {
      alert.show("Одоо ажиллаж байгаа байгууллагын нэр оруулна уу");
      return false;
    }
    else if(data.HEAD_ORG_ROLE === null || data.HEAD_ORG_ROLE === "") {
      alert.show("Албан тушаал оруулна уу");
      return false;
    }
    else if(data.HEAD_SALARY === null || data.HEAD_SALARY === "") {
      alert.show("Сарын цалин оруулна уу");
      return false;
    }
    else if(data.HEAD_PROMOTION === null || data.HEAD_PROMOTION === "") {
      alert.show("Урамшуулал оруулна уу");
      return false;
    }
    else if(data.SUPPORT_DATE === null || data.SUPPORT_DATE === "") {
      alert.show("Тушаал шийдвэрийн огноо, дугаар оруулна уу");
      return false;
    }
    else if(data.SUPPORT_AMOUNT === null || data.SUPPORT_AMOUNT === "") {
      alert.show("2021 онд ТУЗ гишүүнд олгосон нэг удаагийн тэтгэмж, орон сууцны хөнгөлөлт дүн оруулна уу");
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
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>ТУЗ-ийн бүрэлдэхүүн</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>ТУЗ-ийн бүрэлдэхүүн</h1>
                <Input id="HEAD_ROLE"  type="select" name="HEAD_ROLE" defaultValue={null} required
                class="input "
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                value={data.HEAD_ROLE}
                name="HEAD_ROLE"
                onChange={(e) =>
                  loadData({
                    ...data,
                    ...{
                      HEAD_ROLE:e.target.value,
                        UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                    },
                  })
                }>
              <option value="">Та сонголт хийнэ үү.</option>
            <option>Дарга</option>
            <option>Гишүүн</option>
       
          </Input>
          </div>
          <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>ТУЗ-ийн бүрэлдэхүүн болсон шийдвэр</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}> Огноо:</h1>
            <input
                      type="date"
                      className="input"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      //value={dateFormat(data?.END_DATE, "yyyy-mm-dd")}
                      value={dateFormat(data?.HEAD_DATE, "yyyy-mm-dd")}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            HEAD_DATE: e.target.value,
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
                    name='HEAD_DOCUMENT_NO'
                    value={data.HEAD_DOCUMENT_NO}
                    onChange={(e) => {
                      loadData({
                        ...data,
                        ...{
                          HEAD_DOCUMENT_NO: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      });
                    }}
                  />
                </div>
        
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Мэдээлэл</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Овог:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data.HEAD_LASTNAME}
                    name="HEAD_LASTNAME"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          HEAD_LASTNAME:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Нэр:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.HEAD_FIRSTNAME}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            HEAD_FIRSTNAME: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Одоо ажиллаж байгаа байгууллагын нэр:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.HEAD_ORGANIZATION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            HEAD_ORGANIZATION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                      <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Албан тушаал :</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.HEAD_ORG_ROLE}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            HEAD_ORG_ROLE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />

<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Сарын цалин /төгрөгөөр/:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.HEAD_SALARY}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            HEAD_SALARY: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Урамшуулал /төгрөгөөр/:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.HEAD_PROMOTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            HEAD_PROMOTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                </div>

                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>2021 онд ТУЗ гишүүнд олгосон нэг удаагийн тэтгэмж, орон сууцны хөнгөлөлт</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тушаал шийдвэрийн огноо</h1>
                  <input
                      type="date"
                      className="input"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      //value={dateFormat(data?.END_DATE, "yyyy-mm-dd")}
                      value={dateFormat(data?.SUPPORT_DATE, "yyyy-mm-dd")}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            SUPPORT_DATE: e.target.value,
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
                    name='SUPPORT_DOCUMENT_NO'
                    value={data.SUPPORT_DOCUMENT_NO}
                    onChange={(e) => {
                      loadData({
                        ...data,
                        ...{
                          SUPPORT_DOCUMENT_NO: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      });
                    }}
                  />
                    <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}> Дүн :</h1>
                <input
                    class="input  is-size-7"
                    type="number"
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    name='SUPPORT_AMOUNT'
                    value={data.SUPPORT_AMOUNT}
                    onChange={(e) => {
                      loadData({
                        ...data,
                        ...{
                          SUPPORT_AMOUNT: e.target.value,
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


export default Sudal4;
