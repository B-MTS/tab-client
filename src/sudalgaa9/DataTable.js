import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './sud9_modal'
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
            <th  colspan="7" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>Тамирчны ерөнхий мэдээлэл</th>
            <th rowspan="2" colspan="3" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Цалин, нэмэгдэл /өссөн дүнгээр/</th>
       <th rowspan="4" colspan="4" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Урамшуулал /өссөн дүнгээр/</th>
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
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Мөнгөн дүн </th>
    <th  colspan="2" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Мөнгөн бус </th>
  </tr> 

 <tr>
    <th style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хөрөнгийн нэр төрөл </th>
    <th style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Үнэ</th>
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