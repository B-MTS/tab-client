import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './sud8_modal'
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
            <th  colspan="3" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>Автомашины ерөнхий мэдээлэл</th>
            <th rowspan="2" colspan="5" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Автомашин ашиглалтын талаар</th>
        <th rowspan="4" colspan="3" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Автомашины бүртгэл, хөдөлгөөн</th>
               <th colspan="4" rowspan="4" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Автомашины ашиглалттай холбоотой гарсан урсгал зардал</th>
            <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th>


  <tr>
    <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Марк</th>
    <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Улсын дугаар </th>
    <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хөдөлгүүрийн цилиндрийн багтаамж V (с.с)</th>
  </tr>

  
  <tr>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зориулалт </th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Ашиглаж буй бүтэц, нэгж, албан тушаалтан </th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Ашиглах эрх олгосон тогтоол, шийдвэрийн нэр, огноо, дугаар </th>
    <th  colspan="2"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Жолоочийн мэдээлэл </th>
  </tr>
  
  <tr>
    <th rowspan="6"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Орон тооны мэдээлэл</th>
    <th rowspan="6"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Жилийн цалингийн нийт зардал </th>
  </tr>

   <tr>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Ашиглалтад орсон огноо</th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Балансын үнэ</th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}> Нэмэгдсэн, хасагдсан шалтгаан</th>
  </tr> 

 <tr>
    <th colspan="2"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Шатахууны зардал </th>
    <th colspan="2"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Сэлбэг, тос, бусад зардал</th>
  </tr>

  
  <tr>
    <th rowspan="2" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дүн</th>
    <th rowspan="2" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зардлын эх үүсвэр</th>
  </tr>

  
  <tr>
    <th rowspan="2" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дүн</th>
    <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зардлын эх үүсвэр</th>
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