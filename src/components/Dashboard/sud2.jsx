import React, { useEffect, useState, useReducer } from "react";
import { Table, Button } from 'reactstrap';
import { useLocation } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter ,Input } from 'reactstrap';
import { DataRequest } from "../functions/DataApi";
import dateFormat from "dateformat";
import Footer from '../Navbar/footer';
import './../../App.css';
import { useAlert } from "react-alert";
import { Add, Edit} from "./../../assets/images/zurag"
import Header from '../../pages/Side';
const userDetils = JSON.parse(localStorage.getItem("userDetails"));


const Sudal3 = (props) => {  
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
        url: `http://hr.audit.mn/public/api/v1/survey2_1/${location.state}`,
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
Төрийн болон орон нутгийн өмчит, тэдгээрийн оролцоотой хуулийн этгээдийн талаарх ерөнхий мэдээлэл
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
                  setAdd({ type: 1, state: "new", path: "survey2_1/" }) 
                  
                }
              />
         
        </div>
        {add?.type !== 0 ? <AddDialog setAdd={setAdd} add={add} setDummy={setDummy} dummy={dummy} idx={idx}/> : null}
        <div style={{ display: "flex", flexDirection: "column" }}>

  <div>
  <Table  hover>
        <thead >
       
            <th rowspan="15" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>№</th>
            <th colspan="2" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Үндсэн үйл ажиллагааны чиглэл</th>
            <th rowspan="15"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Төрийн болон орон нутгийн өмчийн эзэмшлийн хувь</th>
            <th colspan="2"   style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Үүсгэн байгуулсан шийдвэр</th>
            <th rowspan="15"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Тухайн шийдвэр хуулийн зүйлтэй нийцэж байгаа юу?</th>
          <th rowspan="15" style={{borderRight:'1px solid #ccc'}} >Улсын бүртгэлийн гэрчилгээ дэх дүрмийн сангийн хэмжээ</th>
   <th rowspan="15"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Санхүүгийн тайлан дахь эзэмшлийн өмчийн дүн</th>
   <th colspan="2" rowspan="3" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Бүтэц, орон тоо баталсан шийдвэр</th>
   <th colspan="4" rowspan="4" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Орон тоо</th>
   <th colspan="3"rowspan="5"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Эдийн засгийн зорилтот түвшний ашиг, алдагдал </th>
   <th colspan="3" rowspan="6" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Тайлант хугацааны Зорилтот түвшиндээ бүрэн хүрсэн үү?</th>
   <th colspan="6" rowspan="8" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Өмнөх тайлант хугацааны ашиг/алдагдал /2020/</th>
   <th colspan="6" rowspan="6" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Тайлант хугацааны ашиг/алдагдал</th>
   <th colspan="2" rowspan="8" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Танай компанийн үйл ажиллагааг төрөөс гүйцэтгэх шаардлагатай юу?</th>
   <th colspan="2" rowspan="12" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Зардлыг хэмнэх шинэчилэл хийсэн үү?</th>
   <th colspan="2" rowspan="11" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Үр ашигтай нь уялдуулсан уу?</th>
   <th colspan="2" rowspan="10" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Нийтлэг жишгээр ангилан тогтоодог зарчимд шилжсэн  эсэх талаарх дүгнэлт</th>
   <th colspan="3" rowspan="10" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Өмнөх тайлант хугацааны зардал /2020 он/</th>
   <th colspan="3" rowspan="10" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Тайлант хугацааны зардал /2021 он/</th>
            <th rowspan="15" style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Үйлдэл</th>
  <tr>
    <th rowspan="14" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Харъяалах салбар</th>
    <th rowspan="14" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Үйл ажиллагааны чиглэл</th>
  </tr>
  <tr>
    <th rowspan="13" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Огноо</th>
    <th rowspan="13" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Дугаар</th>
  </tr>
  <tr>
    <th rowspan="12" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Огноо</th>
    <th rowspan="12" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Дугаар</th>
  </tr>
  <tr>
    <th rowspan="11" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Дээд шатны удирдах албан тушаалтан</th>
    <th rowspan="11" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Дунд шатны удирдах албан тушаалтан</th>
    <th rowspan="11" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Гүйцэтгэх албан тушаалтан</th>
    <th rowspan="11" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Нийт</th>
  </tr>
  <tr>
    <th rowspan="10" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Төлөвлөгөө</th>
    <th rowspan="10" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Гүйцэтгэл</th>
    <th rowspan="10" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Зөрүү</th>
  </tr>
  <tr>
    <th rowspan="9"  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Зорилтот түвшиндээ бүрэн хүрсэн үү?</th>
    <th  rowspan="9" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Зорилтот түвшин </th>
    <th  rowspan="9" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Тайлбар</th>
  </tr>
  <tr>
    <th rowspan="8" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Борлуулалтын орлого</th>
    <th rowspan="8" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Үйл ажиллагааны зардал</th>
    <th rowspan="8" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Үндсэн бус үйл ажиллагааны ашиг/алдагдал</th>
    <th rowspan="8" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Орлогын албан татварын зардал</th>
    <th rowspan="8" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Тайлант үеийн цэвэр ашиг/алдагдал </th>
    <th rowspan="8" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Ашиг/алдагдлын талаарх тайлбар</th>
  </tr>
  <tr>
    <th rowspan="7" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Борлуулалтын орлого</th>
    <th  rowspan="7" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Үйл ажиллагааны зардал</th>
    <th  rowspan="7" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Үндсэн бус үйл ажиллагааны ашиг/алдагдал</th>
    <th  rowspan="7" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Орлогын албан татварын зардал</th>
    <th  rowspan="7" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Тайлант үеийн цэвэр ашиг/алдагдал </th>
    <th  rowspan="7" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Ашиг/алдагдлын талаарх тайлбар</th>
  </tr>
  <tr>
    <th rowspan="6" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Шаардлагатай эсэх</th>
    <th rowspan="6" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Тайлбар</th>
  </tr>
  <tr>
    <th rowspan="5" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Сонголтоор</th>
    <th rowspan="5" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Тайлбар</th>
  </tr>
  <tr>
    <th rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Сонголтоор</th>
    <th rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Тайлбар</th>
  </tr>
  <tr>
    <th rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Сонголтоор</th>
    <th rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Тайлбар</th>
  </tr>
  <tr>
    <th rowspan="2" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Цалин хөлс</th>
    <th rowspan="2" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Шагнал урамшуулал</th>
    <th rowspan="2" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Зочин төлөөлөгч хүлээн авахад зарцуулсан</th>
  </tr>
  <tr>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Цалин хөлс</th>
    <th  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Шагнал урамшуулал</th>
    <th  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Зочин төлөөлөгч хүлээн авахад зарцуулсан</th>
  </tr>
        </thead>
    
        
        <tbody>
    
        {jagsaalt.map((value, index) => (
                <tr>
        <th scope="row">{index+1}</th>
         <td>{value.BRANCH_ID === 1 ? (
                <span>Хууль хүчний байгууллага</span>
            ) : value.BRANCH_ID === 2 ? (
              <span>Мэдээллийн технологи, харилцаа холбоо</span>
            ) 
            : value.BRANCH_ID === 3 ? (
              <span>Эрүүл мэнд</span>
            ) 
            : value.BRANCH_ID === 4 ? (
              <span>Хот тохижилт, хог хаягдал</span>
            ) 
            : value.BRANCH_ID === 5 ? (
              <span>Боловсрол</span>
            ) 
            : value.BRANCH_ID === 6 ? (
              <span>Барилга хот байгуулалт</span>
            ) 
            : value.BRANCH_ID === 7 ? (
              <span>Хөдөлмөр нийгмийн хамгаалал</span>
            ) 
            : value.BRANCH_ID === 8 ? (
              <span>Бусад</span>
            ) 
            : (
              <span>Хоосон</span>
            )}</td>
          <td>{value.ACTIVITY_NAME}</td>
          <td>{value.HOLDING_PERCENT}</td>
          <td>{value.REG_DATE}</td>
          <td>{value.REG_DOCUMENT_NO}</td>
          <td>{value.IS_LEGAL18 === 1 ? (
                <span>Тийм</span>
            ) : value.IS_LEGAL18 === 2 ? (
              <span>Үгүй</span>
            ) : (
              <span>Хоосон</span>
            )}</td>
          <td>{value.REG_CAPITAL_AMOUNT}</td>
          <td>{value.STATE_CAPITAL_AMOUNT}</td>
          <td>{value.STRUCTURE_DATE}</td>
          <td>{value.STRUCTURE_DOCUMENT_NO}</td>
          <td>{value.HEAD_EMPLOYEE}</td>
          <td>{value.MIDDLE_EMPLOYEE}</td>
          <td>{value.NORMAL_EMPLOYEE}</td>
          <td>{value.TOTAL_EMPLOYEE}</td>
          <td>{value.PROFIT_PLAN}</td>
          <td>{value.PROFIT_COMPLETION}</td>
          <td>{value.PROFIT_COMPLETION-value.PROFIT_PLAN}</td>
          <td>{value.TARGET_LEVEL === 1 ? (
                <span>Тийм</span>
            ) : value.TARGET_LEVEL === 2 ? (
              <span>Үгүй</span>
            ) : (
              <span>Хоосон</span>
            )}</td>
      
         
          <td>{value.TARGET_LEVEL_PERCENT}</td>
          <td>{value.TARGET_LEVEL_DESCRIPTION}</td>
          <td>{value.PREV_INCOME}</td>
          <td>{value.PREV_PROCESS_COST}</td>
          <td>{value.PREV_NON_PROCESS_COST}</td>
          <td>{value.PREV_INCOME_TAX}</td>
          <td>{value.PREV_PROFIT}</td>
          <td>{value.PREV_DESCRIPTION}</td>
          <td>{value.CY_INCOME}</td>
          <td>{value.CY_PROCESS_COST}</td>
          <td>{value.CY_NON_PROCESS_COST}</td>
          <td>{value.CY_INCOME_TAX}</td>

          <td>{value.CY_PROFIT}</td>
          <td>{value.CY_DESCRIPTION}</td>
          <td>{value.IS_STATE === 1 ? (
                <span>Тийм</span>
            ) : value.IS_STATE === 2 ? (
              <span>Үгүй</span>
            ) : (
              <span>Хоосон</span>
            )}</td>
          <td>{value.IS_STATE_DESCRIPTION}</td>
          <td>{value.IS_CHANGE === 1 ? (
                <span>Тийм</span>
            ) : value.IS_CHANGE === 2 ? (
              <span>Үгүй</span>
            ) : (
              <span>Хоосон</span>
            )}</td>
          <td>{value.IS_CHANGE_DESCRIPTION}</td>
          <td>{value.IS_LINKED === 1 ? (
                <span>Тийм</span>
            ) : value.IS_LINKED === 2 ? (
              <span>Үгүй</span>
            ) : (
              <span>Хоосон</span>
            )}</td>
          <td>{value.IS_LINKED_DESCRIPTION}</td>
          <td>{value.IS_SCOPED === 1 ? (
                <span>Тийм</span>
            ) : value.IS_SCOPED === 2 ? (
              <span>Үгүй</span>
            ) : (
              <span>Хоосон</span>
            )}</td>

          <td>{value.IS_SCOPED_DESCRIPTION}</td>
          <td>{value.PREV_SALARY_COST}</td>
          <td>{value.PREV_PROMOTION_COST}</td>
          <td>{value.PREV_GUEST_COST}</td>
          <td>{value.CY_SALARY_COST}</td>
          <td>{value.CY_PROMOTION_COST}</td>
          <td>{value.CY_GUEST_COST}</td>
          <td>    <img
                    src={Edit}
                    width="20px"
                    height="20px"
                    style={{ marginTop: "12px", cursor: "pointer" }}
                    onClick={() =>
                      setAdd({
                        type: 1,
                        id: value.ID,
                        path: "/survey2_1/" + value.ID,
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
            url: "http://hr.audit.mn/public/api/v1/survey2_1/" + location.state, 
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
              BRANCH_ID: jagsaalts?.data[props.add.idx].BRANCH_ID,
              ACTIVITY_NAME: jagsaalts.data[props.add.idx].ACTIVITY_NAME,
              HOLDING_PERCENT: jagsaalts.data[props.add.idx].HOLDING_PERCENT,

              REG_DATE: jagsaalts.data[props.add.idx].REG_DATE,
              REG_DOCUMENT_NO: jagsaalts.data[props.add.idx].REG_DOCUMENT_NO,    
              IS_LEGAL18: jagsaalts.data[props.add.idx].IS_LEGAL18,
              REG_CAPITAL_AMOUNT:jagsaalts.data[props.add.idx].REG_CAPITAL_AMOUNT,
              STATE_CAPITAL_AMOUNT: jagsaalts.data[props.add.idx].STATE_CAPITAL_AMOUNT,
              STRUCTURE_DATE: jagsaalts.data[props.add.idx].STRUCTURE_DATE,
              STRUCTURE_DOCUMENT_NO: jagsaalts.data[props.add.idx].STRUCTURE_DOCUMENT_NO,
              HEAD_EMPLOYEE: jagsaalts.data[props.add.idx].HEAD_EMPLOYEE,
              MIDDLE_EMPLOYEE: jagsaalts.data[props.add.idx].MIDDLE_EMPLOYEE,    
              NORMAL_EMPLOYEE: jagsaalts.data[props.add.idx].NORMAL_EMPLOYEE,
              TOTAL_EMPLOYEE:jagsaalts.data[props.add.idx].TOTAL_EMPLOYEE,
              PROFIT_PLAN: jagsaalts.data[props.add.idx].PROFIT_PLAN,
              PROFIT_COMPLETION: jagsaalts.data[props.add.idx].PROFIT_COMPLETION,
              // PROFIT_COMPLETION: jagsaalts.data[props.add.idx].PROFIT_COMPLETION,
              TARGET_LEVEL: jagsaalts.data[props.add.idx].TARGET_LEVEL,
              TARGET_LEVEL_PERCENT: jagsaalts.data[props.add.idx].TARGET_LEVEL_PERCENT,
              TARGET_LEVEL_DESCRIPTION: jagsaalts.data[props.add.idx].TARGET_LEVEL_DESCRIPTION,    
              PREV_INCOME: jagsaalts.data[props.add.idx].PREV_INCOME,
              PREV_PROCESS_COST:jagsaalts.data[props.add.idx].PREV_PROCESS_COST,
              PREV_NON_PROCESS_COST: jagsaalts.data[props.add.idx].PREV_NON_PROCESS_COST,
              PREV_INCOME_TAX: jagsaalts.data[props.add.idx].PREV_INCOME_TAX,
              PREV_PROFIT: jagsaalts.data[props.add.idx].PREV_PROFIT,
              PREV_DESCRIPTION: jagsaalts.data[props.add.idx].PREV_DESCRIPTION,
              CY_INCOME: jagsaalts.data[props.add.idx].CY_INCOME,
              CY_PROCESS_COST: jagsaalts.data[props.add.idx].CY_PROCESS_COST,
              CY_NON_PROCESS_COST: jagsaalts.data[props.add.idx].CY_NON_PROCESS_COST,
              CY_INCOME_TAX: jagsaalts.data[props.add.idx].CY_INCOME_TAX,
              CY_PROFIT: jagsaalts.data[props.add.idx].CY_PROFIT,

              CY_DESCRIPTION:jagsaalts.data[props.add.idx].CY_DESCRIPTION,
              IS_STATE: jagsaalts.data[props.add.idx].IS_STATE,
              IS_STATE_DESCRIPTION: jagsaalts.data[props.add.idx].IS_STATE_DESCRIPTION,
              IS_CHANGE: jagsaalts.data[props.add.idx].IS_CHANGE,
              IS_CHANGE_DESCRIPTION: jagsaalts.data[props.add.idx].IS_CHANGE_DESCRIPTION,
              IS_LINKED: jagsaalts.data[props.add.idx].IS_LINKED,
              IS_LINKED_DESCRIPTION: jagsaalts.data[props.add.idx].IS_LINKED_DESCRIPTION,
              IS_SCOPED: jagsaalts.data[props.add.idx].IS_SCOPED,
              IS_SCOPED_DESCRIPTION: jagsaalts.data[props.add.idx].IS_SCOPED_DESCRIPTION,
              PREV_SALARY_COST: jagsaalts.data[props.add.idx].PREV_SALARY_COST,
              PREV_PROMOTION_COST: jagsaalts.data[props.add.idx].PREV_PROMOTION_COST,
              PREV_GUEST_COST: jagsaalts.data[props.add.idx].PREV_GUEST_COST,
              CY_SALARY_COST: jagsaalts.data[props.add.idx].CY_SALARY_COST,
              CY_PROMOTION_COST: jagsaalts.data[props.add.idx].CY_PROMOTION_COST,
              CY_GUEST_COST: jagsaalts.data[props.add.idx].CY_GUEST_COST,
              CREATED_BY: userDetils?.USER_ID,
          });
        } else {
          loadData({
           // P_ID: null,
            SURVEY_ID: location.state,
            BRANCH_ID: "",
            ACTIVITY_NAME: "",
            HOLDING_PERCENT: "",
            REG_DATE: "",
            REG_DOCUMENT_NO: "",
            IS_LEGAL18: "",
            REG_CAPITAL_AMOUNT: "",
            STATE_CAPITAL_AMOUNT: "",
            STRUCTURE_DATE: "",
            STRUCTURE_DOCUMENT_NO: "",
            HEAD_EMPLOYEE: "",
            MIDDLE_EMPLOYEE: "",
            NORMAL_EMPLOYEE: "",
            TOTAL_EMPLOYEE: "",
            PROFIT_PLAN: "",
            PROFIT_COMPLETION: "",
            // PROFIT_COMPLETION: "",
            TARGET_LEVEL: "",
            TARGET_LEVEL_PERCENT: "",
            TARGET_LEVEL_DESCRIPTION: "",
            PREV_INCOME: "",
            PREV_PROCESS_COST: "",
            PREV_NON_PROCESS_COST: "",
            PREV_INCOME_TAX: "",
            PREV_PROFIT: "",
            PREV_DESCRIPTION: "",
            CY_INCOME: "",
            CY_PROCESS_COST: "",
            CY_NON_PROCESS_COST: "",
            CY_INCOME_TAX: "",
            CY_PROFIT: "",

            CY_DESCRIPTION: "",
            IS_STATE: "",
            IS_STATE_DESCRIPTION: "",
            IS_CHANGE: "",
            IS_CHANGE_DESCRIPTION: "",
            IS_LINKED: "",
            IS_LINKED_DESCRIPTION: "",
            IS_SCOPED: "",
            IS_SCOPED_DESCRIPTION: "",
            PREV_SALARY_COST: "",
            PREV_PROMOTION_COST: "",
            PREV_GUEST_COST: "",
            CY_SALARY_COST: "",
            CY_PROMOTION_COST: "",
            CY_GUEST_COST: "",
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
      url:"http://hr.audit.mn/public/api/v1/survey2_1Insert",
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
    if (data.BRANCH_ID === null || data.BRANCH_ID === "") {
     alert.show("Харъяалах салбар оруулна уу");
  
      return false;
    }else if(data.ACTIVITY_NAME === null || data.ACTIVITY_NAME === "") {
      alert.show("Өөрийн үйл ажиллагааны чиглэлийг дэлгэрэнгүй оруулна уу");
      return false;
    }
    else if(data.REG_CAPITAL_AMOUNT === null || data.REG_CAPITAL_AMOUNT === "") {
      alert.show("Улсын бүртгэлийн гэрчилгээ дэх дүрмийн сангийн хэмжээ оруулна уу");
      return false;
    }
    else if(data.CY_SALARY_COST === null || data.CY_SALARY_COST === "") {
      alert.show("Тайлант хугацааны зардал /2021 он/ оруулна уу");
      return false;
    }
    else if(data.PREV_SALARY_COST === null || data.PREV_SALARY_COST === "") {
      alert.show("Өмнөх тайлант хугацааны зардал /2020 он/ оруулна уу");
      return false;
    }
    else if(data.CY_PROCESS_COST === null || data.CY_PROCESS_COST === ""||data.CY_NON_PROCESS_COST === null || data.CY_NON_PROCESS_COST === ""||data.CY_INCOME_TAX === null || data.CY_INCOME_TAX === ""||data.CY_PROFIT === null || data.CY_PROFIT === "") {
      alert.show("Тайлант хугацааны ашиг/алдагдал оруулна уу");
      return false;
    }
    else if(data.PREV_PROCESS_COST === null || data.PREV_PROCESS_COST === ""||data.PREV_NON_PROCESS_COST === null || data.PREV_NON_PROCESS_COST === ""||data.PREV_INCOME_TAX === null || data.PREV_INCOME_TAX === "") {
      alert.show("Өмнөх тайлант хугацааны ашиг/алдагдал /2020/ оруулна уу");
      return false;
    }
    else if(data.IS_SCOPED === null || data.IS_SCOPED === ""||data.IS_SCOPED_DESCRIPTION === null || data.IS_SCOPED_DESCRIPTION === "") {
      alert.show("Үйл ажиллагааны чиглэл, цар хүрээ, түвшин зэргийг харгалзан нэг хэлбэр, нийтлэг жишгээр ангилан тогтоодог зарчимд шилжсэн  эсэх талаарх дүгнэлт оруулна уу");
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
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Үндсэн үйл ажиллагааны чиглэлүүдийг товч бичих</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Харъяалах салбар:</h1>
            <Input id="BRANCH_ID"  type="select" name="BRANCH_ID" defaultValue={null} required  class="input "
             value={data.BRANCH_ID}
             style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
             onChange={(e) =>
               loadData({
                 ...data,
                 ...{
                  BRANCH_ID: e.target.value,
                     UPDATED_BY: userDetils?.USER_ID,
                     UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                 },
               })
             }>
            <option value="">Та сонголт хийнэ үү.</option>
            <option value="1">Хууль хүчний байгууллага</option>
            <option value="2">Мэдээллийн технологи, харилцаа холбоо</option>
            <option value="3">Эрүүл мэнд</option>
            <option value="4">Хот тохижилт, хог хаягдал</option>
            <option value="5">Боловсрол</option>
            <option value="6">Барилга хот байгуулалт</option>
            <option value="7">Хөдөлмөр нийгмийн хамгаалал</option>
            <option value="8">Бусад</option>
          </Input>
            
  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Өөрийн үйл ажиллагааны чиглэлийг дэлгэрэнгүй бичих:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.ACTIVITY_NAME}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            ACTIVITY_NAME: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                       
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Төрийн болон орон нутгийн өмчийн эзэмшлийн хувь</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Төрийн болон орон нутгийн өмчийн эзэмшлийн хувь:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.HOLDING_PERCENT}
                    name="HOLDING_PERCENT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          HOLDING_PERCENT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

                </div>

                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Үүсгэн байгуулсан шийдвэр</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}> Огноо:</h1>
            <input
                      type="date"
                      className="input"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      //value={dateFormat(data?.END_DATE, "yyyy-mm-dd")}
                      value={dateFormat(data?.REG_DATE, "yyyy-mm-dd")}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            REG_DATE: e.target.value,
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
                    name='REG_DOCUMENT_NO'
                    value={data.REG_DOCUMENT_NO}
                    onChange={(e) => {
                      loadData({
                        ...data,
                        ...{
                          REG_DOCUMENT_NO: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      });
                    }}
                  />

                </div>



                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Тухайн шийдвэр нь ТБОНӨТ хуулийн 9 дүгээр зүйл, МУЗЗНДНТУТ хуулийн 18 дугаар   зүйлтэй нийцэж байгаа юу?</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                      
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тухайн шийдвэр нь ТБОНӨТ хуулийн 9 дүгээр зүйл, МУЗЗНДНТУТ хуулийн 18 дугаар   зүйлтэй нийцэж байгаа юу?:</h1>
            <Input id="IS_LEGAL18"  type="select" name="IS_LEGAL18" defaultValue={null} required  class="input "
             value={data.IS_LEGAL18}
             style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
             onChange={(e) =>
               loadData({
                 ...data,
                 ...{
                  IS_LEGAL18: e.target.value,
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
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Улсын бүртгэлийн гэрчилгээ дэх дүрмийн сангийн хэмжээ</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Улсын бүртгэлийн гэрчилгээ дэх дүрмийн сангийн хэмжээ:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.REG_CAPITAL_AMOUNT}
                    name="REG_CAPITAL_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          REG_CAPITAL_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

                </div>


                
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Санхүүгийн тайлан дахь  төрийн болон орон нутгийн эзэмшлийн өмчийн дүн</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Санхүүгийн тайлан дахь  төрийн болон орон нутгийн эзэмшлийн өмчийн дүн:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.STATE_CAPITAL_AMOUNT}
                    name="STATE_CAPITAL_AMOUNT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          STATE_CAPITAL_AMOUNT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

                </div>



                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Бүтэц, орон тоо баталсан шийдвэр</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}> Огноо:</h1>
            <input
                      type="date"
                      className="input"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      //value={dateFormat(data?.END_DATE, "yyyy-mm-dd")}
                      value={dateFormat(data?.STRUCTURE_DATE, "yyyy-mm-dd")}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            STRUCTURE_DATE: e.target.value,
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
                    name='STRUCTURE_DOCUMENT_NO'
                    value={data.STRUCTURE_DOCUMENT_NO}
                    onChange={(e) => {
                      loadData({
                        ...data,
                        ...{
                          STRUCTURE_DOCUMENT_NO: e.target.value,
                          UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      });
                    }}
                  />

                </div>
       
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Орон тоо</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Дээд шатны /Захирал, гүйцэтгэх, тэргүүн, дэд захирал/ удирдах албан тушаалтан:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.HEAD_EMPLOYEE}
                    name="HEAD_EMPLOYEE"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          HEAD_EMPLOYEE:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Дунд шатны / газар, хэлтэс, алба/ удирдах албан тушаалтан:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.MIDDLE_EMPLOYEE}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            MIDDLE_EMPLOYEE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                       <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Гүйцэтгэх албан тушаалтны тоо:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.NORMAL_EMPLOYEE}
                    name="NORMAL_EMPLOYEE"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          NORMAL_EMPLOYEE:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Дүн:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.TOTAL_EMPLOYEE}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            TOTAL_EMPLOYEE: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
 
                       
                </div>



                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Эдийн засгийн зорилтот түвшний ашиг, алдагдал </b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Төлөвлөгөө:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.PROFIT_PLAN}
                    name="PROFIT_PLAN"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          PROFIT_PLAN:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Гүйцэтгэл:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.PROFIT_COMPLETION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PROFIT_COMPLETION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />


{/* <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зөрүү:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.PROFIT_COMPLETION-data.PROFIT_PLAN}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PROFIT_COMPLETION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    /> */}
 
                       
                </div>




                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Тайлант хугацааны Зорилтот түвшиндээ бүрэн хүрсэн үү?</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тайлант хугацааны Зорилтот түвшиндээ бүрэн хүрсэн үү?</h1>
            <Input id="TARGET_LEVEL"  type="select" name="TARGET_LEVEL" defaultValue={null} required  class="input "
             value={data.TARGET_LEVEL}
             style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
             onChange={(e) =>
               loadData({
                 ...data,
                 ...{
                  TARGET_LEVEL: e.target.value,
                     UPDATED_BY: userDetils?.USER_ID,
                     UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                 },
               })
             }>
            <option value="">Та сонголт хийнэ үү.</option>
            <option value={1}>Тийм</option>
            <option value={2}>Үгүй</option>
       
          </Input>

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зорилтот түвшин /Хувиар/:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.TARGET_LEVEL_PERCENT}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            TARGET_LEVEL_PERCENT: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тийм/Үгүй гэсэн сонголтын тайлбарыг товчлон оруулна:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.TARGET_LEVEL_DESCRIPTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            TARGET_LEVEL_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />

                    </div>
                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Өмнөх тайлант хугацааны ашиг/алдагдал /2020/</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Борлуулалтын орлого:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.PREV_INCOME}
                    name="PREV_INCOME"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          PREV_INCOME:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Үйл ажиллагаа (борлуулалт, ерөнхий удирдлага)-ны зардал:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.PREV_PROCESS_COST}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PREV_PROCESS_COST: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Үндсэн бус үйл ажиллагааны ашиг/алдагдал:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.PREV_NON_PROCESS_COST}
                    name="PREV_NON_PROCESS_COST"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          PREV_NON_PROCESS_COST:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Орлогын албан татварын зардал:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.PREV_INCOME_TAX}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PREV_INCOME_TAX: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тайлант үеийн цэвэр ашиг/алдагдал:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.PREV_PROFIT}
                    name="PREV_PROFIT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          PREV_PROFIT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Ашиг/алдагдлын талаарх товч тайлбар, тодруулга:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.PREV_DESCRIPTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PREV_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
             
                </div>
                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Тайлант хугацааны ашиг/алдагдал</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Борлуулалтын орлого:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.CY_INCOME}
                    name="CY_INCOME"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          CY_INCOME:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Үйл ажиллагаа (борлуулалт, ерөнхий удирдлага)-ны зардал:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.CY_PROCESS_COST}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            CY_PROCESS_COST: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Үндсэн бус үйл ажиллагааны ашиг/алдагдал:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.CY_NON_PROCESS_COST}
                    name="CY_NON_PROCESS_COST"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          CY_NON_PROCESS_COST:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Орлогын албан татварын зардал:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.CY_INCOME_TAX}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            CY_INCOME_TAX: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тайлант үеийн цэвэр ашиг/алдагдал:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.CY_PROFIT}
                    name="CY_PROFIT"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          CY_PROFIT:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Ашиг/алдагдлын талаарх товч тайлбар, тодруулга:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.CY_DESCRIPTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            CY_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
             
                </div>

                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Танай компанийн үйл ажиллагааг төрөөс эрхлэн гүйцэтгэх шаардлагатай юу?</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Шаардлагатай эсэх</h1>
            <Input id="IS_STATE"  type="select" name="IS_STATE" defaultValue={null} required  class="input "
             value={data.IS_STATE}
             style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
             onChange={(e) =>
               loadData({
                 ...data,
                 ...{
                  IS_STATE: e.target.value,
                     UPDATED_BY: userDetils?.USER_ID,
                     UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                 },
               })
             }>
            <option value="">Та сонголт хийнэ үү.</option>
            <option value={1}>Тийм</option>
            <option value={2}>Үгүй</option>
       
          </Input>

                        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тийм/Үгүй гэсэн сонголтын тайлбарыг товчлон оруулна:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.IS_STATE_DESCRIPTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            IS_STATE_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />

                    </div>



                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Дотоод зохион байгуулалтын бүтэц, чиг үүргийг оновчтой тодорхойлж, орон тоо, чиг үүргийн давхардлыг арилгаж,  зардлыг хэмнэх шинэчилэл хийсэн үү?</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Дотоод зохион байгуулалтын бүтэц, чиг үүргийг оновчтой тодорхойлж, орон тоо, чиг үүргийн давхардлыг арилгаж,  зардлыг хэмнэх шинэчилэл хийсэн үү?</h1>
            <Input id="IS_CHANGE"  type="select" name="IS_CHANGE" defaultValue={null} required  class="input "
             value={data.IS_CHANGE}
             style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
             onChange={(e) =>
               loadData({
                 ...data,
                 ...{
                  IS_CHANGE: e.target.value,
                     UPDATED_BY: userDetils?.USER_ID,
                     UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                 },
               })
             }>
            <option value="">Та сонголт хийнэ үү.</option>
            <option value={1}>Тийм</option>
            <option value={2}>Үгүй</option>
       
          </Input>

                        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тийм/Үгүй гэсэн сонголтын тайлбарыг товчлон оруулна:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.IS_CHANGE_DESCRIPTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            IS_CHANGE_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />

                    </div>




                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Удирдлагын цалин хөлсийг орлого, үр ашигтай нь уялдуулсан уу?</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Удирдлагын цалин хөлсийг орлого, үр ашигтай нь уялдуулсан уу?</h1>
            <Input id="IS_LINKED"  type="select" name="IS_LINKED" defaultValue={null} required  class="input "
             value={data.IS_LINKED}
             style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
             onChange={(e) =>
               loadData({
                 ...data,
                 ...{
                  IS_LINKED: e.target.value,
                     UPDATED_BY: userDetils?.USER_ID,
                     UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                 },
               })
             }>
            <option value="">Та сонголт хийнэ үү.</option>
            <option value={1}>Тийм</option>
            <option value={2}>Үгүй</option>
       
          </Input>

                        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тийм/Үгүй гэсэн сонголтын тайлбарыг товчлон оруулна:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.IS_LINKED_DESCRIPTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            IS_LINKED_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />

                    </div>



                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Үйл ажиллагааны чиглэл, цар хүрээ, түвшин зэргийг харгалзан нэг хэлбэр, нийтлэг жишгээр ангилан тогтоодог зарчимд шилжсэн  эсэх талаарх дүгнэлт </b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
          <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Үйл ажиллагааны чиглэл, цар хүрээ, түвшин зэргийг харгалзан нэг хэлбэр, нийтлэг жишгээр ангилан тогтоодог зарчимд шилжсэн  эсэх талаарх дүгнэлт </h1>
            <Input id="IS_SCOPED"  type="select" name="IS_SCOPED" defaultValue={null} required  class="input "
             value={data.IS_SCOPED}
             style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
             onChange={(e) =>
               loadData({
                 ...data,
                 ...{
                  IS_SCOPED: e.target.value,
                     UPDATED_BY: userDetils?.USER_ID,
                     UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                 },
               })
             }>
            <option value="">Та сонголт хийнэ үү.</option>
            <option value={1}>Тийм</option>
            <option value={2}>Үгүй</option>
       
          </Input>

                        <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Тийм/Үгүй гэсэн сонголтын тайлбарыг товчлон оруулна:</h1>
                  <input
                      class="input  is-size-7"
                      type="text"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.IS_SCOPED_DESCRIPTION}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            IS_SCOPED_DESCRIPTION: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />

                    </div>

                    <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Өмнөх тайлант хугацааны зардал /2020 он/</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Цалин хөлс:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.PREV_SALARY_COST}
                    name="PREV_SALARY_COST"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          PREV_SALARY_COST:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Шагнал урамшуулал:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.PREV_PROMOTION_COST}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            PREV_PROMOTION_COST: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зочин төлөөлөгч хүлээн авахад зарцуулсан:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.PREV_GUEST_COST}
                    name="PREV_GUEST_COST"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          PREV_GUEST_COST:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />
             
                </div>




                <div style={{border:'0.3px dashed #ccc', padding:'10px',}}>
            <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Тайлант хугацааны зардал /2021 он/</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Цалин хөлс:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.CY_SALARY_COST}
                    name="CY_SALARY_COST"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          CY_SALARY_COST:e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                          UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                        },
                      })
                    }
                  />

            
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Шагнал урамшуулал:</h1>
                  <input
                      class="input  is-size-7"
                      type="number"
                      style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                      value={data.CY_PROMOTION_COST}
                      onChange={(e) => {
                        loadData({
                          ...data,
                          ...{
                            CY_PROMOTION_COST: e.target.value,
                            UPDATED_BY: userDetils?.USER_ID,
                            UPDATED_DATE: dateFormat(new Date(), "dd-mmm-yyyy"),
                          },
                        });
                      }}
                    />
                  <h1 style={{font:"16px/26px Arial, Helvetica, sans-serif"}}>Зочин төлөөлөгч хүлээн авахад зарцуулсан:</h1>
                  <input
                  style={{font:"16px/26px Arial, Helvetica, sans-serif"}}
                    class="input "
                    type="number"
                    value={data.CY_GUEST_COST}
                    name="CY_GUEST_COST"
                    onChange={(e) =>
                      loadData({
                        ...data,
                        ...{
                          CY_GUEST_COST:e.target.value,
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


export default Sudal3;
