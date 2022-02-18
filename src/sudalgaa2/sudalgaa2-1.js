import React, { Component} from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter ,Button, Form, FormGroup, Label, Input } from 'reactstrap';


import './../App.css';
import Sidebar from '../pages/sidebar';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Navbar/footer'




export default class Sudalgaa2_1 extends Component {
  state = {
    ID : 0,
    HEMNELT_DUN: '',
    HEMNELT_PERCENT: '',
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
    DOCUMENT_PERCENT: '',
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    console.log(`checked: ${this.state.agreement}`);
    fetch('http://hr.audit.mn/public/api/v1/survey1/111', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        HEMNELT_DUN: this.state.HEMNELT_DUN,
        HEMNELT_PERCENT: this.state.HEMNELT_PERCENT,
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
        DOCUMENT_PERCENT: this.state.DOCUMENT_PERCENT,
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
    fetch('http://hr.audit.mn/public/api/v1/survey1/111', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ID : this.state.ID,
        HEMNELT_DUN: this.state.HEMNELT_DUN,
        HEMNELT_PERCENT: this.state.HEMNELT_PERCENT,
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
        DOCUMENT_PERCENT: this.state.DOCUMENT_PERCENT,
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
      const {ID, HEMNELT_DUN,  HEMNELT_PERCENT,  NEW_EMP_COUNT,  NEW_EMP_SALARY,  RENEW_EMP_COUNT,  RENEW_EMP_SALARY, IMP_SALARY_COUNT,  IMP_SALARY_AMOUNT,  IMP_PROMO_COUNT,  IMP_PROMO_AMOUNT,  IMP_GUEST_AMOUNT,  IMP_GIFT_AMOUNT,  CAR_COUNT,  CAR_AMOUNT,  FURNITURE_AMOUNT,  CLOTHES_AMOUNT,
      OTHER_TOOLS_AMOUNT,  EXTERNAL_EVENT_AMOUNT,  INTERNAL_EVENT_AMOUNT,  CEREMONY_AMOUNT,  CONTENT_AMOUNT,  BASE_PLAN_AMOUNT,  BASE_COMPLETION_AMOUNT,  BASE_PERCENT,  DOCUMENT_PLAN_AMOUNT,
      DOCUMENT_COMPLETION_AMOUNT,  DOCUMENT_PERCENT} = this.props.item
      this.setState({ ID, HEMNELT_DUN,  HEMNELT_PERCENT,  NEW_EMP_COUNT,  NEW_EMP_SALARY,  RENEW_EMP_COUNT,  RENEW_EMP_SALARY, IMP_SALARY_COUNT,  IMP_SALARY_AMOUNT,  IMP_PROMO_COUNT,  IMP_PROMO_AMOUNT,  IMP_GUEST_AMOUNT,  IMP_GIFT_AMOUNT,  CAR_COUNT,  CAR_AMOUNT,  FURNITURE_AMOUNT,  CLOTHES_AMOUNT,
        OTHER_TOOLS_AMOUNT,  EXTERNAL_EVENT_AMOUNT,  INTERNAL_EVENT_AMOUNT,  CEREMONY_AMOUNT,  CONTENT_AMOUNT,  BASE_PLAN_AMOUNT,  BASE_COMPLETION_AMOUNT,  BASE_PERCENT,  DOCUMENT_PLAN_AMOUNT,
        DOCUMENT_COMPLETION_AMOUNT,  DOCUMENT_PERCENT })
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
        agreement: false
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
      <div class="page-body-section pt-4">
        <h1 style={{color:'#002d74',marginBottom:'20px',font:"16px/26px Arial, Helvetica, sans-serif"}}><b>ТӨРИЙН БОЛОН ОРОН НУТГИЙН ӨМЧИТ, ТЭДГЭЭРИЙН ОРОЛЦООТОЙ ХУУЛИЙН ЭТГЭЭДИЙН ТАЛААРХ ЕРӨНХИЙ МЭДЭЭЛЭЛ</b></h1>
      
      
    <div  style={{height:"750px",background: '#f2f2f2',width:"100%",border:'double', font:"16px/26px Georgia, Garamond, Serif",overflow:"auto"}}>
    <div class="row">

 
  
    <Form  onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>

          <div class="column" >
          <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Үндсэн үйл ажиллагааны чиглэлүүдийг товч бичих</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="phone"><b>Харьяалах салбар</b></Label>
       
          <Input type="select" name="select" id="exampleSelect" required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Хууль хүчний байгууллага</option>
            <option>Мэдээллийн технологи, харилцаа холбоо</option>
            <option>Эрүүл мэнд</option>
            <option>Хот тохижилт, хог хаягдал</option>
            <option>Боловсрол</option>
            <option>Барилга хот байгуулалт</option>
            <option>Хөдөлмөр нийгмийн хамгаалал</option>
            <option>Бусад</option>
          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Өөрийн үйл ажиллагааны чиглэлийг дэлгэрэнгүй бичих</b></Label><br></br>
          <Input required type="textarea" name="text" id="exampleText" />
        </FormGroup>
       
  

        </FormGroup>


  



        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Төрийн болон орон нутгийн өмчийн эзэмшлийн хувь</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="NEW_EMP_COUNT">Эзэмшлийн хувь:</Label>
          <Input required type="number" name="NEW_EMP_COUNT" id="NEW_EMP_COUNT" onChange={this.onChange} value={this.state.NEW_EMP_COUNT === null ? '' : this.state.NEW_EMP_COUNT}  placeholder="Тоон утга оруулна уу."/>
          <br></br>
          <small class="help-block">/Тоогоор/</small>
         
        </FormGroup>
        </FormGroup>



        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Үүсгэн байгуулсан шийдвэрийн огноо, дугаар</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_COUNT">Шийдвэрийн огноо:</Label>
          <Input required type="date" name="date" id="exampleDate" placeholder="Өдөр-Сар-Он" />
          <br></br>
          <br></br>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_SALARY">Шийдвэрийн дугаар:</Label>
          <Input required type="number" name="RENEW_EMP_SALARY" id="RENEW_EMP_SALARY" onChange={this.onChange} value={this.state.RENEW_EMP_SALARY === null ? '' : this.state.RENEW_EMP_SALARY}  placeholder="Тоон утга оруулна уу." />
          <br></br>
          <small class="help-block">/Тоогоор/</small>
          
        </FormGroup>
        </FormGroup>


        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Тухайн шийдвэр нь ТБОНӨТ хуулийн 9 дүгээр зүйл, МУЗЗНДНТУТ хуулийн 18 дугаар зүйлтэй нийцэж байгаа юу?</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
       
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_SALARY_COUNT">Та сонголт хийнэ үү.</Label>
          <Input type="select" name="select" id="exampleSelect" required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Тийм</option>
            <option>Үгүй</option>
       
          </Input>
          
        </FormGroup>
     
        </FormGroup>






        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Улсын бүртгэлийн гэрчилгээ дэх дүрмийн сангийн хэмжээ</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Дүрмийн сангийн хэмжээ:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
       
        </FormGroup>



        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Санхүүгийн тайлан дахь төрийн болон орон нутгийн эзэмшлийн өмчийн дүн</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Өмчийн дүн:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
       
        </FormGroup>


        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Бүтэц, орон тоо баталсан шийдвэрийн огноо, дугаар</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_COUNT">Шийдвэрийн огноо:</Label>
          <Input required type="date" name="date" id="exampleDate" placeholder="Өдөр-Сар-Он" />
          <br></br>
          <br></br>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_SALARY">Шийдвэрийн дугаар:</Label>
          <Input required type="number" name="RENEW_EMP_SALARY" id="RENEW_EMP_SALARY" onChange={this.onChange} value={this.state.RENEW_EMP_SALARY === null ? '' : this.state.RENEW_EMP_SALARY}  placeholder="Тоон утга оруулна уу." />
          <br></br>
          <small class="help-block">/Тоогоор/</small>
          
        </FormGroup>
        </FormGroup>


        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Орон тоо</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="NEW_EMP_COUNT">Дээд шатны /Захирал, гүйцэтгэх, тэргүүн, дэд захирал/удирдах албан тушаалтан:</Label>
          <Input required type="number" name="NEW_EMP_COUNT" id="NEW_EMP_COUNT" onChange={this.onChange} value={this.state.NEW_EMP_COUNT === null ? '' : this.state.NEW_EMP_COUNT}  placeholder="Тоон утга оруулна уу."/>
          <br></br>
          <small class="help-block">/Хүний тоогоор/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="NEW_EMP_COUNT">Дунд шатны / газар, хэлтэс, алба/ удирдах албан тушаалтан:</Label>
          <Input required type="number" name="NEW_EMP_COUNT" id="NEW_EMP_COUNT" onChange={this.onChange} value={this.state.NEW_EMP_COUNT === null ? '' : this.state.NEW_EMP_COUNT}  placeholder="Тоон утга оруулна уу."/>
          <br></br>
          <small class="help-block">/Хүний тоогоор/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="NEW_EMP_COUNT">Гүйцэтгэх албан тушаалтны тоо:</Label>
          <Input required type="number" name="NEW_EMP_COUNT" id="NEW_EMP_COUNT" onChange={this.onChange} value={this.state.NEW_EMP_COUNT === null ? '' : this.state.NEW_EMP_COUNT}  placeholder="Тоон утга оруулна уу."/>
          <br></br>
          <small class="help-block">/Хүний тоогоор/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="NEW_EMP_COUNT">Дүн:</Label>
          <Input required type="number" name="NEW_EMP_COUNT" id="NEW_EMP_COUNT" onChange={this.onChange} value={this.state.NEW_EMP_COUNT === null ? '' : this.state.NEW_EMP_COUNT}  placeholder="Тоон утга оруулна уу."/>
          <br></br>
          <small class="help-block">/Хүний тоогоор/</small>
         
        </FormGroup>
        </FormGroup>

        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Эдийн засгийн зорилтот түвшний ашиг, алдагдал </b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Төлөвлөгөө:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Гүйцэтгэл:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Зөрүү:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
       
        </FormGroup>



        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Тайлант хугацааны Зорилтот түвшиндээ бүрэн хүрсэн үү?</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
       
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_SALARY_COUNT">Та сонголт хийнэ үү.</Label>
          <Input type="select" name="select" id="exampleSelect" required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Тийм</option>
            <option>Үгүй</option>
       
          </Input>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="NEW_EMP_COUNT">Зорилтот түвшин /Хувиар/:</Label>
          <Input required type="number" name="NEW_EMP_COUNT" id="NEW_EMP_COUNT" onChange={this.onChange} value={this.state.NEW_EMP_COUNT === null ? '' : this.state.NEW_EMP_COUNT}  placeholder="Тоон утга оруулна уу."/>
          <br></br>
          <small class="help-block">/Тоогоор/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Тийм/Үгүй гэсэн сонголтын тайлбарыг товчлон оруулна уу.</b></Label><br></br>
          <Input required type="textarea" name="text" id="exampleText" />
        </FormGroup>
     
        </FormGroup>



        
        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Өмнөх тайлант хугацааны ашиг/алдагдал /2020/</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Борлуулалтын орлого:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Үйл ажиллагаа (борлуулалт, ерөнхий удирдлага)-ны зардал:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Үндсэн бус үйл ажиллагааны ашиг/алдагдал:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Орлогын албан татварын зардал:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Тайлант үеийн цэвэр ашиг/алдагдал:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Ашиг/алдагдлын талаарх товч тайлбар, тодруулга:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
       
        </FormGroup>





             
        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Тайлант хугацааны ашиг/алдагдал</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Борлуулалтын орлого:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Үйл ажиллагаа (борлуулалт, ерөнхий удирдлага)-ны зардал:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Үндсэн бус үйл ажиллагааны ашиг/алдагдал:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Орлогын албан татварын зардал:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Тайлант үеийн цэвэр ашиг/алдагдал:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Ашиг/алдагдлын талаарх товч тайлбар, тодруулга:</Label>
          <Input required type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
        </FormGroup>
       
        </FormGroup>



        
        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Танай компанийн үйл ажиллагааг төрөөс эрхлэн гүйцэтгэх шаардлагатай юу?</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
       
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_SALARY_COUNT">Та сонголт хийнэ үү.</Label>
          <Input type="select" name="select" id="exampleSelect" required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Тийм</option>
            <option>Үгүй</option>
       
          </Input>
         <br></br>
        
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Тийм/Үгүй гэсэн сонголтын тайлбарыг товчлон оруулна уу.</b></Label><br></br>
          <Input  type="textarea" name="text" id="exampleText" required/>
        </FormGroup>
     
        </FormGroup>



        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Дотоод зохион байгуулалтын бүтэц, чиг үүргийг оновчтой тодорхойлж, орон тоо, чиг үүргийн давхардлыг арилгаж,  зардлыг хэмнэх шинэчилэл хийсэн үү?</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
       
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_SALARY_COUNT">Та сонголт хийнэ үү.</Label>
          <Input type="select" name="select" id="exampleSelect" required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Тийм</option>
            <option>Үгүй</option>
       
          </Input>
         <br></br>
        
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Тийм/Үгүй гэсэн сонголтын тайлбарыг товчлон оруулна уу.</b></Label><br></br>
          <Input  type="textarea" name="text" id="exampleText" required/>
        </FormGroup>
     
        </FormGroup>



        

        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Удирдлагын цалин хөлсийг орлого, үр ашигтай нь уялдуулсан уу?</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
       
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_SALARY_COUNT">Та сонголт хийнэ үү.</Label>
          <Input type="select" name="select" id="exampleSelect" required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Тийм</option>
            <option>Үгүй</option>
       
          </Input>
         <br></br>
        
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Тийм/Үгүй гэсэн сонголтын тайлбарыг товчлон оруулна уу.</b></Label><br></br>
          <Input  type="textarea" name="text" id="exampleText" required/>
        </FormGroup>
     
        </FormGroup>


        
        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px', font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Үйл ажиллагааны чиглэл, цар хүрээ, түвшин зэргийг харгалзан нэг хэлбэр, нийтлэг жишгээр ангилан тогтоодог зарчимд шилжсэн  эсэх талаарх дүгнэлт </b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
       
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_SALARY_COUNT">Та сонголт хийнэ үү.</Label>
          <Input type="select" name="select" id="exampleSelect" required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Тийм</option>
            <option>Үгүй</option>
       
          </Input>
         <br></br>
        
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Тийм/Үгүй гэсэн сонголтын тайлбарыг товчлон оруулна уу.</b></Label><br></br>
          <Input  type="textarea" name="text" id="exampleText" required/>
        </FormGroup>
     
        </FormGroup>


        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Өмнөх тайлант хугацааны зардал /2020 он/</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Цалин хөлс:</Label>
          <Input  type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." required/>
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Шагнал урамшуулал:</Label>
          <Input  type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Зочин төлөөлөгч хүлээн авахад зарцуулсан:</Label>
          <Input  type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          
          
        </FormGroup>
       
        </FormGroup>




        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Тайлант хугацааны зардал /2021 он/</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
   
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Цалин хөлс:</Label>
          <Input  type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." required/>
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Шагнал урамшуулал:</Label>
          <Input  type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
          <small class="help-block">/Төгрөгөөр/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CAR_AMOUNT">Зочин төлөөлөгч хүлээн авахад зарцуулсан:</Label>
          <Input  type="number" name="CAR_AMOUNT" id="CAR_AMOUNT" onChange={this.onChange} value={this.state.CAR_AMOUNT === null ? '' : this.state.CAR_AMOUNT}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." />
          <br></br>
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
<div class="column" >



        


          
        {/* <Button variant="primary" onClick={() => this.handleModalShowHide()}>Илгээх</Button>
        <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal> */}
                {/* <Button color="danger" onClick={this.toggle}>Toggle</Button>
            <Modal funk={true} isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal> */}
      
</div>

      </Form>
      </div>
      {/* <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          <a href="">Судалгааг үнэн зөв бөглөснөө хүлээн зөвшөөрч байна.</a>
        </Checkbox>
        </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>  */}
      </div>
  
    </div>
  </div>

    );
//  }
 }
}

//export default Sudalgaa1;    