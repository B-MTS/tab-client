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


const Sudal9 = (props) => {  

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
        url: "http://hr.audit.mn/public/api/v1/survey7/" + location.state, 
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
            Анхан шатны эмнэлгүүдийн Коронавируст халдвар (covid-19)-аар өвчилсөн иргэдэд гэрээр үзүүлсэн тусламж үйлчилгээний санхүүжилт, зарцуулалт 
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
                  setAdd({ type: 1, state: "new", path: "survey7/" }) 
                  
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
        <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>№</th>
            <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>Эрүүл мэндийн байгууллагын нэр</th>
            <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Коронавируст халдвараар өвчилсөн хүний тоо</th>
            <th rowspan="" colspan="1" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үүнээс:</th>
              <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Нэхэмжилсэн санхүүжилтийн дүн </th>
             <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}}>ЭМДС-аас олгосон санхүүжилт </th>

   <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}}>Коронавируст халдварын эмчилгээ үйлчилгээний нийт зардал</th>
   <th rowspan="2"  colspan="9" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үүнээс:</th>  
    <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}}>ЭМДС-аас авах авлагын дүн /төгрөгөөр/ </th>
   <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Нэхэмжлэл олгосон санхүүжилтийн зөрүү</th>
   <th rowspan="4"  colspan="2" style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}}>Эмийн багцын үлдэгдэл </th>
   <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Тайлбар, тодруулга</th>
            <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th>


  <tr>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Гэрээр эмчлүүлсэн өвчтөний тоо</th>
  </tr>

  <tr>
    <th colspan="2" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Бэлтгэсэн эмийн багцын зардал</th>
    <th  colspan="7" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дэлгэрэнгүй</th>
    
  </tr>

  <tr>
    <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Тоо</th>
    <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дүн</th>
  </tr>

  <tr>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Нэг удаагийн хамгаалах хэрэгсэлийн зардал</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Шатахууны зардал</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Утасны зардал</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Цалин, хөлсний зардал</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Ашиглалтын зардал</th>
    <th rowspan="4"   style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хөрөнгө бэлтгэсэн зардал</th>
    <th rowspan="4"   style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Бусад</th>
  </tr>

  <tr>
    <th  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Тоо</th>
    <th  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дүн</th>
  </tr>

 
        </thead>
    
        
        <tbody>
        {jagsaalt.map((value, index) => (
                <tr>
        <th scope="row">{index+1}</th>
        <td>{value.HOSPITAL_NAME}</td>
          <td>{value.PATIENT_COUNT}</td>
          <td>{value.HOME_PATIENT_COUNT}</td>
          <td>{value.REQUEST_AMOUNT}</td>
          <td>{value.INVESTED_AMOUNT}</td>
          <td>{value.TOTAL_COST_AMOUNT}</td>
          <td>{value.PACKAGE_COUNT}</td>
          <td>{value.PACKAGE_AMOUNT}</td>
          <td>{value.PROTECTION_COST}</td>
          <td>{value.GAS_COST}</td>
          <td>{value.PHONE_COST}</td>
          <td>{value.SALARY_COST}</td>
          <td>{value.PROCESS_COST}</td>
          <td>{value.PREPARE_COST}</td>
          <td>{value.OTHER_COST}</td>
          <td>{value.RECEIVE_AMOUNT}</td>
          <td>{value.DIFF_AMOUNT}</td>
          <td>{value.PACKAGE_C2_COUNT}</td>
          <td>{value.PACKAGE_C2_AMOUNT}</td>
          <td>{value.COST_DESCRIPTION}</td>
          <td>  <img
                    src={Edit}
                    width="20px"
                    height="20px"
                    style={{ marginTop: "12px", cursor: "pointer" }}
                    onClick={() =>
                      setAdd({
                        type: 1,
                        id: value.ID,
                        path: "/survey7/" + value.ID,
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
            url: "http://hr.audit.mn/public/api/v1/survey7/" + location.state, 
            // url:"http://hr.audit.mn/public/api/v1/survey10/111",
            method: "GET",
            data: {},
          });
        //   console.log("jagsaaltBaaaaaaaa", jagsaalts);
          if (jagsaalts.data !== undefined && jagsaalts.data.length !== 0)

            loadData({
              P_ID: jagsaalts.data[props.add.idx].ID, 
              SURVEY_ID: jagsaalts.data[props.add.idx].SURVEY_ID,
              HOSPITAL_NAME:jagsaalts.data[props.add.idx].HOSPITAL_NAME,
              PATIENT_COUNT:jagsaalts.data[props.add.idx].PATIENT_COUNT,
              HOME_PATIENT_COUNT:jagsaalts.data[props.add.idx].HOME_PATIENT_COUNT,
              REQUEST_AMOUNT:jagsaalts.data[props.add.idx].REQUEST_AMOUNT,
              INVESTED_AMOUNT:jagsaalts.data[props.add.idx].INVESTED_AMOUNT,
              TOTAL_COST_AMOUNT:jagsaalts.data[props.add.idx].TOTAL_COST_AMOUNT,
              PACKAGE_COUNT: jagsaalts.data[props.add.idx].PACKAGE_COUNT,
              PACKAGE_AMOUNT: jagsaalts.data[props.add.idx].PACKAGE_AMOUNT,
              PROTECTION_COST: jagsaalts.data[props.add.idx].PROTECTION_COST,
              GAS_COST: jagsaalts.data[props.add.idx].GAS_COST,
              PHONE_COST: jagsaalts.data[props.add.idx].PHONE_COST,
              SALARY_COST: jagsaalts.data[props.add.idx].SALARY_COST,
              PROCESS_COST: jagsaalts.data[props.add.idx].PROCESS_COST,
              PREPARE_COST: jagsaalts.data[props.add.idx].PREPARE_COST,
              OTHER_COST: jagsaalts.data[props.add.idx].OTHER_COST,
              RECEIVE_AMOUNT: jagsaalts.data[props.add.idx].RECEIVE_AMOUNT,
              DIFF_AMOUNT: jagsaalts.data[props.add.idx].DIFF_AMOUNT,
              PACKAGE_C2_COUNT: jagsaalts.data[props.add.idx].PACKAGE_C2_COUNT,
              PACKAGE_C2_AMOUNT: jagsaalts.data[props.add.idx].PACKAGE_C2_AMOUNT,
              COST_DESCRIPTION: jagsaalts.data[props.add.idx].COST_DESCRIPTION,
              CREATED_BY: userDetils?.USER_ID,  
            });
        } else {
          loadData({
            P_ID: null, 
            SURVEY_ID: location.state, 
            HOSPITAL_NAME:'',
            PATIENT_COUNT:'',
            HOME_PATIENT_COUNT:'',
            REQUEST_AMOUNT:'',
            INVESTED_AMOUNT:'',
            TOTAL_COST_AMOUNT:'',
            PACKAGE_COUNT: '',
            PACKAGE_AMOUNT: '',
            PROTECTION_COST: '',
            GAS_COST: '',
            PHONE_COST: '',
            SALARY_COST: '',
            PROCESS_COST: '',
            PREPARE_COST: '',
            OTHER_COST: '',
            RECEIVE_AMOUNT: '',
            DIFF_AMOUNT: '',
            PACKAGE_C2_COUNT: '',
            PACKAGE_C2_AMOUNT: '',
            COST_DESCRIPTION: '',
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
      url:"http://hr.audit.mn/public/api/v1/survey7Insert",
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
    if (data.HOSPITAL_NAME === null || data.HOSPITAL_NAME === "") {
     alert.show("Эрүүл мэндийн байгууллагын нэр оруулна уу");
  
      return false;
    }else if(data.PATIENT_COUNT === null || data.PATIENT_COUNT === "") {
      alert.show("Коронавируст халдвараар өвчилсөн хүний тоо оруулна уу");
      return false;
    }
    else if(data.HOME_PATIENT_COUNT === null || data.HOME_PATIENT_COUNT === "") {
      alert.show("Гэрээр эмчлүүлсэн өвчтөний тоо оруулна уу");
      return false;
    }
    else if(data.REQUEST_AMOUNT === null || data.REQUEST_AMOUNT === "") {
      alert.show("Нэхэмжилсэн санхүүжилтийн дүн  оруулна уу");
      return false;
    }
    else if(data.INVESTED_AMOUNT === null || data.INVESTED_AMOUNT === "") {
      alert.show("ЭМДС-аас олгосон санхүүжилт  оруулна уу");
      return false;
    }
    else if(data.TOTAL_COST_AMOUNT === null || data.TOTAL_COST_AMOUNT === "") {
      alert.show("Коронавируст халдварын эмчилгээ үйлчилгээний нийт зардал оруулна уу");
      return false;
    }
    else if(data.PACKAGE_COUNT === null || data.PACKAGE_COUNT === "") {
      alert.show("Бэлтгэсэн эмийн багцын зардлын тоо оруулна уу");
      return false;
    }
    else if(data.PACKAGE_AMOUNT === null || data.PACKAGE_AMOUNT === "") {
      alert.show("Бэлтгэсэн эмийн багцын зардлын дүн оруулна уу");
      return false;
    }
    else if(data.PROTECTION_COST === null || data.PROTECTION_COST === "") {
      alert.show("Нэг удаагийн хамгаалах хэрэгсэлийн зардал оруулна уу");
      return false;
    }
    else if(data.GAS_COST === null || data.GAS_COST === "") {
      alert.show("Шатахууны зардлын дүн оруулна уу");
      return false;
    }
    else if(data.PHONE_COST === null || data.PHONE_COST === "") {
      alert.show("Утасны зардал оруулна уу");
      return false;
    }
    else if(data.SALARY_COST === null || data.SALARY_COST === "") {
      alert.show("Цалин, хөлсний зардал оруулна уу");
      return false;
    }
    else if(data.PROCESS_COST === null || data.PROCESS_COST === "") {
      alert.show("Ашиглалтын зардал оруулна уу");
      return false;
    }
    else if(data.PREPARE_COST === null || data.PREPARE_COST === "") {
      alert.show("Хөрөнгө бэлтгэсэн зардал оруулна уу");
      return false;
    }
    else if(data.OTHER_COST === null || data.OTHER_COST === "") {
      alert.show("Бусад зардал оруулна уу");
      return false;
    }
    else if(data.RECEIVE_AMOUNT === null || data.RECEIVE_AMOUNT === "") {
      alert.show("ЭМДС-аас авах авлагын дүн  оруулна уу");
      return false;
    }
    else if(data.DIFF_AMOUNT === null || data.DIFF_AMOUNT === "") {
      alert.show("Нэхэмжлэл олгосон санхүүжилтийн зөрүү  оруулна уу");
      return false;
    }
    else if(data.PACKAGE_C2_COUNT === null || data.PACKAGE_C2_COUNT === "") {
      alert.show("Эмийн багцын үлдэгдэл тоогоор  оруулна уу");
      return false;
    }
    else if(data.PACKAGE_C2_AMOUNT === null || data.PACKAGE_C2_AMOUNT === "") {
      alert.show("Эмийн багцын үлдэгдэл дүнгээр оруулна уу");
      return false;
    }
    else if(data.COST_DESCRIPTION === null || data.COST_DESCRIPTION === "") {
      alert.show("Тайлбар, тодруулга оруулна уу");
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
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Эрүүл мэндийн байгууллагын нэр</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Эрүүл мэндийн байгууллагын нэр:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="text"
                  value={data?.HOSPITAL_NAME}
                  name="HOSPITAL_NAME"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        HOSPITAL_NAME: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                </div>
                 <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Коронавируст халдвараар өвчилсөн хүний тоо</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
                <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Коронавируст халдвараар өвчилсөн хүний тоо:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.PATIENT_COUNT}
                  name="PATIENT_COUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        PATIENT_COUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                <h1 style={{color:'#002d74',marginBottom:'20px', marginTop:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Үүнээс</b></h1>
                     <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Гэрээр эмчлүүлсэн өвчтөний тоо:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input"
                  type="number"
                  value={data?.HOME_PATIENT_COUNT}
                  name="HOME_PATIENT_COUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        HOME_PATIENT_COUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
              </div>

              <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Нэхэмжилсэн санхүүжилтийн дүн </b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Нэхэмжилсэн санхүүжилтийн дүн:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.REQUEST_AMOUNT}
                  name="REQUEST_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        REQUEST_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>ЭМДС-аас олгосон санхүүжилт </b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>ЭМДС-аас олгосон санхүүжилт :</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.INVESTED_AMOUNT}
                  name="INVESTED_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        INVESTED_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Коронавируст халдварын эмчилгээ үйлчилгээний нийт зардал</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Коронавируст халдварын эмчилгээ үйлчилгээний нийт зардал:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.TOTAL_COST_AMOUNT}
                  name="TOTAL_COST_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        TOTAL_COST_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
 <h1 style={{color:'#002d74',marginBottom:'20px',  marginTop:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Үүнээс</b></h1>
                     <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Бэлтгэсэн эмийн багцын зардлын тоо:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input"
                  type="number"
                  value={data?.PACKAGE_COUNT}
                  name="PACKAGE_COUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        PACKAGE_COUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Бэлтгэсэн эмийн багцын зардлын дүн:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input"
                  type="number"
                  value={data?.PACKAGE_AMOUNT}
                  name="PACKAGE_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        PACKAGE_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                      <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Нэг удаагийн хамгаалах хэрэгсэлийн зардал:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input"
                  type="number"
                  value={data?.PROTECTION_COST}
                  name="PROTECTION_COST"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        PROTECTION_COST: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />


<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Шатахууны зардал:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input"
                  type="number"
                  value={data?.GAS_COST}
                  name="GAS_COST"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        GAS_COST: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Утасны зардал:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input"
                  type="number"
                  value={data?.PHONE_COST}
                  name="PHONE_COST"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        PHONE_COST: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />


<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Цалин, хөлсний зардал:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input"
                  type="number"
                  value={data?.SALARY_COST}
                  name="SALARY_COST"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        SALARY_COST: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Ашиглалтын зардал:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input"
                  type="number"
                  value={data?.PROCESS_COST}
                  name="PROCESS_COST"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        PROCESS_COST: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                   <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Хөрөнгө бэлтгэсэн зардал:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input"
                  type="number"
                  value={data?.PREPARE_COST}
                  name="PREPARE_COST"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        PREPARE_COST: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Бусад зардал:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input"
                  type="number"
                  value={data?.OTHER_COST}
                  name="OTHER_COST"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        OTHER_COST: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>ЭМДС-аас авах авлагын дүн</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>ЭМДС-аас авах авлагын дүн:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.RECEIVE_AMOUNT}
                  name="RECEIVE_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        RECEIVE_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Нэхэмжлэл олгосон санхүүжилтийн зөрүү</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Нэхэмжлэл олгосон санхүүжилтийн зөрүү:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.DIFF_AMOUNT}
                  name="DIFF_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        DIFF_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Эмийн багцын үлдэгдэл</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тоо:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.PACKAGE_C2_COUNT}
                  name="PACKAGE_C2_COUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        PACKAGE_C2_COUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                   <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Дүн:</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="number"
                  value={data?.PACKAGE_C2_AMOUNT}
                  name="PACKAGE_C2_AMOUNT"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        PACKAGE_C2_AMOUNT: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                      },
                    })
                  }
                />
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Тайлбар, тодруулга</b></h1>
        <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тайлбар, тодруулга</h1>
                <input
                style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                  class="input "
                  type="text"
                  value={data?.COST_DESCRIPTION}
                  name="COST_DESCRIPTION"
                  onChange={(e) =>
                    loadData({
                      ...data,
                      ...{
                        COST_DESCRIPTION: e.target.value,
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


export default Sudal9;
