import React, { Component,useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter ,Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './../App.css';
import Sidebar from '../pages/sidebar';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Navbar/footer';
import LoginModal from "./modal";
import {


  Select,

} from 'antd';
const { Option } = Select;
const userDetils = JSON.parse(localStorage.getItem("userDetails"));
const suffixSelector = (
  <Form.Item name="suffix" noStyle>
    <Select
      style={{
        width: 50,
      }}
      value="3" selected
    >
      <Option value="MNT">₮</Option>
    </Select>
  </Form.Item>
);


class Sudalgaa1 extends React.Component {
  state = {
    ID : 0,
    SURVEY_ID:'', 
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
    BASE_PERCENT: '',
    DOCUMENT_PLAN_AMOUNT: '',
    DOCUMENT_COMPLETION_AMOUNT: '',
    CREATED_BY: userDetils?.USER_ID,   
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }


  submitFormAdd = e => {
    e.preventDefault()
    console.log(`checked: ${this.state.agreement}`);
    fetch('http://hr.audit.mn/public/api/v1/survey1Insert', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        SURVEY_ID: this.state.SURVEY_ID,
        BUDGET_AMOUNT:this.state.BUDGET_AMOUNT,
        RUNNING_COST_AMOUNT:this.state.RUNNING_COST_AMOUNT,
        INVESTMENT_COST_AMOUNT:this.state.INVESTMENT_COST_AMOUNT,
        EXECUTION_AMOUNT:this.state.EXECUTION_AMOUNT,
        EXECUTION_RUNNING_COST:this.state.EXECUTION_RUNNING_COST,
        EXECUTION_INVESTMENT_COST:this.state.EXECUTION_INVESTMENT_COST,
        HEMNELT_DUN: this.state.HEMNELT_DUN,
        NEW_EMP_COUNT: this.state.NEW_EMP_COUNT,
        NEW_EMP_SALARY: this.state.NEW_EMP_SALARY,
        RENEW_EMP_COUNT: this.state.RENEW_EMP_COUNT,
        RENEW_EMP_SALARY: this.state.RENEW_EMP_SALARY,
        IMP_SALARY_COUNT: this.state.IMP_SALARY_COUNT,
        IMP_SALARY_AMOUNT: this.state.IMP_SALARY_AMOUNT,
        IMP_PROMO_COUNT: this.state.IMP_PROMO_COUNT,
        IMP_PROMO_AMOUNT: this.state.IMP_PROMO_AMOUNT,
        IMP_GUEST_AMOUNT: this.state.IMP_GUEST_AMOUNT,
        IMP_GIFT_AMOUNT: this.state.IMP_GIFT_AMOUNT,
        CAR_COUNT: this.state.CAR_COUNT,
        CAR_AMOUNT: this.state.CAR_AMOUNT,
        FURNITURE_AMOUNT: this.state.FURNITURE_AMOUNT,
        CLOTHES_AMOUNT: this.state.CLOTHES_AMOUNT,
        OTHER_TOOLS_AMOUNT: this.state.OTHER_TOOLS_AMOUNT,
        EXTERNAL_EVENT_AMOUNT: this.state.EXTERNAL_EVENT_AMOUNT,
        INTERNAL_EVENT_AMOUNT: this.state.INTERNAL_EVENT_AMOUNT,
        CEREMONY_AMOUNT: this.state.CEREMONY_AMOUNT,
        CONTENT_AMOUNT: this.state.CONTENT_AMOUNT,
        BASE_PLAN_AMOUNT: this.state.BASE_PLAN_AMOUNT,
        BASE_COMPLETION_AMOUNT: this.state.BASE_COMPLETION_AMOUNT,
        BASE_PERCENT: this.state.BASE_PERCENT,
        DOCUMENT_PLAN_AMOUNT: this.state.DOCUMENT_PLAN_AMOUNT,
        DOCUMENT_COMPLETION_AMOUNT: this.state.DOCUMENT_COMPLETION_AMOUNT,
        CREATED_BY: this.state.CREATED_BY,
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
          alert.show("амжилттай хадгаллаа");
        } else {
          console.log('failure')
          alert.show("амжилтгүй");
        }
      })
      .catch(err => console.log(err))
      alert.show("амжилтгүй");
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://hr.audit.mn/public/api/v1/survey1Insert', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ID : this.state.ID,
        SURVEY_ID: this.state.SURVEY_ID,
        BUDGET_AMOUNT:this.state.BUDGET_AMOUNT,
        RUNNING_COST_AMOUNT:this.state.RUNNING_COST_AMOUNT,
        INVESTMENT_COST_AMOUNT:this.state.INVESTMENT_COST_AMOUNT,
        EXECUTION_AMOUNT:this.state.EXECUTION_AMOUNT,
        EXECUTION_RUNNING_COST:this.state.EXECUTION_RUNNING_COST,
        EXECUTION_INVESTMENT_COST:this.state.EXECUTION_INVESTMENT_COST,
        HEMNELT_DUN: this.state.HEMNELT_DUN,
        NEW_EMP_COUNT: this.state.NEW_EMP_COUNT,
        NEW_EMP_SALARY: this.state.NEW_EMP_SALARY,
        RENEW_EMP_COUNT: this.state.RENEW_EMP_COUNT,
        RENEW_EMP_SALARY: this.state.RENEW_EMP_SALARY,
        IMP_SALARY_COUNT: this.state.IMP_SALARY_COUNT,
        IMP_SALARY_AMOUNT: this.state.IMP_SALARY_AMOUNT,
        IMP_PROMO_COUNT: this.state.IMP_PROMO_COUNT,
        IMP_PROMO_AMOUNT: this.state.IMP_PROMO_AMOUNT,
        IMP_GUEST_AMOUNT: this.state.IMP_GUEST_AMOUNT,
        IMP_GIFT_AMOUNT: this.state.IMP_GIFT_AMOUNT,
        CAR_COUNT: this.state.CAR_COUNT,
        CAR_AMOUNT: this.state.CAR_AMOUNT,
        FURNITURE_AMOUNT: this.state.FURNITURE_AMOUNT,
        CLOTHES_AMOUNT: this.state.CLOTHES_AMOUNT,
        OTHER_TOOLS_AMOUNT: this.state.OTHER_TOOLS_AMOUNT,
        EXTERNAL_EVENT_AMOUNT: this.state.EXTERNAL_EVENT_AMOUNT,
        INTERNAL_EVENT_AMOUNT: this.state.INTERNAL_EVENT_AMOUNT,
        CEREMONY_AMOUNT: this.state.CEREMONY_AMOUNT,
        CONTENT_AMOUNT: this.state.CONTENT_AMOUNT,
        BASE_PLAN_AMOUNT: this.state.BASE_PLAN_AMOUNT,
        BASE_COMPLETION_AMOUNT: this.state.BASE_COMPLETION_AMOUNT,
        BASE_PERCENT: this.state.BASE_PERCENT,
        DOCUMENT_PLAN_AMOUNT: this.state.DOCUMENT_PLAN_AMOUNT,
        DOCUMENT_COMPLETION_AMOUNT: this.state.DOCUMENT_COMPLETION_AMOUNT,
        CREATED_BY: this.state.CREATED_BY,
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const {ID,SURVEY_ID,BUDGET_AMOUNT,RUNNING_COST_AMOUNT, INVESTMENT_COST_AMOUNT,EXECUTION_AMOUNT,EXECUTION_RUNNING_COST,EXECUTION_INVESTMENT_COST,HEMNELT_DUN,   NEW_EMP_COUNT,  NEW_EMP_SALARY,  RENEW_EMP_COUNT,  RENEW_EMP_SALARY, IMP_SALARY_COUNT,  IMP_SALARY_AMOUNT,  IMP_PROMO_COUNT,  IMP_PROMO_AMOUNT,  IMP_GUEST_AMOUNT,  IMP_GIFT_AMOUNT,  CAR_COUNT,  CAR_AMOUNT,  FURNITURE_AMOUNT,  CLOTHES_AMOUNT,
      OTHER_TOOLS_AMOUNT,  EXTERNAL_EVENT_AMOUNT,  INTERNAL_EVENT_AMOUNT,  CEREMONY_AMOUNT,  CONTENT_AMOUNT,  BASE_PLAN_AMOUNT,  BASE_COMPLETION_AMOUNT,  BASE_PERCENT,  DOCUMENT_PLAN_AMOUNT,
      DOCUMENT_COMPLETION_AMOUNT,CREATED_BY} = this.props.item
      this.setState({ID,SURVEY_ID, BUDGET_AMOUNT,RUNNING_COST_AMOUNT,INVESTMENT_COST_AMOUNT, EXECUTION_AMOUNT,EXECUTION_RUNNING_COST,EXECUTION_INVESTMENT_COST,HEMNELT_DUN,  NEW_EMP_COUNT,  NEW_EMP_SALARY,  RENEW_EMP_COUNT,  RENEW_EMP_SALARY, IMP_SALARY_COUNT,  IMP_SALARY_AMOUNT,  IMP_PROMO_COUNT,  IMP_PROMO_AMOUNT,  IMP_GUEST_AMOUNT,  IMP_GIFT_AMOUNT,  CAR_COUNT,  CAR_AMOUNT,  FURNITURE_AMOUNT,  CLOTHES_AMOUNT,
        OTHER_TOOLS_AMOUNT,  EXTERNAL_EVENT_AMOUNT,  INTERNAL_EVENT_AMOUNT,  CEREMONY_AMOUNT,  CONTENT_AMOUNT,  BASE_PLAN_AMOUNT,  BASE_COMPLETION_AMOUNT,  BASE_PERCENT,  DOCUMENT_PLAN_AMOUNT,
        DOCUMENT_COMPLETION_AMOUNT,CREATED_BY})
    }
  }
  constructor(props){
    super(props);
    this.state = {
      modal: false,
        style:"dashboard",
        showHide : false,
        menuStatus:"open",
        sideShow: true,
        agreement: false,
        modalOpen: false

    };
    this.handleClick = this.handleClick.bind(this);
    
};

handleModalShowHide() {
  this.setState({ showHide: !this.state.showHide })
}
toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}
handleChange = e => this.setState({ agreement: e.target.checked });
handleClick() {

    switch(this.state.menuStatus)
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


  render() {
    return (
      <div className='dashboard' className={this.state.style}>
      <Navbar/>
      <Sidebar sideShowToggle={this.handleClick} showSide={this.state.sideShow}/>
      <Footer/>
      <div>
        <h1 style={{color:'#002d74',marginBottom:'20px',font:"16px/26px Arial, Helvetica, sans-serif"}}><b>ТӨСВИЙН ХЭМНЭЛТИЙН ТАЛААР АВСАН АРГА ХЭМЖЭЭНИЙ СУДАЛГАА</b></h1>
      
      
    <div  style={{height:"750px",background: '#f2f2f2',width:"100%",border:'double', font:"16px/26px Georgia, Garamond, Serif",overflow:"auto"}}>
    <div class="row">

 
  
    <Form  onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>

          <div class="column" >
          <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Батлагдсан төсөв гүйцэтгэл</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="phone"><b>Батлагдсан нийт төсөв:</b></Label>
          <Input  type="number" name="BUDGET_AMOUNT" id="BUDGET_AMOUNT" onChange={this.onChange} value={this.state.BUDGET_AMOUNT === null ? '' : this.state.BUDGET_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." required/>
          <Input  type="number" name="SURVEY_ID" id="SURVEY_ID" onChange={this.onChange} value={this.state.SURVEY_ID === null ? '' : this.state.SURVEY_ID}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." required/>
          <Input  type="number" name="CREATED_BY" id="CREATED_BY" onChange={this.onChange} value={this.state.CREATED_BY === null ? '' : this.state.CREATED_BY}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." required/>
      
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
     
        <FormGroup>

        <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="phone"><b>Үүнээс:</b></Label><br></br>
        <FormGroup style={{paddingLeft:'60px'}}>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RUNNING_COST_AMOUNT">Урсгал зардал:</Label>
          <Input type="number" name="RUNNING_COST_AMOUNT" id="RUNNING_COST_AMOUNT" onChange={this.onChange} value={this.state.RUNNING_COST_AMOUNT === null ? '' : this.state.RUNNING_COST_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." required/>
       
          <small  class="help-block">/Төгрөгөөр/</small>
           <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="INVESTMENT_COST_AMOUNT">Хөрөнгө оруулалтын зардал:</Label>
          <Input type="number" name="INVESTMENT_COST_AMOUNT" id="INVESTMENT_COST_AMOUNT" onChange={this.onChange} value={this.state.INVESTMENT_COST_AMOUNT === null ? '' : this.state.INVESTMENT_COST_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
      
          <small  class="help-block">/Төгрөгөөр/</small>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="EXECUTION_AMOUNT"><b>Төсвийн нийт гүйцэтгэл:</b></Label>
          <Input type="number" name="EXECUTION_AMOUNT" id="EXECUTION_AMOUNT" onChange={this.onChange} value={this.state.EXECUTION_AMOUNT === null ? '' : this.state.EXECUTION_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." required/>
         
          <small  class="help-block">/Төгрөгөөр/</small>
         
        </FormGroup>
         <FormGroup >
        <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="EXECUTION_RUNNING_COST"><b>Үүнээс:</b></Label>
        <br></br>
        <FormGroup style={{paddingLeft:'60px'}}>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="EXECUTION_RUNNING_COST">Урсгал зардал:</Label>
          <Input type="number" name="EXECUTION_RUNNING_COST" id="EXECUTION_RUNNING_COST" onChange={this.onChange} value={this.state.EXECUTION_RUNNING_COST === null ? '' : this.state.EXECUTION_RUNNING_COST}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." required/>
          <br></br>
          <small  class="help-block">/Төгрөгөөр/</small>
    
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="EXECUTION_INVESTMENT_COST">Хөрөнгө оруулалтын зардал:</Label>
          <Input type="number" name="EXECUTION_INVESTMENT_COST" id="EXECUTION_INVESTMENT_COST" onChange={this.onChange} value={this.state.EXECUTION_INVESTMENT_COST === null ? '' : this.state.EXECUTION_INVESTMENT_COST}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small  class="help-block">/Төгрөгөөр/</small>
          <br></br>
          </FormGroup>
        </FormGroup> 

        </FormGroup>


         <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Үндсэн үйл ажиллагаатай холбоотой, зайлшгүй шаардлагатайгаас бусад төрлийн зардлын хэмнэлт</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="HEMNELT_DUN">Зардлын хэмнэлтийн мөнгөн дүн:</Label>
          <Input type="number" name="HEMNELT_DUN" id="HEMNELT_DUN" onChange={this.onChange} value={this.state.HEMNELT_DUN === null ? '' : this.state.HEMNELT_DUN}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу."/>
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
        </FormGroup> 



        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px' , font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Шинээр чиг үүрэг, албан тушаал бий болгож нэмэгдүүлсэн орон тоо, олгосон цалингийн зардал</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="NEW_EMP_COUNT">Нэмэгдсэн орон тоо:</Label>
          <Input type="number" name="NEW_EMP_COUNT" id="NEW_EMP_COUNT" onChange={this.onChange} value={this.state.NEW_EMP_COUNT === null ? '' : this.state.NEW_EMP_COUNT}  placeholder="Тоон утга оруулна уу."/>
       
          <small class="help-block">/Тоогоор/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="NEW_EMP_SALARY">Цалингийн зардал:</Label>
          <Input  type="number" name="NEW_EMP_SALARY" id="NEW_EMP_SALARY" onChange={this.onChange} value={this.state.NEW_EMP_SALARY === null ? '' : this.state.NEW_EMP_SALARY}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
       
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
        </FormGroup>



        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Өндөр насны тэтгэвэр тогтоолгож чөлөөлөгдсөн ажилтан, албан тушаалтны орон тоонд нөхөн томилгоо хийж, олгосон цалингийн зардал</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_COUNT">Нэмэгдсэн орон тоо:</Label>
          <Input type="number" name="RENEW_EMP_COUNT" id="RENEW_EMP_COUNT" onChange={this.onChange} value={this.state.RENEW_EMP_COUNT === null ? '' : this.state.RENEW_EMP_COUNT}  placeholder="Тоон утга оруулна уу." />

          <small class="help-block">/Тоогоор/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_SALARY">Цалингийн зардал:</Label>
          <Input type="number" name="RENEW_EMP_SALARY" id="RENEW_EMP_SALARY" onChange={this.onChange} value={this.state.RENEW_EMP_SALARY === null ? '' : this.state.RENEW_EMP_SALARY}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />

          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
        </FormGroup>


        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Цалин хөлсийг нэмэгдүүлсэн, шагнал, урамшуулал олгосон, зочин төлөөлөгч хүлээн авах, бэлэг дурсгал (цүнх, календарь, мэндчилгээ г.м)-ын зардал гаргасан эсэх</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
        <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_SALARY_COUNT"><b>Нэмэгдүүлсэн цалин хөлс</b></Label>
        <br></br>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_SALARY_COUNT">Албан хаагчийн тоо:</Label>
          <Input  type="number" name="IMP_SALARY_COUNT" id="IMP_SALARY_COUNT" onChange={this.onChange} value={this.state.IMP_SALARY_COUNT === null ? '' : this.state.IMP_SALARY_COUNT}  placeholder="Тоон утга оруулна уу." />
        
          <small class="help-block">/Тоогоор/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_SALARY_AMOUNT">Нэмэгдсэн цалин хөлс:</Label>
          <Input  type="number" name="IMP_SALARY_AMOUNT" id="IMP_SALARY_AMOUNT" onChange={this.onChange} value={this.state.IMP_SALARY_AMOUNT === null ? '' : this.state.IMP_SALARY_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
   
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
        <FormGroup>
        <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_PROMO_COUNT"><b>Олгосон шагнал урамшуулал</b></Label>
        <br></br>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_PROMO_COUNT">Албан хаагчийн тоо:</Label>
          <Input  type="number" name="IMP_PROMO_COUNT" id="IMP_PROMO_COUNT" onChange={this.onChange} value={this.state.IMP_PROMO_COUNT === null ? '' : this.state.IMP_PROMO_COUNT}  placeholder="Тоон утга оруулна уу." />
          <br></br>
          <small class="help-block">/Тоогоор/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_PROMO_AMOUNT">Шагнал урамшуулал:</Label>
          <Input  type="number" name="IMP_PROMO_AMOUNT" id="IMP_PROMO_AMOUNT" onChange={this.onChange} value={this.state.IMP_PROMO_AMOUNT === null ? '' : this.state.IMP_PROMO_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
        <FormGroup>
        <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_GUEST_AMOUNT"><b>Зочин төлөөлөгч хүлээн авахад зарцуулсан:</b></Label>
        <br></br>
         
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_GUEST_AMOUNT">Мөнгөн дүн:</Label>
          <Input  type="number" name="IMP_GUEST_AMOUNT" id="IMP_GUEST_AMOUNT" onChange={this.onChange} value={this.state.IMP_GUEST_AMOUNT === null ? '' : this.state.IMP_GUEST_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
        <FormGroup>
        <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_GIFT_AMOUNT"><b> Бэлэг дурсгал (цүнх, календарь, мэндчилгээ г.м)-д зарцуулсан</b></Label>
        <br></br>
         
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_GIFT_AMOUNT">Мөнгөн дүн:</Label>
          <Input  type="number" name="IMP_GIFT_AMOUNT" id="IMP_GIFT_AMOUNT" onChange={this.onChange} value={this.state.IMP_GIFT_AMOUNT === null ? '' : this.state.IMP_GIFT_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
        </FormGroup>






        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>2021.02.17-ны өдрөөс өмнө Төрийн болон орон нутгийн өмчийн хөрөнгөөр бараа, ажил, үйлчилгээ худалдан авах тухай хуулийн дагуу зарлагдсанаас бусад хэлбэрээр худалдан авсан автомашин, албан конторын тавилга, албаны болон ажлын дүрэмт хувцас, амралт, алжаал тайлах, фитнесийн тоног төхөөрөмж, хэрэгсэлийн талаарх мэдээлэл</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_COUNT">Автомашины тоо:</Label>
          <Input  type="number" name="CAR_COUNT" id="CAR_COUNT" onChange={this.onChange} value={this.state.CAR_COUNT === null ? '' : this.state.CAR_COUNT}  placeholder="Тоон утга оруулна уу." />
          <br></br>
          <small class="help-block">/Тоогоор/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Автомашин дүн:</Label>
          <Input  type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="FURNITURE_AMOUNT">Албан конторын тавилгын дүн:</Label>
          <Input  type="number" name="FURNITURE_AMOUNT" id="FURNITURE_AMOUNT" onChange={this.onChange} value={this.state.FURNITURE_AMOUNT === null ? '' : this.state.FURNITURE_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CLOTHES_AMOUNT">Албаны болон ажлын дүрэмт хувцас худалдаж авсан дүн:</Label>
          <Input  type="number" name="CLOTHES_AMOUNT" id="CLOTHES_AMOUNT" onChange={this.onChange} value={this.state.CLOTHES_AMOUNT === null ? '' : this.state.CLOTHES_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="OTHER_TOOLS_AMOUNT">Амралт, алжаал тайлах, фитнесийн тоног төхөөрөмж, хэрэгслийн дүн:</Label>
          <Input  type="number" name="OTHER_TOOLS_AMOUNT" id="OTHER_TOOLS_AMOUNT" onChange={this.onChange} value={this.state.OTHER_TOOLS_AMOUNT === null ? '' : this.state.OTHER_TOOLS_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
        </FormGroup>
       
        </FormGroup>

        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Сургалт, семинар, хурал, зөвлөгөөнийг танхимаар зохион байгуулахад зарцуулсан</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="EXTERNAL_EVENT_AMOUNT">Мөнгөн дүн:</Label>
          <Input  type="number" name="EXTERNAL_EVENT_AMOUNT" id="EXTERNAL_EVENT_AMOUNT" onChange={this.onChange} value={this.state.EXTERNAL_EVENT_AMOUNT === null ? '' : this.state.EXTERNAL_EVENT_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
       
        </FormGroup>



        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хяналт шалгалт, дотоод албан томилолтод зарцуулсан</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="INTERNAL_EVENT_AMOUNT">Мөнгөн дүн:</Label>
          <Input  type="number" name="INTERNAL_EVENT_AMOUNT" id="INTERNAL_EVENT_AMOUNT" onChange={this.onChange} value={this.state.INTERNAL_EVENT_AMOUNT === null ? '' : this.state.INTERNAL_EVENT_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
       
        </FormGroup>

        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хяналт шалгалт, дотоод албан томилолтод зарцуулсан</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CEREMONY_AMOUNT">Мөнгөн дүн:</Label>
          <Input  type="number" name="CEREMONY_AMOUNT" id="CEREMONY_AMOUNT" onChange={this.onChange} value={this.state.CEREMONY_AMOUNT === null ? '' : this.state.CEREMONY_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
       
        </FormGroup>



        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Засгийн газрын шийдвэр гарснаас бусад баяр ёслол, тэмдэглэлт ой, урлагийн наадам, спортын уралдаан тэмцээн, салбарын өдөр, аялал зугаалга зэрэгт зарцуулсан</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CONTENT_AMOUNT">Мөнгөн дүн:</Label>
          <Input  type="number" name="CONTENT_AMOUNT" id="CONTENT_AMOUNT" onChange={this.onChange} value={this.state.CONTENT_AMOUNT === null ? '' : this.state.CONTENT_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
       
        </FormGroup>


        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хууль тогтоомж, Засгийн газрын албан ёсны шийдвэр, тэдгээрийн хэрэгжилт, цаг үеийн шинжтэй мэдээ, мэдээллийг олон нийтэд хүргэх, сурталчлан таниулахаас бусад зорилгоор байгууллага, хамт олныг сурталчлах, салбарын болон байгууллагын үйл ажиллагаатай холбоотой нэвтрүүлэг, контент, баримтат болон цуврал кино зэргийг санхүүжүүлсэн</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="BASE_PLAN_AMOUNT">Мөнгөн дүн:</Label>
          <Input type="number" name="BASE_PLAN_AMOUNT" id="BASE_PLAN_AMOUNT" onChange={this.onChange} value={this.state.BASE_PLAN_AMOUNT === null ? '' : this.state.BASE_PLAN_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
       
        </FormGroup>



        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Байгууллагын цахилгаан, дулааны эрчим хүч, цэвэр усны хэрэглээнд зарцуулсан </b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="BASE_COMPLETION_AMOUNT">Төлөвлөгөөний дүн:</Label>
          <Input type="number" name="BASE_COMPLETION_AMOUNT" id="BASE_COMPLETION_AMOUNT" onChange={this.onChange} value={this.state.BASE_COMPLETION_AMOUNT === null ? '' : this.state.BASE_COMPLETION_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
    
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="BASE_PERCENT">Гүйцэтгэлийн дүн:</Label>
          <Input type="number" name="BASE_PERCENT" id="BASE_PERCENT" onChange={this.onChange} value={this.state.BASE_PERCENT === null ? '' : this.state.BASE_PERCENT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
       
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
       
        </FormGroup>


        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Бичиг хэрэг, цаас, хувилагч, хэвлэгчийн хорны зэрэг зардалд зарцуулсан </b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="DOCUMENT_PLAN_AMOUNT">Төлөвлөгөөний дүн:</Label>
          <Input type="number" name="DOCUMENT_PLAN_AMOUNT" id="DOCUMENT_PLAN_AMOUNT" onChange={this.onChange} value={this.state.DOCUMENT_PLAN_AMOUNT === null ? '' : this.state.DOCUMENT_PLAN_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
      
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="DOCUMENT_COMPLETION_AMOUNT">Гүйцэтгэлийн дүн:</Label>
          <Input type="number" name="DOCUMENT_COMPLETION_AMOUNT" id="DOCUMENT_COMPLETION_AMOUNT" onChange={this.onChange} value={this.state.DOCUMENT_COMPLETION_AMOUNT === null ? '' : this.state.DOCUMENT_COMPLETION_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
       
        </FormGroup> 
        {/* <input type="checkbox" checked={this.state.agreement}  id="agree" onChange={this.handleChange} required/>
          <label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} htmlFor="agree">Судалгааг үнэн зөв бөглөсөн болно.</label> */}
         
     
       <Button style={{font:"16px/26px Arial, Helvetica, sans-serif"}} htmlFor="agree" color="danger" onClick={this.toggle}> <input type="checkbox" checked={this.state.agreement}  id="agree" onChange={this.handleChange} required/>
         Судалгааг үнэн зөв бөглөсөн болно.</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Судалгааг үнэн зөв бөглөөгүй тохиолдолд үүсэх эрх зүйн үр дагавар:</ModalHeader>
          <ModalBody>
            <img src="hariuts.png"></img>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Хаах</Button>
          </ModalFooter>
        </Modal>
        <br></br>          <br></br>
        <Button>Илгээх</Button>  
</div>
<div class="column">

      
</div>

      </Form>
      </div>

      </div>
  
    </div>
  </div>

    );
//  }
 }
}

export default Sudalgaa1;    