import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './sud5_modal'
import './../App.css'


class DataTable extends Component {

  render() {

    const items = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.first}</td>
          <td>{item.last}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.location}</td>
          <td>{item.phone}</td>
          <td>{item.location}</td>
          <td>{item.location}</td>
          <td>{item.location}</td>
          <td>{item.location}</td>
          <td>{item.location}</td>
          <td>{item.location}</td>
          <td>{item.location}</td>
          <td>{item.location}</td>
          <td>{item.location}</td>
          <td>{item.location}</td>
          <td>{item.location}</td>
          <td>{item.location}</td>
          <td>{item.location}</td>
          <td>{item.location}</td>
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
 
      <Table responsive hover>
        <thead >
        <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>Дугаар</th>
  
    <th style={{border:'1px solid #ccc', textAlign:'center'}}  colspan="2">Хандивын гүйлгээний</th>
    <th style={{textAlign:'center',border:'1px solid #ccc'}}  colspan="5">Санхүүжүүлсэн төсөл арга хэмжээний</th>
    <th  style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}} colspan="2" rowspan="4">Гэрээний </th>
    <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Тайлант хугацаанд санхүүжүүлсэн дүн /төгрөгөөр/</th>
    <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Гэрээний хэрэгжилтийн дүгнэсэн эсэх</th>
          <th style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}} colspan="2" rowspan="4">Санхүүжүүлэх </th>
          <th style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}}  colspan="7"rowspan="4">Төрийн бус байгууллагын мэдээлэл</th>
          <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th>
    <tr>
    <th rowspan="7" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Огноо</th>
    <th rowspan="7" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Утга</th>
  </tr>
    
     
  <tr>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зориулалт</th>
    <th colspan="4"  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Төсвийн гүйцэтгэлийн тайлангийн хөтөлбөр, арга хэмжээ /ТБОНӨААНБ-ууд энэ хэсэг хамааралгүй/</th>
  </tr>
  
  <tr>
    <th rowspan="5" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хөтөлбөрийн нэр</th>
    <th rowspan="5" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хөтөлбөрийн код</th>
    <th rowspan="5" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зориулалтын нэр</th>
    <th rowspan="5" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зориулалтын код</th>
  </tr>
 <tr>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дүн /төгрөгөөр/</th>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хугацаа</th>
  </tr>
 


   <tr>
    <th rowspan="3" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Шаардлагатай байсан эсэх</th>
    <th rowspan="3" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Үр дүн, тайлбар, тодруулга</th>
  </tr> 


  
  <tr>
    <th rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Регистрийн дугаар</th>
    <th rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Нэр</th>
    <th rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Үйл ажиллагааны чиглэл</th>
    <th rowspan="4"  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Холбоо барих утас</th>
    
    <th  rowspan="4" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>И-мэйл хаяг</th>
    <th colspan="2" style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Удирдлагын </th>
  </tr>
  <tr>
    <th  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Овог</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Нэр</th>
  </tr>


         
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>

     
     
    )
  }
}

export default DataTable;