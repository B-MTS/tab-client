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
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
const userDetils = JSON.parse(localStorage.getItem("userDetails"));


const Sudal10 = (props) => {  

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
        url: "http://hr.audit.mn/public/api/v1/survey8/" + location.state, 
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
               Төсөвт байгууллага болон төрийн өмчит хуулийн этгээдийн суудлын автомашин ашиглалтын талаарх мэдээлэл
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
                  setAdd({ type: 1, state: "new", path: "survey8/" }) 
                  
                }
              />
     
          
           
          </div>
        </div>
        {add?.type !== 0 ? <AddDialog setAdd={setAdd} add={add} setDummy={setDummy} dummy={dummy} idx={idx}/> : null}
        <div style={{ display: "flex", flexDirection: "column" }}>

  <div>
  
  <Table hover>
        <thead>
        <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>№</th>
            <th  colspan="3" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>Автомашины ерөнхий мэдээлэл</th>
            <th rowspan="2" colspan="5" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Автомашин ашиглалтын талаар</th>
        <th rowspan="4" colspan="3" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Автомашины бүртгэл, хөдөлгөөн</th>
               <th colspan="4" rowspan="4" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Автомашины ашиглалттай холбоотой гарсан урсгал зардал</th>
            <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th>


  <tr>
    <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Марк</th>
    <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Улсын дугаар </th>
    <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хөдөлгүүрийн цилиндрийн багтаамж V (с.с)</th>
  </tr>

  
  <tr>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зориулалт </th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Ашиглаж буй бүтэц, нэгж, албан тушаалтан </th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Ашиглах эрх олгосон тогтоол, шийдвэрийн огноо</th>
    <th  colspan="2"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Жолоочийн мэдээлэл </th>
  </tr>
  
  <tr>
    <th rowspan="6"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Орон тооны мэдээлэл</th>
    <th rowspan="6"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Жилийн цалингийн нийт зардал </th>
  </tr>

   <tr>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Ашиглалтад орсон огноо</th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Балансын үнэ</th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}> Нэмэгдсэн, хасагдсан шалтгаан</th>
  </tr> 

 <tr>
    <th colspan="2"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Шатахууны зардал </th>
    <th colspan="2"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Сэлбэг, тос, бусад зардал</th>
  </tr>

  
  <tr>
    <th rowspan="2" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дүн</th>
    <th rowspan="2" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зардлын эх үүсвэр</th>
  </tr>

  
  <tr>
    <th rowspan="2" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дүн</th>
    <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зардлын эх үүсвэр</th>
  </tr> 
  
 
        </thead>
    
        
        <tbody>
        {jagsaalt.map((value, index) => (
                <tr>
        <th scope="row">{index+1}</th>
          <td>{value.CAR_MARK}</td>
          <td>{value.CAR_NUMBER}</td>
          <td>{value.CAR_ENGINE}</td>
          <td>{value.CAR_INTENT_TYPE_ID === 1 ? (
                <span>Албан тушаалын</span>
            ) : value.CAR_INTENT_TYPE_ID === 2 ? (
              <span>Албан ажлын</span>
            ): value.CAR_INTENT_TYPE_ID === 3 ? (
              <span>Хөдөө ажлын</span>
            ) 
             : (
              <span>Хоосон</span>
            )}</td>
          <td>{value.CAR_USER}</td>
          <td>{value.CAR_GRANT_DATE}</td>
          <td>{value.DRIVER_ROLE}</td>
          <td>{value.DRIVER_SALARY}</td>
          <td>{value.ACTIVE_YEAR}</td>
          <td>{value.BALANCE_AMOUNT}</td>
          <td>{value.REASON_TYPE}</td>
          <td>{value.GAS_COST_AMOUNT}</td>
          <td>{value.GAS_COST_BUDGET}</td>
          <td>{value.SPARE_COST_AMOUNT}</td>
          <td>{value.SPARE_COST_BUDGET}</td>
          <td>  <img
                    src={Edit}
                    width="20px"
                    height="20px"
                    style={{ marginTop: "12px", cursor: "pointer" }}
                    onClick={() =>
                      setAdd({
                        type: 1,
                        id: value.ID,
                        path: "/survey8/" + value.ID,
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
            url: "http://hr.audit.mn/public/api/v1/survey8/" + location.state, 
            // url:"http://hr.audit.mn/public/api/v1/survey10/111",
            method: "GET",
            data: {},
          });
        //   console.log("jagsaaltBaaaaaaaa", jagsaalts);
          if (jagsaalts.data !== undefined && jagsaalts.data.length !== 0)

            loadData({
              P_ID: jagsaalts.data[props.add.idx].ID, 
              SURVEY_ID: jagsaalts.data[props.add.idx].SURVEY_ID,
              CAR_MARK:jagsaalts.data[props.add.idx].CAR_MARK,
              CAR_NUMBER:jagsaalts.data[props.add.idx].CAR_NUMBER,
              CAR_ENGINE:jagsaalts.data[props.add.idx].CAR_ENGINE,
              CAR_INTENT_TYPE_ID:jagsaalts.data[props.add.idx].CAR_INTENT_TYPE_ID,
              CAR_USER:jagsaalts.data[props.add.idx].CAR_USER,
              CAR_GRANT_DATE:jagsaalts.data[props.add.idx].CAR_GRANT_DATE,
              CAR_GRANT_DOCUMENT: jagsaalts.data[props.add.idx].CAR_GRANT_DOCUMENT,
              DRIVER_ROLE: jagsaalts.data[props.add.idx].DRIVER_ROLE,
              DRIVER_SALARY: jagsaalts.data[props.add.idx].DRIVER_SALARY,
              ACTIVE_YEAR: jagsaalts.data[props.add.idx].ACTIVE_YEAR,
              BALANCE_AMOUNT: jagsaalts.data[props.add.idx].BALANCE_AMOUNT,
              REASON_TYPE: jagsaalts.data[props.add.idx].REASON_TYPE,
              GAS_COST_AMOUNT: jagsaalts.data[props.add.idx].GAS_COST_AMOUNT,
              GAS_COST_BUDGET: jagsaalts.data[props.add.idx].GAS_COST_BUDGET,
              SPARE_COST_AMOUNT: jagsaalts.data[props.add.idx].SPARE_COST_AMOUNT,
              SPARE_COST_BUDGET: jagsaalts.data[props.add.idx].SPARE_COST_BUDGET,
              CREATED_BY: userDetils?.USER_ID,  
            });
        } else {
          loadData({
            P_ID: null, 
            SURVEY_ID: location.state, 
            CAR_MARK:'',
            CAR_NUMBER:'',
            CAR_ENGINE:'',
            CAR_INTENT_TYPE_ID:'',
            CAR_USER:'',
            CAR_GRANT_DATE:'',
            CAR_GRANT_DOCUMENT: '',
            DRIVER_ROLE: '',
            DRIVER_SALARY: '',
            ACTIVE_YEAR: '',
            BALANCE_AMOUNT: '',
            REASON_TYPE: '',
            GAS_COST_AMOUNT: '',
            GAS_COST_BUDGET: '',
            SPARE_COST_AMOUNT: '',
            SPARE_COST_BUDGET: '',
            CREATED_BY: userDetils?.USER_ID,  
          });
        }
      }
    }
    test();
  }, [props]);

  function saveToDB() {
    //   console.log("-----datadatadata-----------",data);
  
    // console.log("testAddDepartment", data);
    if (requiredField(data) === true) {
    DataRequest({
     // url: "http://hr.audit.mn/hr/api/v1/" + props.add.path,
      url:"http://hr.audit.mn/public/api/v1/survey8Insert",
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
        console.log('failure')
        //alert.show("Системийн алдаа");
      });}
  }
  function requiredField() {
    if (data.CAR_MARK === null || data.CAR_MARK === "") {
     alert.show("Автомашины марк оруулна уу");
  
      return false;
    }else if(data.CAR_NUMBER === null || data.CAR_NUMBER === "") {
      alert.show("Автомашины улсын дугаар оруулна уу");
      return false;
    }
    else if(data.CAR_ENGINE === null || data.CAR_ENGINE === "") {
      alert.show("Автомашины хөдөлгүүрийн цилиндрийн багтаамж оруулна уу");
      return false;
    }
    else if(data.CAR_INTENT_TYPE_ID === null || data.CAR_INTENT_TYPE_ID === "") {
      alert.show("Автомашины зориулалт оруулна уу");
      return false;
    }
    else if(data.CAR_USER === null || data.CAR_USER === "") {
      alert.show("Автомашины ашиглаж буй албан тушаалтан оруулна уу");
      return false;
    }
    else if(data.CAR_GRANT_DATE === null || data.CAR_GRANT_DATE === "") {
      alert.show("Ашиглах эрх олгосон огноо, дугаар оруулна уу");
      return false;
    }
    else if(data.DRIVER_ROLE === null || data.DRIVER_ROLE === "") {
      alert.show("Жолоочийн орон тооны мэдээлэл оруулна уу");
      return false;
    }
    else if(data.DRIVER_SALARY === null || data.DRIVER_SALARY === "") {
      alert.show("Жилийн цалингийн нийт зардал оруулна уу");
      return false;
    }
    else if(data.ACTIVE_YEAR === null || data.ACTIVE_YEAR === "") {
      alert.show("Ашиглалтанд орсон огноо оруулна уу");
      return false;
    }
    else if(data.GAS_COST_AMOUNT === null || data.GAS_COST_AMOUNT === "") {
      alert.show("Шатахууны зардлын дүн оруулна уу");
      return false;
    }
    else if(data.GAS_COST_BUDGET === null || data.GAS_COST_BUDGET === "") {
      alert.show("Шатахууны зардлын эх үүсвэр оруулна уу");
      return false;
    }
    else if(data.SPARE_COST_AMOUNT === null || data.SPARE_COST_AMOUNT === "") {
      alert.show("Сэлбэг тос, бусад зардлын дүн оруулна уу");
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
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Автомашины ерөнхий мэдээлэл</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Марк:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="text"
                  value={data?.CAR_MARK}
                  name="CAR_MARK"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        CAR_MARK: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Улсын дугаар :</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="text"
                  value={data?.CAR_NUMBER}
                  name="CAR_NUMBER"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        CAR_NUMBER: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                     <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Хөдөлгүүрийн цилиндрийн багтаамж V (с.с):</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input"
                  type="number"
                  value={data?.CAR_ENGINE}
                  name="CAR_ENGINE"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        CAR_ENGINE: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
              </div>
              <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Автомашин ашиглалтын талаар </b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зориулалт :</h1>
                <Input id="CAR_INTENT_TYPE_ID"  type="select" name="CAR_INTENT_TYPE_ID" defaultValue={null} required
                class="input "
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                value={data.CAR_INTENT_TYPE_ID}
                name="CAR_INTENT_TYPE_ID"
                onChange={(e) =>
                  loadData({
                    ...data,
                    ...{
                      CAR_INTENT_TYPE_ID:e.target.value,
                        UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                    },
                  })
                }>
          <option value="">Та сонголт хийнэ үү.</option>
            <option value="1">Албан тушаалын</option>
            <option value="2">Албан ажлын</option>
            <option value="3">Хөдөө ажлын</option>
       
          </Input>
                <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}> Ашиглаж буй бүтэц, нэгж, албан тушаалтан :</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="text"
                  value={data.CAR_USER}
                  name="CAR_USER"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        CAR_USER:e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                        UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />

<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}> Ашиглах эрх олгосон тогтоол, шийдвэрийн огноо:</h1>
            <input
                      type="date"
                      className="input"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      //value={dateFormat(data?.END_DATE, "yyyy-mm-dd")}
                      value={dateFormat(data?.CAR_GRANT_DATE, "yyyy-mm-dd")}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            CAR_GRANT_DATE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    ></input>
     
                <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}> Ашиглах эрх олгосон тогтоол, шийдвэрийн дугаар :</h1>
                <input
                    class="input  is-size-7"
                    type="text"
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    name='CAR_GRANT_DOCUMENT'
                    value={data.CAR_GRANT_DOCUMENT}
                    onChange={(e) => {
                      loadData({
                        ...data,
                        ...{
                          CAR_GRANT_DOCUMENT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      });
                    }}
                  />

<h1 style={{color:'#002d74',marginBottom:'20px', marginTop:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Жолоочийн мэдээлэл </b></h1>
   

                     <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Орон тооны мэдээлэл:</h1>
                <input
                    class="input  is-size-7"
                    type="text"
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    name="DRIVER_ROLE"
                    value={data.DRIVER_ROLE}
                    onChange={(e) => {
                      loadData({
                        ...data,
                        ...{
                          DRIVER_ROLE: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      });
                    }}
                  />

<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Жилийн цалингийн нийт зардал (төгрөгөөр)</h1>
                <input
                    class="input  is-size-7"
                    type="number"
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    name="DRIVER_SALARY"
                    value={data.DRIVER_SALARY}
                    onChange={(e) => {
                      loadData({
                        ...data,
                        ...{
                          DRIVER_SALARY: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      });
                    }}
                  />
  
              </div>

              <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Автомашины бүртгэл, хөдөлгөөн</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Ашиглалтад орсон он</h1>
        <input
                    class="input  is-size-7"
                    type="number"
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    name="ACTIVE_YEAR"
                    value={data.ACTIVE_YEAR}
                    onChange={(e) => {
                      loadData({
                        ...data,
                        ...{
                          ACTIVE_YEAR: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      });
                    }}
                  />
             
               <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Балансын үнэ (төгрөгөөр)</h1>
                <input
                    class="input  is-size-7"
                    type="number"
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    name="BALANCE_AMOUNT"
                    value={data.BALANCE_AMOUNT}
                    onChange={(e) => {
                      loadData({
                        ...data,
                        ...{
                          BALANCE_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      });
                    }}
                  /> 
                      <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}> Нэмэгдсэн, хасагдсан  шалтгаан :</h1>
                <Input id="REASON_TYPE"  type="select" name="REASON_TYPE" defaultValue={null} required
                class="input "
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                value={data.REASON_TYPE}
                name="REASON_TYPE"
                onChange={(e) =>
                  loadData({
                    ...data,
                    ...{
                      REASON_TYPE:e.target.value,
                        UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                    },
                  })
                }>
             <option value="">Та сонголт хийнэ үү.</option>
            <option>Шинээр худалдан авсан</option>
            <option>Хандив тусламжаар авсан</option>
            <option>Балансаас балансад шилжүүлж авсан</option>
            <option>Акталсан</option>
            <option>Худалдан борлуулсан</option>
            <option>Балансаас баланс руу шилжүүлсэн</option>
       
          </Input>
          </div>

          <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Автомашины ашиглалттай холбоотой гарсан урсгал зардал </b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{color:'#002d74',marginBottom:'20px',marginTop:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Шатахууны зардал </b></h1>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Дүн (төгрөгөөр)</h1>
        <input
                    class="input  is-size-7"
                    type="number"
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    name="GAS_COST_AMOUNT"
                    value={data.GAS_COST_AMOUNT}
                    onChange={(e) => {
                      loadData({
                        ...data,
                        ...{
                          GAS_COST_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      });
                    }}
                  />
             
             
                      <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зардлын эх үүсвэр:</h1>
                <Input id="GAS_COST_BUDGET"  type="select" name="GAS_COST_BUDGET" defaultValue={null} required
                class="input "
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                value={data.GAS_COST_BUDGET}
                name="GAS_COST_BUDGET"
                onChange={(e) =>
                  loadData({
                    ...data,
                    ...{
                      GAS_COST_BUDGET:e.target.value,
                        UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                    },
                  })
                }>
             <option value="">Та сонголт хийнэ үү.</option>
            <option>Батлагдсан төсвөөс</option>
            <option>Харьяа байгууллагын төсвөөс</option>
            <option>Дээд шатны байгууллагын төсвөөс</option>
       
          </Input>
          <h1 style={{color:'#002d74',marginBottom:'20px',marginTop:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Сэлбэг, тос, бусад зардал</b></h1>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Дүн (төгрөгөөр)</h1>
        <input
                    class="input  is-size-7"
                    type="number"
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    name="SPARE_COST_AMOUNT"
                    value={data.SPARE_COST_AMOUNT}
                    onChange={(e) => {
                      loadData({
                        ...data,
                        ...{
                          SPARE_COST_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      });
                    }}
                  />
             
             
                      <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зардлын эх үүсвэр:</h1>
                <Input id="SPARE_COST_BUDGET"  type="select" name="SPARE_COST_BUDGET" defaultValue={null} required
                class="input "
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                value={data.SPARE_COST_BUDGET}
                name="SPARE_COST_BUDGET"
                onChange={(e) =>
                  loadData({
                    ...data,
                    ...{
                      SPARE_COST_BUDGET:e.target.value,
                        UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                    },
                  })
                }>
             <option value="">Та сонголт хийнэ үү.</option>
            <option>Батлагдсан төсвөөс</option>
            <option>Харьяа байгууллагын төсвөөс</option>
            <option>Дээд шатны байгууллагын төсвөөс</option>
       
          </Input>
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


export default Sudal10;
