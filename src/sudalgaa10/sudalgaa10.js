import React, { Component } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter ,Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './../App.css';
const userDetils = JSON.parse(localStorage.getItem("userDetails"));

class Sudalgaa10 extends React.Component {

  state = {
    P_ID : 0,
    SURVEY_ID: '',
    MEDIA_NAME: '',
    MEDIA_REGISTER_NO: '',
    MEDIA_TYPE: '',
    CONTRACT_NAME: '',
    CONTRACT_DATE: '',
    CONTRACT_NO: '',
    BEGIN_DATE: '',
    END_DATE: '',
    CONTRACT_AMOUNT: '',
    PROCUREMENT_TYPE: '',
    COST_TYPE: '',
    IS_PLANNED: '',
    IS_PREV: '',
    CREATED_BY: userDetils?.USER_ID,
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    console.log(`checked: ${this.state.agreement}`);
    fetch('http://hr.audit.mn/public/api/v1/survey10Insert', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        SURVEY_ID: this.state.SURVEY_ID,
        MEDIA_NAME: this.state.MEDIA_NAME,
        MEDIA_REGISTER_NO: this.state.MEDIA_REGISTER_NO,
        MEDIA_TYPE: this.state.MEDIA_TYPE,
        CONTRACT_NAME: this.state.CONTRACT_NAME,
        CONTRACT_DATE: this.state.CONTRACT_DATE,
        CONTRACT_NO: this.state.CONTRACT_NO,
        BEGIN_DATE: this.state.BEGIN_DATE,
        END_DATE: this.state.END_DATE,
        CONTRACT_AMOUNT: this.state.CONTRACT_AMOUNT,
        PROCUREMENT_TYPE: this.state.PROCUREMENT_TYPE,
        COST_TYPE: this.state.COST_TYPE,
        IS_PLANNED: this.state.IS_PLANNED,
        IS_PREV: this.state.IS_PREV,
        CREATED_BY: this.state.CREATED_BY,
        
      }
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
          console.log('success')
          //alert.show("амжилттай хадгаллаа");
        } else {
          console.log('failure')
         // alert.show("амжилтгүй");
        }
      })
      .catch(err => console.log(err))
      //alert.show("амжилтгүй");
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://hr.audit.mn/public/api/v1/survey10Insert', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        P_ID: this.state.P_ID,
        SURVEY_ID: this.state.SURVEY_ID,
        MEDIA_NAME: this.state.MEDIA_NAME,
        MEDIA_REGISTER_NO: this.state.MEDIA_REGISTER_NO,
        MEDIA_TYPE: this.state.MEDIA_TYPE,
        CONTRACT_NAME: this.state.CONTRACT_NAME,
        CONTRACT_DATE: this.state.CONTRACT_DATE,
        CONTRACT_NO: this.state.CONTRACT_NO,
        BEGIN_DATE: this.state.BEGIN_DATE,
        END_DATE: this.state.END_DATE,
        CONTRACT_AMOUNT: this.state.CONTRACT_AMOUNT,
        PROCUREMENT_TYPE: this.state.PROCUREMENT_TYPE,
        COST_TYPE: this.state.COST_TYPE,
        IS_PLANNED: this.state.IS_PLANNED,
        IS_PREV: this.state.IS_PREV,
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
         // alert.show("Системийн алдаа");
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const {P_ID, SURVEY_ID,  MEDIA_NAME,  MEDIA_REGISTER_NO,  MEDIA_TYPE,  CONTRACT_NAME,  CONTRACT_DATE, CONTRACT_NO,  BEGIN_DATE,  END_DATE,  CONTRACT_AMOUNT,  PROCUREMENT_TYPE,  COST_TYPE,  IS_PLANNED,  IS_PREV,  CREATED_BY,  
     } = this.props.item
      this.setState({ P_ID, SURVEY_ID,  MEDIA_NAME,  MEDIA_REGISTER_NO,  MEDIA_TYPE,  CONTRACT_NAME,  CONTRACT_DATE, CONTRACT_NO,  BEGIN_DATE,  END_DATE,  CONTRACT_AMOUNT,  PROCUREMENT_TYPE,  COST_TYPE,  IS_PLANNED,  IS_PREV,  CREATED_BY
       })
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
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Хэвлэл, мэдээллийн байгууллагын </b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
        
        <FormGroup>
        <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="SURVEY_ID"><b>Нэр:</b></Label>
          <Input required type="text" name="SURVEY_ID" id="SURVEY_ID" onChange={this.onChange} value={this.state.SURVEY_ID === null ? '' : this.state.SURVEY_ID}  placeholder="Утга оруулна уу."/>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CREATED_BY"><b>Нэр:</b></Label>
          <Input required type="text" name="CREATED_BY" id="CREATED_BY" onChange={this.onChange} value={this.state.CREATED_BY === null ? '' : this.state.CREATED_BY}  placeholder="Утга оруулна уу."/>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Нэр:</b></Label>
          <Input required type="text" name="MEDIA_NAME" id="MEDIA_NAME" onChange={this.onChange} value={this.state.MEDIA_NAME === null ? '' : this.state.MEDIA_NAME}  placeholder="Утга оруулна уу."/>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Регистрийн дугаар:</b></Label>
          <Input required type="text" name="MEDIA_REGISTER_NO" id="MEDIA_REGISTER_NO" onChange={this.onChange} value={this.state.MEDIA_REGISTER_NO === null ? '' : this.state.MEDIA_REGISTER_NO}  placeholder="Утга оруулна уу."/>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="exampleText"><b>Төрөл:</b></Label>
          <Input id="MEDIA_TYPE" onChange={this.onChange} value={this.state.MEDIA_TYPE === null ? '' : this.state.MEDIA_TYPE}  type="select" name="MEDIA_TYPE" defaultValue={null} required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Радио, FM</option>
            <option>Телевиз</option>
            <option>Сонин, сэтгүүл</option>
            <option>Цахим сайт </option>
       
          </Input>
        </FormGroup>
 
        </FormGroup>



        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Гэрээт ажлын мэдээлэл</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
        
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CONTRACT_NAME"><b>Гэрээт ажлын нэр:</b></Label>
          <Input required type="text" name="CONTRACT_NAME" id="CONTRACT_NAME" onChange={this.onChange} value={this.state.CONTRACT_NAME === null ? '' : this.state.CONTRACT_NAME}  placeholder="Утга оруулна уу."/>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CONTRACT_DATE">Oгноо:</Label>
          <Input required type="date" name="CONTRACT_DATE" id="CONTRACT_DATE" onChange={this.onChange} value={this.state.CONTRACT_DATE === null ? '' : this.state.CONTRACT_DATE}  placeholder="Өдөр-Сар-Он" />

          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CONTRACT_NO"><b>Дугаар:</b></Label>
          <Input required type="text" name="CONTRACT_NO" id="CONTRACT_NO" onChange={this.onChange} value={this.state.CONTRACT_NO === null ? '' : this.state.CONTRACT_NO}  placeholder="Утга оруулна уу."/>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="BEGIN_DATE"><b>Хугацаа:</b></Label>
          <Input required type="date" name="BEGIN_DATE" id="BEGIN_DATE" onChange={this.onChange} value={this.state.BEGIN_DATE === null ? '' : this.state.BEGIN_DATE}  placeholder="Жишээ.2021.01.01-2021.06.05"/>
         <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="END_DATE"><b>Хугацаа:</b></Label>
          <Input required type="date" name="END_DATE" id="END_DATE" onChange={this.onChange} value={this.state.END_DATE === null ? '' : this.state.END_DATE}  placeholder="Жишээ.2021.01.01-2021.06.05"/>

          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="CONTRACT_AMOUNT">Гэрээний төлбөр:</Label>
          <Input type="text" name="CONTRACT_AMOUNT" id="CONTRACT_AMOUNT" onChange={this.onChange} value={this.state.CONTRACT_AMOUNT === null ? '' : this.state.CONTRACT_AMOUNT}  onChange={this.onChange} value={this.state.SURVEY_ID === null ? '' : this.state.SURVEY_ID}  placeholder="тоон утга оруулна уу." required/>
   
          <small  class="help-block">/Тоогоор/</small>
          

          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="PROCUREMENT_TYPE"><b>Худалдан авах ажиллагааны сонгон шалгаруулалтын хэлбэр :</b></Label>
          <Input type="select" name="PROCUREMENT_TYPE" defaultValue={null} id="PROCUREMENT_TYPE" onChange={this.onChange} value={this.state.PROCUREMENT_TYPE === null ? '' : this.state.PROCUREMENT_TYPE}  required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option>Шууд худалдан авалт</option>
            <option>Харьцуулсан тендер</option>
            <option>Нээлттэй тендер</option>
       
          </Input>
        </FormGroup>
 
        </FormGroup>





        <FormGroup style={{border:'0.3px dashed #ccc', padding:'10px',}}>    
          <h1 style={{color:'#002d74',marginBottom:'20px',  font:"16px/26px Arial, Helvetica, sans-serif"}}><b>Бусад</b></h1>
          <hr style={{borderBottom:"2px solid #002d74", margin:'0.6rem 0'}}></hr>
    
        
        <FormGroup>
          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="COST_TYPE"><b>Зардлын төрөл:</b></Label>
          <Input required type="text" name="COST_TYPE" id="COST_TYPE" onChange={this.onChange} value={this.state.COST_TYPE === null ? '' : this.state.COST_TYPE} placeholder="Утга оруулна уу."/>
         
          

          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IS_PLANNED"><b>Худалдан авалтын төлөвлөгөөнд туссан эсэх:</b></Label>
          <Input type="select" name="IS_PLANNED" defaultValue={null} onChange={this.onChange} value={this.state.IS_PLANNED === null ? '' : this.state.IS_PLANNED} id="IS_PLANNED" required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option value="1">Тийм</option>
            <option value="2">Үгүй</option>
       
          </Input>


          <Label style={{font:"16px/26px Arial, Helvetica, sans-serif"}} for="IS_PREV"><b>Он дамжиж хэрэгжиж байгаа эсэх:</b></Label>
          <Input type="select" name="IS_PREV" defaultValue={null} id="IS_PREV" onChange={this.onChange} value={this.state.IS_PREV === null ? '' : this.state.IS_PREV}  required>
          <option value="">Та сонголт хийнэ үү.</option>
            <option value="1">Тийм</option>
            <option value="2">Үгүй</option>
       
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
export default Sudalgaa10;