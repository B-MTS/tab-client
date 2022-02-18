import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter ,Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './../App.css';

class Sudalgaa8 extends React.Component {
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
   
  
    <Form  onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
<div  style={{height:"750px",background: '#f2f2f2',width:"100%",border:'double', font:"16px/26px Georgia, Garamond, Serif",overflow:"auto"}}>
          <div class="column" >



      
     <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Автомашины ерөнхий мэдээлэл</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
        
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Марк:</b></Label>
          <Input required type="text" name="text" id="exampleText" placeholder="Утга оруулна уу."/>
          <br></br>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Улсын дугаар:</b></Label>
          <Input required type="text" name="text" id="exampleText" placeholder="Утга оруулна уу."/>
          <br></br>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Хөдөлгүүрийн цилиндрийн багтаамж V (с.с):</b></Label>
          <Input required type="text" name="text" id="exampleText" placeholder="Утга оруулна уу."/>

        </FormGroup>
 
        </FormGroup>



        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Автомашин ашиглалтын талаар</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>

        <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Зориулалт:</b></Label>
          <Input type="select" name="select" defaultValue={null} id="exampleSelect" required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Албан тушаалын</option>
            <option>Албан ажлын</option>
            <option>Хөдөө ажлын</option>
          </Input>
          <br></br>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="phone"><b> Ашиглаж буй бүтэц, нэгж, албан тушаалтан</b></Label>
          <Input required type="text" name="text" id="exampleText" placeholder="Утга оруулна уу."/>
          <br></br>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="phone"><b>  Ашиглах эрх олгосон тогтоол, шийдвэрийн нэр, огноо, дугаар</b></Label>
          <Input required type="text" name="text" id="exampleText" placeholder="Утга оруулна уу."/>
          <br></br>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_COUNT">Шийдвэрийн огноо:</Label>
          <Input required type="date" name="date" id="exampleDate" placeholder="Өдөр-Сар-Он" />
          <br></br>
        
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_SALARY">Шийдвэрийн дугаар:</Label>
          <Input required type="number" name="RENEW_EMP_SALARY" id="RENEW_EMP_SALARY" onChange={this.onChange} value={this.state.RENEW_EMP_SALARY === null ? '' : this.state.RENEW_EMP_SALARY}  placeholder="Тоон утга оруулна уу." />
    
          <small class="help-block">/Тоогоор/</small>

          
        </FormGroup>
     
        <FormGroup>

        <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="phone"><b>Жолоочийн мэдээлэл:</b></Label><br></br>
        <FormGroup style={{paddingLeft:'60px'}}>
        <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="phone"><b> Орон тооны мэдээлэл</b></Label>
          <Input required type="text" name="text" id="exampleText" placeholder="Утга оруулна уу."/>

          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="SURVEY_ID"><b>Жилийн цалингийн нийт зардал:</b></Label>
          <Input type="number" name="SURVEY_ID" id="SURVEY_ID" onChange={this.onChange} value={this.state.SURVEY_ID === null ? '' : this.state.SURVEY_ID}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." required/>
       
          <small  class="help-block">/Төгрөгөөр/</small>


        </FormGroup>
        </FormGroup>
        </FormGroup>





              
     <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Автомашины бүртгэл, хөдөлгөөн</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
        
        <FormGroup>
        <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_COUNT">Ашиглалтад орсон огноо:</Label>
          <Input required type="date" name="date" id="exampleDate" placeholder="Өдөр-Сар-Он" />
          <br></br>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="SURVEY_ID">Балансын үнэ:</Label>
          <Input type="number" name="SURVEY_ID" id="SURVEY_ID" onChange={this.onChange} value={this.state.SURVEY_ID === null ? '' : this.state.SURVEY_ID}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." required/>
  
          <small  class="help-block">/Төгрөгөөр/</small>
  <br></br>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b> Нэмэгдсэн, хасагдсан  шалтгаан:</b></Label>
          <Input type="select" name="select" defaultValue={null} id="exampleSelect" required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Шинээр худалдан авсан</option>
            <option>Хандив тусламжаар авсан</option>
            <option>Балансаас балансад шилжүүлж авсан</option>
            <option>Акталсан</option>
            <option>Худалдан борлуулсан</option>
            <option>Балансаас баланс руу шилжүүлсэн</option>
          </Input>
        
        </FormGroup>
 
        </FormGroup>


        
              
     <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Автомашины ашиглалттай холбоотой гарсан урсгал зардал </b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
          
          <FormGroup>

          <h3 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b><u>Шатахууны зардал </u></b></h3>


  <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="SURVEY_ID">Дүн:</Label>
  <Input type="number" name="SURVEY_ID" id="SURVEY_ID" onChange={this.onChange} value={this.state.SURVEY_ID === null ? '' : this.state.SURVEY_ID}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." required/>
  <small  class="help-block">/Төгрөгөөр/</small>
  <br></br>
  <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Зардлын эх үүсвэр:</b></Label>
          <Input type="select" name="select" defaultValue={null} id="exampleSelect" required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Батлагдсан төсвөөс</option>
            <option>Харьяа байгууллагын төсвөөс</option>
            <option>Дээд шатны байгууллагын төсвөөс</option>
          </Input>
          <br></br>
          <h3 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b><u>Сэлбэг, тос, бусад зардал</u></b></h3>
  

  <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="SURVEY_ID">Дүн:</Label>
  <Input type="number" name="SURVEY_ID" id="SURVEY_ID" onChange={this.onChange} value={this.state.SURVEY_ID === null ? '' : this.state.SURVEY_ID}  placeholder="Мөнгөн дүнг төгрөгөөр оруулна уу." required/>
  <small  class="help-block">/Төгрөгөөр/</small>
  <br></br>
  <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Зардлын эх үүсвэр:</b></Label>
          <Input type="select" name="select" defaultValue={null} id="exampleSelect" required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Батлагдсан төсвөөс</option>
            <option>Харьяа байгууллагын төсвөөс</option>
            <option>Дээд шатны байгууллагын төсвөөс</option>
          </Input>

</FormGroup>
       
        </FormGroup>
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

      
</div>
</div>
      </Form>


    );
//  }
 }
}
export default Sudalgaa8;