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


const Sudal1 = (props) => {  

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
        url: `http://hr.audit.mn/public/api/v1/survey1/${location.state}`,
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
          <div className="columns">
            <div className="column is-4" style={{width:"100%"}}>
              {/* <img src={DownArrow} width="15px" style={{ marginLeft: "5px" }} /> */}
              <span
                style={{
                  color: 'rgb(0, 45, 116)',
                  fontWeight: "bold",

                  marginLeft: "5px",
                  fontSize: "1rem",
                }}
              >
                Төсвийн хэмнэлтийн талаар авсан арга хэмжээ, түүний үр дүн
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
                  setAdd({ type: 1, state: "new", path: "survey10/" }) 
                  
                }
              />
            </div>
          
           
          </div>
        </div>
        {add?.type !== 0 ? <AddDialog setAdd={setAdd} add={add} setDummy={setDummy} dummy={dummy} idx={idx}/> : null}
        <div style={{ display: "flex", flexDirection: "column" }}>

  <div>
  
  <Table hover>
        <thead>
        <th rowspan="10"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>№</th>
            <th rowspan="1" colspan="6"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>2021 он</th>
            <th rowspan="10" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>Үндсэн үйл ажиллагаатай холбоотой, зайлшгүй шаардлагатайгаас бусад төрлийн зардлын хэмнэлт</th>
            <th colspan="2" rowspan="2" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Шинээр нэмэгдүүлсэн орон тоо, олгосон цалингийн зардал</th>
            <th colspan="2" rowspan="2" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Нөхөн томилгоо хийж, олгосон цалингийн зардал</th>
            <th colspan="6" rowspan="4" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Цалин хөлсийг нэмэгдүүлсэн, шагнал, урамшуулал олгосон, зочин төлөөлөгч хүлээн авах, бэлэг дурсгал (цүнх, календарь, мэндчилгээ г.м)-ын зардал гаргасан эсэх</th>
            <th colspan="5" rowspan="7" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>2021.02.17-ны өдрөөс өмнө зарцуулсан дүн</th>
            <th rowspan="10"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Сургалт, семинар, хурал, зөвлөгөөнийг танхимаар зохион байгуулахад зарцуулсан</th>
            <th rowspan="10"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Хяналт шалгалт, дотоод албан томилолтод зарцуулсан</th>
            <th rowspan="10"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Бусад баяр ёслол, тэмдэглэлт ой, зэрэгт зарцуулсан</th>
            <th rowspan="10"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Нэвтрүүлэг, контент, баримтат болон цуврал кино зэргийг санхүүжүүлсэн</th>
          <th colspan="2" rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Байгууллагын цахилгаан, дулааны эрчим хүч, цэвэр усны хэрэглээнд зарцуулсан </th>
            <th colspan="2" rowspan="9" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Бичиг хэрэг, цаас, хувилагч, хэвлэгчийн хор худалдан авах зэрэг зардалд зарцуулсан</th>
            <th rowspan="10"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th>


  <tr>
    <th rowspan="9" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Батлагдсан нийт төсөв</th>
    <th rowspan="9" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Үүнээс: Урсгал зардал</th>
    <th rowspan="9" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хөрөнгө оруулалтын зардал</th>
    <th rowspan="9" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Төсвийн нийт гүйцэтгэл</th>
    <th rowspan="9" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Үүнээс: Урсгал зардал</th>
    <th rowspan="9" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хөрөнгө оруулалтын зардал</th>
  </tr>

  
  <tr>
    <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Нэмэгдсэн орон тоо</th>
    <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Мөнгөн дүн /төгрөгөөр/</th>
    
  </tr>
  <tr>
    <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Oрон тоо</th>
    <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Мөнгөн дүн /төгрөгөөр/</th>
    
  </tr>

  <tr>
    <th  colspan="2" rowspan="2" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Нэмэгдүүлсэн цалин хөлс</th>
    <th colspan="2" rowspan="1"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Олгосон шагнал урамшуулал</th>
    <th rowspan="6"   style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зочин төлөөлөгч хүлээн авахад зарцуулсан</th>
    <th rowspan="6"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}> Бэлэг дурсгал зарцуулсан</th>
  </tr>

  <tr>
    <th rowspan="5" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Албан хаагчийн тоо</th>
    <th rowspan="5" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Мөнгөн дүн /төгрөгөөр/</th>
    
  </tr>
  <tr>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Албан хаагчийн тоо</th>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Мөнгөн дүн /төгрөгөөр/</th>
  </tr>
    <tr>
    <th rowspan="3" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Автомашины тоо </th>
    <th rowspan="3"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Автомашины дүн</th>
    <th rowspan="3"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Албан конторын тавилгын дүн</th>
    <th rowspan="3"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дүрэмт хувцас худалдаж авсан дүн</th>
    <th rowspan="3" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Тоног төхөөрөмж, хэрэгслийн дүн</th>
  </tr> 
  <tr>
    <th rowspan="6"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Төлөвлөгөө</th>
    <th  rowspan="6"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Гүйцэтгэл</th>
    
  </tr>
  <tr>
  <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Төлөвлөгөө</th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Гүйцэтгэл</th>
    
  </tr>  
        
        </thead>
    
        
        <tbody>
        {jagsaalt.map((value, index) => (
                <tr>
        <th scope="row">{index+1}</th>
         <td>{value.BUDGET_AMOUNT}</td>
          <td>{value.RUNNING_COST_AMOUNT}</td>
          <td>{value.INVESTMENT_COST_AMOUNT}</td>
          <td>{value.EXECUTION_AMOUNT}</td>
          <td>{value.EXECUTION_RUNNING_COST}</td>
          <td>{value.EXECUTION_INVESTMENT_COST}</td>
          <td>{value.HEMNELT_DUN}</td>
          <td>{value.NEW_EMP_COUNT}</td>
          <td>{value.NEW_EMP_SALARY}</td>
          <td>{value.RENEW_EMP_COUNT}</td>
          <td>{value.RENEW_EMP_SALARY}</td>
          <td>{value.IMP_SALARY_COUNT}</td>
          <td>{value.IMP_SALARY_AMOUNT}</td>
          <td>{value.IMP_PROMO_COUNT}</td>
          <td>{value.IMP_PROMO_AMOUNT}</td>
          <td>{value.IMP_GUEST_AMOUNT}</td>
          <td>{value.IMP_GIFT_AMOUNT}</td>
          <td>{value.CAR_COUNT}</td>
          <td>{value.CAR_AMOUNT}</td>
          <td>{value.FURNITURE_AMOUNT}</td>
          <td>{value.CLOTHES_AMOUNT}</td>
          <td>{value.OTHER_TOOLS_AMOUNT}</td>
          <td>{value.EXTERNAL_EVENT_AMOUNT}</td>
          <td>{value.INTERNAL_EVENT_AMOUNT}</td>
          <td>{value.CEREMONY_AMOUNT}</td>
          <td>{value.CONTENT_AMOUNT}</td>
          <td>{value.BASE_PLAN_AMOUNT}</td>
          <td>{value.BASE_COMPLETION_AMOUNT}</td>
          <td>{value.DOCUMENT_PLAN_AMOUNT}</td>
          <td>{value.DOCUMENT_COMPLETION_AMOUNT}</td>
          <td>  <img
                    src={Edit}
                    width="20px"
                    height="20px"
                    style={{ marginTop: "12px", cursor: "pointer" }}
                    onClick={() =>
                      setAdd({
                        type: 1,
                        id: value.ID,
                        path: "/survey1/" + value.ID,
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
            url: "http://hr.audit.mn/public/api/v1/survey1/" + location.state, 
            // url:"http://hr.audit.mn/public/api/v1/survey10/111",
            method: "GET",
            data: {},
          });
        //   console.log("jagsaaltBaaaaaaaa", jagsaalts);
          if (jagsaalts.data !== undefined && jagsaalts.data.length !== 0)

            loadData({
              ID: jagsaalts.data[props.add.idx].ID, 
              SURVEY_ID: jagsaalts.data[props.add.idx].SURVEY_ID,
              BUDGET_AMOUNT:jagsaalts.data[props.add.idx].BUDGET_AMOUNT,
              RUNNING_COST_AMOUNT:jagsaalts.data[props.add.idx].RUNNING_COST_AMOUNT,
              INVESTMENT_COST_AMOUNT:jagsaalts.data[props.add.idx].INVESTMENT_COST_AMOUNT,
              EXECUTION_AMOUNT:jagsaalts.data[props.add.idx].EXECUTION_AMOUNT,
              EXECUTION_RUNNING_COST:jagsaalts.data[props.add.idx].EXECUTION_RUNNING_COST,
              EXECUTION_INVESTMENT_COST:jagsaalts.data[props.add.idx].EXECUTION_INVESTMENT_COST,
              HEMNELT_DUN: jagsaalts.data[props.add.idx].HEMNELT_DUN,
              NEW_EMP_COUNT: jagsaalts.data[props.add.idx].NEW_EMP_COUNT,
              NEW_EMP_SALARY: jagsaalts.data[props.add.idx].NEW_EMP_SALARY,
              RENEW_EMP_COUNT: jagsaalts.data[props.add.idx].RENEW_EMP_COUNT,
              RENEW_EMP_SALARY: jagsaalts.data[props.add.idx].RENEW_EMP_SALARY,
              IMP_SALARY_COUNT: jagsaalts.data[props.add.idx].IMP_SALARY_COUNT,
              IMP_SALARY_AMOUNT: jagsaalts.data[props.add.idx].IMP_SALARY_AMOUNT,
              IMP_PROMO_COUNT: jagsaalts.data[props.add.idx].IMP_PROMO_COUNT,
              IMP_PROMO_AMOUNT: jagsaalts.data[props.add.idx].IMP_PROMO_AMOUNT,
              IMP_GUEST_AMOUNT: jagsaalts.data[props.add.idx].IMP_GUEST_AMOUNT,
              IMP_GIFT_AMOUNT: jagsaalts.data[props.add.idx].IMP_GIFT_AMOUNT,
              CAR_COUNT: jagsaalts.data[props.add.idx].CAR_COUNT,
              CAR_AMOUNT: jagsaalts.data[props.add.idx].CAR_AMOUNT,
              FURNITURE_AMOUNT: jagsaalts.data[props.add.idx].FURNITURE_AMOUNT,
              CLOTHES_AMOUNT: jagsaalts.data[props.add.idx].CLOTHES_AMOUNT,
              OTHER_TOOLS_AMOUNT: jagsaalts.data[props.add.idx].OTHER_TOOLS_AMOUNT,
              EXTERNAL_EVENT_AMOUNT: jagsaalts.data[props.add.idx].EXTERNAL_EVENT_AMOUNT,
              INTERNAL_EVENT_AMOUNT: jagsaalts.data[props.add.idx].INTERNAL_EVENT_AMOUNT,
              CEREMONY_AMOUNT: jagsaalts.data[props.add.idx].CEREMONY_AMOUNT,
              CONTENT_AMOUNT: jagsaalts.data[props.add.idx].CONTENT_AMOUNT,
              BASE_PLAN_AMOUNT: jagsaalts.data[props.add.idx].BASE_PLAN_AMOUNT,
              BASE_COMPLETION_AMOUNT: jagsaalts.data[props.add.idx].BASE_COMPLETION_AMOUNT,
              DOCUMENT_PLAN_AMOUNT: jagsaalts.data[props.add.idx].DOCUMENT_PLAN_AMOUNT,
              DOCUMENT_COMPLETION_AMOUNT: jagsaalts.data[props.add.idx].DOCUMENT_COMPLETION_AMOUNT,
              CREATED_BY: userDetils?.USER_ID,  
              
            });
        } else {
          loadData({
            ID: null, 
            SURVEY_ID: location.state, 
            BUDGET_AMOUNT:'',
            RUNNING_COST_AMOUNT:'',
            INVESTMENT_COST_AMOUNT:'',
            EXECUTION_AMOUNT:'',
            EXECUTION_RUNNING_COST:'',
            EXECUTION_INVESTMENT_COST:'',
            HEMNELT_DUN: '',
            NEW_EMP_COUNT: '',
            NEW_EMP_SALARY: '',
            RENEW_EMP_COUNT: '',
            RENEW_EMP_SALARY: '',
            IMP_SALARY_COUNT: '',
            IMP_SALARY_AMOUNT: '',
            IMP_PROMO_COUNT: '',
            IMP_PROMO_AMOUNT: '',
            IMP_GUEST_AMOUNT: '',
            IMP_GIFT_AMOUNT: '',
            CAR_COUNT: '',
            CAR_AMOUNT: '',
            FURNITURE_AMOUNT: '',
            CLOTHES_AMOUNT: '',
            OTHER_TOOLS_AMOUNT: '',
            EXTERNAL_EVENT_AMOUNT: '',
            INTERNAL_EVENT_AMOUNT: '',
            CEREMONY_AMOUNT: '',
            CONTENT_AMOUNT: '',
            BASE_PLAN_AMOUNT: '',
            BASE_COMPLETION_AMOUNT: '',
            DOCUMENT_PLAN_AMOUNT: '',
            DOCUMENT_COMPLETION_AMOUNT: '',
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
      url:"http://hr.audit.mn/public/api/v1/survey1Insert",
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
    if (data.BUDGET_AMOUNT === null || data.BUDGET_AMOUNT === "") {
     alert.show("Батлагдсан нийт төсөв оруулна уу.");
  
      return false;
    }else if(data.RUNNING_COST_AMOUNT === null || data.RUNNING_COST_AMOUNT === "") {
      alert.show("Урсгал зардал оруулна уу.");
      return false;
    }else if(data.EXECUTION_AMOUNT === null || data.EXECUTION_AMOUNT === "") {
      alert.show("Төсвийн нийт гүйцэтгэл оруулна уу.");
      return false;
    }
    else if(data.EXECUTION_RUNNING_COST === null || data.EXECUTION_RUNNING_COST === "") {
      alert.show("Урсгал зардал оруулна уу.");
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
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Батлагдсан төсөв гүйцэтгэл</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Батлагдсан нийт төсөв:</h1>
                  <input
                    class="input "
                    type="number"
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    value={data.BUDGET_AMOUNT}
                    name="BUDGET_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          BUDGET_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                    placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                  />
<br></br>
            <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Үүнээс:</b></h1>
            <h1 style={{paddingLeft:"60px", font:"16px/26px Arial, Helvetica, sans-serif"}}>Урсгал зардал:</h1>
                  <input
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.RUNNING_COST_AMOUNT}
                    name="RUNNING_COST_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          RUNNING_COST_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                    placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                  />
                  <h1 style={{paddingLeft:"60px",font:"16px/26px Arial, Helvetica, sans-serif"}}>Хөрөнгө оруулалтын зардал:</h1>
                    <input
                    class="input "
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    type="number"
                    value={data.INVESTMENT_COST_AMOUNT}
                    name="INVESTMENT_COST_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          INVESTMENT_COST_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                    placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                  />

<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Төсвийн нийт гүйцэтгэл:</h1>
                    <input
                    required={true}
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.EXECUTION_AMOUNT}
                    name="EXECUTION_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          EXECUTION_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                    placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                  />
                  <br></br>
       <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Үүнээс:</b></h1>
            <h1 style={{paddingLeft:"60px",font:"16px/26px Arial, Helvetica, sans-serif"}}>Урсгал зардал:</h1>
                  <input
                    class="input "
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    type="number"
                    value={data.EXECUTION_RUNNING_COST}
                    name="EXECUTION_RUNNING_COST"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          EXECUTION_RUNNING_COST: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                    placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                  />
                  <br></br>
                  <h1 style={{paddingLeft:"60px",font:"16px/26px Arial, Helvetica, sans-serif"}}>Хөрөнгө оруулалтын зардал:</h1>
                    <input
                    class="input "
                    style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    type="number"
                    value={data.EXECUTION_INVESTMENT_COST}
                    name="EXECUTION_INVESTMENT_COST"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          EXECUTION_INVESTMENT_COST: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                    placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                  />
     
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Үндсэн үйл ажиллагаатай холбоотой, зайлшгүй шаардлагатайгаас бусад төрлийн зардлын хэмнэлт</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  
                       <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зардлын хэмнэлтийн мөнгөн дүн:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      name="HEMNELT_DUN"
                      value={data.HEMNELT_DUN}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            HEMNELT_DUN: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
           
                </div>

                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Шинээр чиг үүрэг, албан тушаал бий болгож нэмэгдүүлсэн орон тоо, олгосон цалингийн зардал</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Нэмэгдсэн орон тоо:</h1>
                  <input
                      class="input  is-size-7"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      type="number"
                      name="NEW_EMP_COUNT"
                      value={data.NEW_EMP_COUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            NEW_EMP_COUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Тоон утга оруулна уу." 
                    />

<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Цалингийн зардал:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      name="NEW_EMP_SALARY"
                      value={data.NEW_EMP_SALARY}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            NEW_EMP_SALARY: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
           
                    </div>



                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Өндөр насны тэтгэвэр тогтоолгож чөлөөлөгдсөн ажилтан, албан тушаалтны орон тоонд нөхөн томилгоо хийж, олгосон цалингийн зардал
</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Нэмэгдсэн орон тоо:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="RENEW_EMP_COUNT"
                      value={data?.RENEW_EMP_COUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            RENEW_EMP_COUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Тоон утга оруулна уу." 
                    />

<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Цалингийн зардал:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="NEW_EMP_SALARY"
                      value={data?.RENEW_EMP_SALARY}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            RENEW_EMP_SALARY: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
           
                    </div>


                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Цалин хөлсийг нэмэгдүүлсэн, шагнал, урамшуулал олгосон, зочин төлөөлөгч хүлээн авах, бэлэг дурсгал (цүнх, календарь, мэндчилгээ г.м)-ын зардал гаргасан эсэх

</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Нэмэгдүүлсэн цалин хөлс

</b></h1>
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Албан хаагчийн тоо:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="IMP_SALARY_COUNT"
                      value={data?.IMP_SALARY_COUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            IMP_SALARY_COUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Тоон утга оруулна уу." 
                    />

<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Нэмэгдсэн цалин хөлс:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="IMP_SALARY_AMOUNT"
                      value={data?.IMP_SALARY_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            IMP_SALARY_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
           
<br></br>

           <h1 style={{color:'#002d74',marginBottom:'20px', marginTop:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Олгосон шагнал урамшуулал

</b></h1>
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Албан хаагчийн тоо:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="IMP_PROMO_COUNT"
                      value={data?.IMP_PROMO_COUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            IMP_PROMO_COUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Тоон утга оруулна уу." 
                    />

<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Шагнал урамшуулал:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="IMP_PROMO_AMOUNT"
                      value={data?.IMP_PROMO_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            IMP_PROMO_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />

<br></br>
<h1 style={{color:'#002d74',marginBottom:'20px', marginTop:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Зочин төлөөлөгч хүлээн авахад зарцуулсан:

</b></h1>
   

<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Мөнгөн дүн:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      name="IMP_GUEST_AMOUNT"
                      value={data.IMP_GUEST_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            IMP_GUEST_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />

<br></br>
<h1 style={{color:'#002d74',marginBottom:'20px', marginTop:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Бэлэг дурсгал (цүнх, календарь, мэндчилгээ г.м)-д зарцуулсан

</b></h1>
   

<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Мөнгөн дүн:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      name="IMP_GIFT_AMOUNT"
                      value={data.IMP_GIFT_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            IMP_GIFT_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." required
                    />
                    </div>

                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>2021.02.17-ны өдрөөс өмнө Төрийн болон орон нутгийн өмчийн хөрөнгөөр бараа, ажил, үйлчилгээ худалдан авах тухай хуулийн дагуу зарлагдсанаас бусад хэлбэрээр худалдан авсан автомашин, албан конторын тавилга, албаны болон ажлын дүрэмт хувцас, амралт, алжаал тайлах, фитнесийн тоног төхөөрөмж, хэрэгсэлийн талаарх мэдээлэл
</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Автомашины тоо:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="CAR_COUNT"
                      value={data.CAR_COUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            CAR_COUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Тоон утга оруулна уу." 
                    />

<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Автомашин дүн:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="CAR_AMOUNT"
                      value={data.CAR_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            CAR_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
                    <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Албан конторын тавилгын дүн:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      name="FURNITURE_AMOUNT"
                      value={data.FURNITURE_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            FURNITURE_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
                      <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Албаны болон ажлын дүрэмт хувцас худалдаж авсан дүн:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      name="CLOTHES_AMOUNT"
                      value={data.CLOTHES_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            CLOTHES_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />

<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Амралт, алжаал тайлах, фитнесийн тоног төхөөрөмж, хэрэгслийн дүн:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      name="OTHER_TOOLS_AMOUNT"
                      value={data.OTHER_TOOLS_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            OTHER_TOOLS_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
           
                    </div>
                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Сургалт, семинар, хурал, зөвлөгөөнийг танхимаар зохион байгуулахад зарцуулсан

</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
    
<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Мөнгөн дүн:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="EXTERNAL_EVENT_AMOUNT"
                      value={data.EXTERNAL_EVENT_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            EXTERNAL_EVENT_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
           
                    </div>



                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хяналт шалгалт, дотоод албан томилолтод зарцуулсан

</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
    
<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Мөнгөн дүн:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="INTERNAL_EVENT_AMOUNT"
                      value={data.INTERNAL_EVENT_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            INTERNAL_EVENT_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
           
                    </div>


                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Засгийн газрын шийдвэр гарснаас бусад баяр ёслол, тэмдэглэлт ой, урлагийн наадам, спортын уралдаан тэмцээн, салбарын өдөр, аялал зугаалга зэрэгт зарцуулсан

</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
    
<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Мөнгөн дүн:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="CEREMONY_AMOUNT"
                      value={data.CEREMONY_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            CEREMONY_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
           
                    </div>



                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хууль тогтоомж, Засгийн газрын албан ёсны шийдвэр, тэдгээрийн хэрэгжилт, цаг үеийн шинжтэй мэдээ, мэдээллийг олон нийтэд хүргэх, сурталчлан таниулахаас бусад зорилгоор байгууллага, хамт олныг сурталчлах, салбарын болон байгууллагын үйл ажиллагаатай холбоотой нэвтрүүлэг, контент, баримтат болон цуврал кино зэргийг санхүүжүүлсэн

</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
    
<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Мөнгөн дүн:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="CONTENT_AMOUNT"
                      value={data.CONTENT_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            CONTENT_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
           
                    </div>


                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Байгууллагын цахилгаан, дулааны эрчим хүч, цэвэр усны хэрэглээнд зарцуулсан

</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
    
<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Төлөвлөгөөний дүн:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="BASE_PLAN_AMOUNT"
                      value={data.BASE_PLAN_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            BASE_PLAN_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
           
<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Гүйцэтгэлийн дүн:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="BASE_COMPLETION_AMOUNT"
                      value={data.BASE_COMPLETION_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            BASE_COMPLETION_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
                    </div>



                    
                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Бичиг хэрэг, цаас, хувилагч, хэвлэгчийн хорны зэрэг зардалд зарцуулсан

</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
    
<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Төлөвлөгөөний дүн:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="DOCUMENT_PLAN_AMOUNT"
                      value={data.DOCUMENT_PLAN_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            DOCUMENT_PLAN_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
           
<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Гүйцэтгэлийн дүн:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      class="input  is-size-7"
                      type="number"
                      name="DOCUMENT_COMPLETION_AMOUNT"
                      value={data.DOCUMENT_COMPLETION_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            DOCUMENT_COMPLETION_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                      placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." 
                    />
                    </div>
                    <div>
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


export default Sudal1;
