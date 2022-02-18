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


const Sudal6 = (props) => {  
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
        url: `http://hr.audit.mn/public/api/v1/survey4/${location.state}`,
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
       Ажлын байрны түрээсийн зардлын талаарх мэдээлэл
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
                  setAdd({ type: 1, state: "new", path: "survey4/" }) 
                  
                }
              />
 
      
        </div>
        {add?.type !== 0 ? <AddDialog setAdd={setAdd} add={add} setDummy={setDummy} dummy={dummy} idx={idx}/> : null}
        <div style={{ display: "flex", flexDirection: "column" }}>

  <div>
  <Table  hover>
        <thead >
        <th rowspan="2" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>№</th>
            <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Байршил</th>
            <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Түрээслүүлэгч байгууллагын регистрийн дугаар </th>
            <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Түрээслүүлэгч байгууллагын нэр</th>
            <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Зардлыг санхүүжүүлсэн эх үүсвэр </th>
            <th style={{borderRight:'1px solid #ccc'}} colspan="4">Байрны түрээсийн зардлын гүйцэтгэл</th>
            <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Тайлбар</th>
            <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Үйлдэл</th>
            
    
  
  <tr>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Гэрээний дугаар</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Талбайн хэмжээ /м.кв/</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Нэгжийн үнэ</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Дүн</th>
  </tr>

     
        </thead>
    
        
        <tbody>
    
        {jagsaalt.map((value, index) => (
                <tr>
        <th scope="row">{index+1}</th>
         <td>{value.RENT_POSITION}</td>
          <td>{value.RENT_REGISTER_NO}</td>
          <td>{value.RENT_ORG_NAME}</td>
          <td>{value.INVEST_TYPE_ID}</td>
          <td>{value.CONTRACT_NO}</td>
          <td>{value.RENT_SIZE}</td>
          <td>{value.RENT_SQUARE_AMOUNT}</td>
          <td>{value.RENT_TOTAL_AMOUNT}</td>
          <td>{value.RENT_DESCRIPTION}</td>
          <td>    <img
                    src={Edit}
                    width="20px"
                    height="20px"
                    style={{ marginTop: "12px", cursor: "pointer" }}
                    onClick={() =>
                      setAdd({
                        type: 1,
                        id: value.ID,
                        path: "/survey4/" + value.ID,
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
            url: "http://hr.audit.mn/public/api/v1/survey4/" + location.state, 
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
              RENT_POSITION: jagsaalts?.data[props.add.idx].RENT_POSITION,
              RENT_REGISTER_NO: jagsaalts.data[props.add.idx].RENT_REGISTER_NO,
              RENT_ORG_NAME: jagsaalts.data[props.add.idx].RENT_ORG_NAME,
              INVEST_TYPE_ID: jagsaalts.data[props.add.idx].INVEST_TYPE_ID,
              CONTRACT_NO: jagsaalts.data[props.add.idx].CONTRACT_NO,    
              RENT_SIZE: jagsaalts.data[props.add.idx].RENT_SIZE,
              RENT_SQUARE_AMOUNT:jagsaalts.data[props.add.idx].RENT_SQUARE_AMOUNT,
              RENT_TOTAL_AMOUNT: jagsaalts.data[props.add.idx].RENT_TOTAL_AMOUNT,
              RENT_DESCRIPTION: jagsaalts.data[props.add.idx].RENT_DESCRIPTION,
              CREATED_BY: userDetils?.USER_ID,
          });
        } else {
          loadData({
           // P_ID: null,
            SURVEY_ID: location.state,
            RENT_POSITION: "",
            RENT_REGISTER_NO: "",
            RENT_ORG_NAME: "",
            INVEST_TYPE_ID: "",
            CONTRACT_NO: "",
            RENT_SIZE: "",
            RENT_SQUARE_AMOUNT: "",
            RENT_TOTAL_AMOUNT: "",
            RENT_DESCRIPTION: "",
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
      url:"http://hr.audit.mn/public/api/v1/survey4Insert",
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
    if (data.RENT_POSITION === null || data.RENT_POSITION === "") {
     alert.show("Байршил оруулна уу");
  
      return false;
    }else if(data.RENT_REGISTER_NO === null || data.RENT_REGISTER_NO === "") {
      alert("Түрээслүүлэгч байгууллагын регистрийн дугаар оруулна уу");
      return false;
    }
    else if(data.RENT_ORG_NAME === null || data.RENT_ORG_NAME === "") {
      alert("Түрээслүүлэгч байгууллагын нэр оруулна уу");
      return false;
    }
    else if(data.INVEST_TYPE_ID === null || data.INVEST_TYPE_ID === "") {
      alert("Зардлыг санхүүжүүлсэн эх үүсвэр оруулна уу");
      return false;
    }
    else if(data.CONTRACT_NO === null || data.CONTRACT_NO === "") {
      alert("Гэрээний дугаар оруулна уу");
      return false;
    }
    else if(data.RENT_SIZE === null || data.RENT_SIZE === "") {
      alert("Талбайн хэмжээ /м.кв/ оруулна уу");
      return false;
    }
    else if(data.RENT_SQUARE_AMOUNT === null || data.RENT_SQUARE_AMOUNT === "") {
      alert("Нэгжийн үнэ оруулна уу");
      return false;
    }
    else if(data.RENT_TOTAL_AMOUNT === null || data.RENT_TOTAL_AMOUNT === "") {
      alert("Дүн оруулна уу");
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
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Байршил:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data.RENT_POSITION}
                    name="RENT_POSITION"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          RENT_POSITION:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Түрээслүүлэгч байгууллагын регистрийн дугаар :</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.RENT_REGISTER_NO}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            RENT_REGISTER_NO: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Түрээслүүлэгч байгууллагын нэр:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.RENT_ORG_NAME}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            RENT_ORG_NAME: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                       <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зардлыг санхүүжүүлсэн эх үүсвэр</h1>
                <Input id="INVEST_TYPE_ID"  type="select" name="INVEST_TYPE_ID" defaultValue={null} required
                class="input "
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                value={data.INVEST_TYPE_ID}
                name="INVEST_TYPE_ID"
                onChange={(e) =>
                  loadData({
                    ...data,
                    ...{
                      INVEST_TYPE_ID:e.target.value,
                        UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                    },
                  })
                }>
            <option value="">Та сонголт хийнэ үү.</option>
            <option>1</option>
            <option>2</option>
          </Input>
                </div>
        <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Байрны түрээсийн зардлын гүйцэтгэл</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Гэрээний дугаар:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="text"
                  value={data?.CONTRACT_NO}
                  name="CONTRACT_NO"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        CONTRACT_NO: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                    <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Талбайн хэмжээ /м.кв/:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.RENT_SIZE}
                  name="RENT_SIZE"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        RENT_SIZE: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                    <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Нэгжийн үнэ /төгрөгөөр/:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.RENT_SQUARE_AMOUNT}
                  name="RENT_SQUARE_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        RENT_SQUARE_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                    <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Дүн  /төгрөгөөр/:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.RENT_TOTAL_AMOUNT}
                  name="RENT_TOTAL_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        RENT_TOTAL_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                   
     
          </div>
          <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Тайлбар</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тайлбар</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="text"
                  value={data?.RENT_DESCRIPTION}
                  name="RENT_DESCRIPTION"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        RENT_DESCRIPTION: e.target.value,
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


export default Sudal6;
