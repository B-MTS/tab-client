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


const Sudal11 = (props) => {  
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
        url: `http://hr.audit.mn/public/api/v1/survey9/${location.state}`,
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
         
            <div className="column is-4 columns" style={{width:'80%'}}>
              {/* <img src={DownArrow} width="15px" style={{ marginLeft: "5px" }} /> */}
              <span
                style={{
                  color: 'rgb(0, 45, 116)',
                  fontWeight: "bold",
                  marginLeft: "5px",
                  fontSize: "1rem",
                }}
              >
                Төсөвт байгууллага, төрийн болон орон нутгийн өмчит хуулийн этгээдээс цалин, урамшуулал авдаг тамирчдын талаарх мэдээлэл
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
                  setAdd({ type: 1, state: "new", path: "survey9/" }) 
                  
                }
              />
        
      
        </div>
        {add?.type !== 0 ? <AddDialog setAdd={setAdd} add={add} idx={idx} setDummy={setDummy} dummy={dummy}/> : null}
        <div style={{ display: "flex", flexDirection: "column" }}>

  <div>
  <Table responsive hover>
  <thead >
        <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>№</th>
            <th  colspan="7" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>Тамирчны ерөнхий мэдээлэл</th>
            <th rowspan="2" colspan="3" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Цалин, нэмэгдэл /өссөн дүнгээр/</th>
       <th rowspan="4" colspan="5" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Урамшуулал /өссөн дүнгээр/</th>
               <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Нийт олгосон цалин, нэмэгдэл, урамшууллын дүн </th>
        <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th> 


  <tr>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Овог </th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Нэр </th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Албан тушаал</th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Спортын төрөл</th>
    <th colspan="3" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Гаргасан амжилт </th>
  </tr>

  
  <tr>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Олимпийн наадам</th>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Тив, ДАШТ</th>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Үндэсний их баяр наадам</th>

  </tr>  

  <tr>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Цол зэрэг</th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Үндсэн цалин</th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зэргийн нэмэгдэл </th>
  </tr>

  <tr>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Эрх олгосон тогтоол, шийдвэрийн нэр, огноо, дугаар</th>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Эрх олгосон тогтоолын дугаар</th>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Мөнгөн дүн </th>
    <th  colspan="2" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Мөнгөн бус </th>
  </tr> 

 <tr>
    <th style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хөрөнгийн нэр төрөл </th>
    <th style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Үнэ</th>
  </tr>
  
        
        </thead>
    
        
        <tbody>
    
        {jagsaalt.map((value, index) => (
                <tr>
        <th scope="row">{index+1}</th>
         <td>{value.ATHLETE_LASTNAME}</td>
          <td>{value.ATHLETE_FIRSTNAME}</td>
          <td>{value.ATHLETE_ROLE}</td>
          <td>{value.ATHLETE_SPORT}</td>
          <td>{value.SUCCESS_OLYMPICS}</td>
          <td>{value.SUCCESS_WORLD}</td>
          <td>{value.SUCCESS_STATE}</td>
          <td>{value.SALARY_TITLE_AMOUNT}</td>
          <td>{value.SALARY_BASE_AMOUNT}</td>
          <td>{value.SALARY_DEGREE_AMOUNT}</td>
          <td>{value.PROMO_DATE}</td>
          <td>{value.PROMO_DOCUMENT_NO}</td>
          <td>{value.PROMO_AMOUNT}</td>
          <td>{value.NON_MONEY_TYPE}</td>
          <td>{value.NON_MONEY_PRICE}</td>
          <td>{value.TOTAL_AMOUNT}</td>
          <td>    <img
                    src={Edit}
                    width="20px"
                    height="20px"
                    style={{ marginTop: "12px", cursor: "pointer" }}
                    onClick={() =>
                      setAdd({
                        type: 1,
                        id: value.ID,
                        path: "/survey9/" + value.ID,
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
            url: "http://hr.audit.mn/public/api/v1/survey9/" + location.state, 
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
              ATHLETE_LASTNAME: jagsaalts?.data[props.add.idx].ATHLETE_LASTNAME,
              ATHLETE_FIRSTNAME: jagsaalts.data[props.add.idx].ATHLETE_FIRSTNAME,
              ATHLETE_ROLE: jagsaalts.data[props.add.idx].ATHLETE_ROLE,
              ATHLETE_SPORT: jagsaalts.data[props.add.idx].ATHLETE_SPORT,
              SUCCESS_OLYMPICS: jagsaalts.data[props.add.idx].SUCCESS_OLYMPICS,    
              SUCCESS_WORLD: jagsaalts.data[props.add.idx].SUCCESS_WORLD,
              SUCCESS_STATE:jagsaalts.data[props.add.idx].SUCCESS_STATE,
              SALARY_TITLE_AMOUNT: jagsaalts.data[props.add.idx].SALARY_TITLE_AMOUNT,
              SALARY_BASE_AMOUNT: jagsaalts.data[props.add.idx].SALARY_BASE_AMOUNT,
              SALARY_DEGREE_AMOUNT: jagsaalts.data[props.add.idx].SALARY_DEGREE_AMOUNT,
              PROMO_DATE: jagsaalts.data[props.add.idx].PROMO_DATE,
              PROMO_DOCUMENT_NO: jagsaalts.data[props.add.idx].PROMO_DOCUMENT_NO,
              PROMO_AMOUNT: jagsaalts.data[props.add.idx].PROMO_AMOUNT,
              NON_MONEY_TYPE: jagsaalts.data[props.add.idx].NON_MONEY_TYPE,
              NON_MONEY_PRICE: jagsaalts.data[props.add.idx].NON_MONEY_PRICE,
              TOTAL_AMOUNT: jagsaalts.data[props.add.idx].TOTAL_AMOUNT,
              CREATED_BY: userDetils?.USER_ID,
          });
        } else {
          loadData({
           // P_ID: null,
            SURVEY_ID: location.state,
            ATHLETE_LASTNAME: "",
            ATHLETE_FIRSTNAME: "",
            ATHLETE_ROLE: "",
            ATHLETE_SPORT: "",
            SUCCESS_OLYMPICS: "",
            SUCCESS_WORLD: "",
            SUCCESS_STATE: "",
            SALARY_TITLE_AMOUNT: "",
            SALARY_BASE_AMOUNT: "",
            SALARY_DEGREE_AMOUNT: "",
            PROMO_DATE: "",
            PROMO_DOCUMENT_NO: "",
            PROMO_AMOUNT: "",
            NON_MONEY_TYPE: "",
            NON_MONEY_PRICE: "",
            TOTAL_AMOUNT: "",
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
      url:"http://hr.audit.mn/public/api/v1/survey9Insert",
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
    if (data.ATHLETE_LASTNAME === null || data.ATHLETE_LASTNAME === "") {
     alert.show("Тамирчны овог оруулна уу.");
      return false;
    }else if(data.ATHLETE_FIRSTNAME === null || data.ATHLETE_FIRSTNAME === "") {
      alert.show("Тамирчны нэр оруулна уу.");
      return false;
    }else if(data.ATHLETE_ROLE === null || data.ATHLETE_ROLE === "") {
      alert.show("Тамирчны албан тушаал оруулна уу.");
      return false;
    }
    else if(data.ATHLETE_SPORT === null || data.ATHLETE_SPORT === "") {
      alert.show("Спортын төрөл оруулна уу.");
      return false;
    }else if(data.SUCCESS_OLYMPICS === null || data.SUCCESS_OLYMPICS === "") {
      alert.show("Олимпийн наадам оруулна уу.");
      return false;
    }else if(data.SUCCESS_WORLD === null || data.SUCCESS_WORLD === "") {
      alert.show("Тив, ДАШТ оруулна уу.");
      return false;
    }else if(data.SUCCESS_STATE === null || data.SUCCESS_STATE === "") {
      alert.show("Үндэсний их баяр наадам оруулна уу.");
      return false;
    }else if(data.SALARY_TITLE_AMOUNT === null || data.SALARY_TITLE_AMOUNT === "") {
      alert.show("Цол зэрэг оруулна уу.");
      return false;
    }else if(data.SALARY_BASE_AMOUNT === null || data.SALARY_BASE_AMOUNT === "") {
      alert.show("Үндсэн цалин оруулна уу.");
      return false;
    }else if(data.SALARY_DEGREE_AMOUNT === null || data.SALARY_DEGREE_AMOUNT === "") {
      alert.show("Зэргийн нэмэгдэл оруулна уу.");
      return false;
    }else if(data.IS_PLANNED === null || data.IS_PLANNED === "") {
      alert.show("Эрх олгосон тогтоол, шийдвэрийн нэр, огноо, дугаар оруулна уу.");
      return false;
    }else if(data.TOTAL_AMOUNT === null || data.TOTAL_AMOUNT === "") {
      alert.show("Нийт олгосон цалин, нэмэгдэл, урамшууллын дүн оруулна уу.");
      return false;
    }
    else if(data.NON_MONEY_TYPE === null || data.NON_MONEY_TYPE === "") {
      alert.show("Хөрөнгийн нэр төрөл  оруулна уу.");
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
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Тамирчны ерөнхий мэдээлэл</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Овог :</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="text"
                    value={data?.ATHLETE_LASTNAME}
                    name="ATHLETE_LASTNAME"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          ATHLETE_LASTNAME: e.target.value,
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
                    value={data?.ATHLETE_FIRSTNAME}
                    name="ATHLETE_FIRSTNAME"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          ATHLETE_FIRSTNAME: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                       <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Албан тушаал:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="text"
                    value={data?.ATHLETE_ROLE}
                    name="ATHLETE_ROLE"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          ATHLETE_ROLE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
     <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Спортын төрөл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="text"
                    value={data?.ATHLETE_SPORT}
                    name="ATHLETE_SPORT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          ATHLETE_SPORT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

<h1 style={{color:'#002d74',marginBottom:'20px',marginTop:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Гаргасан амжилт</b></h1>
<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Олимпийн наадам:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="text"
                    value={data?.SUCCESS_OLYMPICS}
                    name="SUCCESS_OLYMPICS"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          SUCCESS_OLYMPICS: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тив, ДАШТ:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data?.SUCCESS_WORLD}
                    name="SUCCESS_WORLD"
                    type="text"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          SUCCESS_WORLD: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
                   <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Үндэсний их баяр наадам:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data?.SUCCESS_STATE}
                    name="SUCCESS_STATE"
                    type="text"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          SUCCESS_STATE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  /> 

           
              
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Цалин, нэмэгдэл /өссөн дүнгээр/</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Цол зэрэг:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.SALARY_TITLE_AMOUNT}
                    name="SALARY_TITLE_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          SALARY_TITLE_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

       
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Үндсэн цалин:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      name='SALARY_BASE_AMOUNT'
                      value={data.SALARY_BASE_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            SALARY_BASE_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />


     

                       <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зэргийн нэмэгдэл :</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      name="SALARY_DEGREE_AMOUNT"
                      value={data.SALARY_DEGREE_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            SALARY_DEGREE_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
    
                </div>

                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Урамшуулал /өссөн дүнгээр/</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Эрх олгосон тогтоол, шийдвэрийн огноо:</h1>
            <input
                      type="date"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      className="input"
                      value={dateFormat(data?.PROMO_DATE, "yyyy-mm-dd")}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PROMO_DATE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    ></input>
                    <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Эрх олгосон тогтоол, шийдвэрийн дугаар:</h1>
                    <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data?.PROMO_DOCUMENT_NO}
                    name="PROMO_DOCUMENT_NO"
                    type="text"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          PROMO_DOCUMENT_NO: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  /> 
                 <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Мөнгөн дүн :</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      name="PROMO_AMOUNT"
                      value={data.PROMO_AMOUNT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PROMO_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    /> <br></br>
 <h1 style={{color:'#002d74',marginBottom:'20px',marginTop:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Мөнгөн бус</b></h1>
 <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Хөрөнгийн нэр төрөл:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data?.NON_MONEY_TYPE}
                    name="NON_MONEY_TYPE"
                    type="text"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          NON_MONEY_TYPE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  /> 
 <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Үнэ:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data?.NON_MONEY_PRICE}
                    name="NON_MONEY_PRICE"
                    type="number"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          NON_MONEY_PRICE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  /> 
<h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Нийт олгосон цалин, нэмэгдэл, урамшууллын дүн </h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    value={data?.TOTAL_AMOUNT}
                    name="TOTAL_AMOUNT"
                    type="number"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          TOTAL_AMOUNT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  /> 
          <br></br> <br></br>
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


export default Sudal11;
