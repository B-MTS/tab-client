import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter ,Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './../App.css';

class Sudalgaa3 extends React.Component {
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
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Овог нэр</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
        
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Овог нэр:</b></Label>
          <Input required type="text" name="text" id="exampleText" placeholder="Жишээ. А.Болд"/>
        </FormGroup>
 
        </FormGroup>


        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Албан тушаал </b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
        
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Албан тушаал:</b></Label>
          <Input required type="text" name="text" id="exampleText" placeholder="Албан тушаал оруулна уу."/>
        </FormGroup>
 
        </FormGroup>



      <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хамаарах албан тушаалын ангилал</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
        <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IMP_SALARY_COUNT">Хамаарах албан тушаалын ангилал</Label>
          <Input type="select" name="select" defaultValue={null} id="exampleSelect" required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Тэргүүн түшмэл</option>
            <option>Эрхэлсэн түшмэл</option>
       
          </Input>
  
        </FormGroup>
  

        </FormGroup>


        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Удирдах албан тушаалтны ажлын байрны талбайн хэмжээ /м.кв/</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
        
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_SALARY">Ажлын өрөө:</Label>
          <Input required type="number" name="RENEW_EMP_SALARY" id="RENEW_EMP_SALARY" onChange={this.onChange} value={this.state.RENEW_EMP_SALARY === null ? '' : this.state.RENEW_EMP_SALARY}  placeholder="Тоон утга оруулна уу." />
      
          <small class="help-block">/Тоогоор/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_SALARY">Амралтын өрөө:</Label>
          <Input required type="number" name="RENEW_EMP_SALARY" id="RENEW_EMP_SALARY" onChange={this.onChange} value={this.state.RENEW_EMP_SALARY === null ? '' : this.state.RENEW_EMP_SALARY}  placeholder="Тоон утга оруулна уу." />
     
          <small class="help-block">/Тоогоор/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_SALARY">Тусдаа ариун цэврийн өрөө:</Label>
          <Input required type="number" name="RENEW_EMP_SALARY" id="RENEW_EMP_SALARY" onChange={this.onChange} value={this.state.RENEW_EMP_SALARY === null ? '' : this.state.RENEW_EMP_SALARY}  placeholder="Тоон утга оруулна уу." />
     
          <small class="help-block">/Тоогоор/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_SALARY">Уулзалтын өрөө:</Label>
          <Input required type="number" name="RENEW_EMP_SALARY" id="RENEW_EMP_SALARY" onChange={this.onChange} value={this.state.RENEW_EMP_SALARY === null ? '' : this.state.RENEW_EMP_SALARY}  placeholder="Тоон утга оруулна уу." />
    
          <small class="help-block">/Тоогоор/</small>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_SALARY">Бусад өрөө:</Label>
          <Input required type="number" name="RENEW_EMP_SALARY" id="RENEW_EMP_SALARY" onChange={this.onChange} value={this.state.RENEW_EMP_SALARY === null ? '' : this.state.RENEW_EMP_SALARY}  placeholder="Тоон утга оруулна уу." />
       
          <small class="help-block">/Тоогоор/</small>
 
        </FormGroup>
        </FormGroup>


        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Нийт талбайн хэмжээ /м.кв/</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
        <FormGroup>
        
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="RENEW_EMP_SALARY">Нийт талбайн хэмжээ /м.кв/:</Label>
          <Input required type="number" name="RENEW_EMP_SALARY" id="RENEW_EMP_SALARY" onChange={this.onChange} value={this.state.RENEW_EMP_SALARY === null ? '' : this.state.RENEW_EMP_SALARY}  placeholder="Тоон утга оруулна уу." />
  
          <small class="help-block">/Тоогоор/</small>
          
 
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
export default Sudalgaa3;