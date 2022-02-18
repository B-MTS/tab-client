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


const Sudal5 = (props) => {  
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
        url: `http://hr.audit.mn/public/api/v1/survey3/${location.state}`,
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
        Тэргүүн болон эрхэлсэн түшмэлийн ангилал зэрэглэлд хамараах албан тушаалтны ажлын байрны нөхцөл
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
       
            <th rowspan="3" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>№</th>
            <th rowspan="3"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Овог</th>
            <th rowspan="3"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Нэр</th>
            <th rowspan="3"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Албан тушаалын нэр</th>
            <th rowspan="3"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Хамаарах албан тушаалын ангилал</th>
          <th colspan="5" style={{borderRight:'1px solid #ccc'}} >Удирдах албан тушаалтны ажлын байрны талбайн хэмжээ /м.кв/</th>
   <th rowspan="3"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Нийт талбайн хэмжээ /м.кв/</th>
            <th rowspan="3" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Үйлдэл</th>
  <tr>
    <th  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Ажлын өрөө</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Амралтын өрөө</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Тусдаа ариун цэврийн өрөө</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Уулзалтын өрөө</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Бусад өрөө</th>
  </tr>
 
     
        </thead>
    
        
        <tbody>
    
        {jagsaalt.map((value, index) => (
                <tr>
        <th scope="row">{index+1}</th>
         <td>{value.PERSON_LASTNAME}</td>
          <td>{value.PERSON_FIRSTNAME}</td>
          <td>{value.PERSON_ROLE}</td>
          <td>{value.PERSON_ROLE_LEVEL}</td>
          <td>{value.WORKING_ROOM}</td>
          <td>{value.RESTING_ROOM}</td>
          <td>{value.TOILET}</td>
          <td>{value.MEETING_ROOM}</td>
          <td>{value.OTHER_ROOM}</td>
          <td>{value.TOTAL_AREA}</td>
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
            url: "http://hr.audit.mn/public/api/v1/survey3/" + location.state, 
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
              PERSON_LASTNAME: jagsaalts?.data[props.add.idx].PERSON_LASTNAME,
              PERSON_FIRSTNAME: jagsaalts.data[props.add.idx].PERSON_FIRSTNAME,
              PERSON_ROLE: jagsaalts.data[props.add.idx].PERSON_ROLE,
              PERSON_ROLE_LEVEL: jagsaalts.data[props.add.idx].PERSON_ROLE_LEVEL,
              WORKING_ROOM: jagsaalts.data[props.add.idx].WORKING_ROOM,    
              RESTING_ROOM: jagsaalts.data[props.add.idx].RESTING_ROOM,
              TOILET:jagsaalts.data[props.add.idx].TOILET,
              MEETING_ROOM: jagsaalts.data[props.add.idx].MEETING_ROOM,
              OTHER_ROOM: jagsaalts.data[props.add.idx].OTHER_ROOM,
              TOTAL_AREA: jagsaalts.data[props.add.idx].TOTAL_AREA,
              CREATED_BY: userDetils?.USER_ID,
          });
        } else {
          loadData({
           // P_ID: null,
            SURVEY_ID: location.state,
            PERSON_LASTNAME: "",
            PERSON_FIRSTNAME: "",
            PERSON_ROLE: "",
            PERSON_ROLE_LEVEL: "",
            WORKING_ROOM: "",
            RESTING_ROOM: "",
            TOILET: "",
            MEETING_ROOM: "",
            OTHER_ROOM: "",
            TOTAL_AREA: "",
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
      url:"http://hr.audit.mn/public/api/v1/survey3Insert",
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
    if (data.PERSON_FIRSTNAME === null || data.PERSON_FIRSTNAME === "") {
     alert.show("Овог нэр оруулна уу");
  
      return false;
    }else if(data.PERSON_ROLE === null || data.PERSON_ROLE === "") {
      alert.show("Албан тушаалын нэр оруулна уу");
      return false;
    }
    else if(data.WORKING_ROOM === null || data.WORKING_ROOM === "") {
      alert.show("Ажлын өрөөний тоо оруулна уу");
      return false;
    }
    else if(data.RESTING_ROOM === null || data.RESTING_ROOM === "") {
      alert.show("Амралтын өрөөний тоо оруулна уу");
      return false;
    }
    else if(data.TOILET === null || data.TOILET === "") {
      alert.show("Тусдаа ариун цэврийн өрөөний тоо оруулна уу");
      return false;
    }
    else if(data.MEETING_ROOM === null || data.MEETING_ROOM === "") {
      alert.show("Уулзалтын өрөөний тоо оруулна уу");
      return false;
    }
    else if(data.OTHER_ROOM === null || data.OTHER_ROOM === "") {
      alert.show("Бусад өрөөний тоо оруулна уу");
      return false;
    }
    else if(data.TOTAL_AREA === null || data.TOTAL_AREA === "") {
      alert.show("Нийт талбайн хэмжээ /м.кв/ оруулна уу");
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
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Мэдээлэл</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Овог:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data.PERSON_LASTNAME}
                    name="PERSON_LASTNAME"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          PERSON_LASTNAME:e.target.value,
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
                      value={data.PERSON_FIRSTNAME}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PERSON_FIRSTNAME: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Албан тушаалын нэр:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.PERSON_ROLE}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PERSON_ROLE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                       <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Хамаарах албан тушаалын ангилал</h1>
                <Input id="PERSON_ROLE_LEVEL"  type="select" name="PERSON_ROLE_LEVEL" defaultValue={null} required
                class="input "
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                value={data.PERSON_ROLE_LEVEL}
                name="PERSON_ROLE_LEVEL"
                onChange={(e) =>
                  loadData({
                    ...data,
                    ...{
                      PERSON_ROLE_LEVEL:e.target.value,
                        UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                    },
                  })
                }>
         <option value="">Та сонголт хийнэ үү.</option>
            <option>Тэргүүн түшмэл</option>
            <option>Эрхэлсэн түшмэл</option>
       
          </Input>
                </div>
        <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Удирдах албан тушаалтны ажлын байрны талбайн хэмжээ /м.кв/</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Ажлын өрөө:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.WORKING_ROOM}
                  name="WORKING_ROOM"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        WORKING_ROOM: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                    <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Амралтын өрөө:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.RESTING_ROOM}
                  name="RESTING_ROOM"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        RESTING_ROOM: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                    <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тусдаа ариун цэврийн өрөө:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.TOILET}
                  name="TOILET"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        TOILET: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                    <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Уулзалтын өрөө:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.MEETING_ROOM}
                  name="MEETING_ROOM"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        MEETING_ROOM: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                    <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Бусад өрөө:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.OTHER_ROOM}
                  name="OTHER_ROOM"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        OTHER_ROOM: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
     
          </div>
          <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Нийт талбайн хэмжээ /м.кв/</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Нийт талбайн хэмжээ /м.кв/</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.TOTAL_AREA}
                  name="TOTAL_AREA"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        TOTAL_AREA: e.target.value,
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


export default Sudal5;
