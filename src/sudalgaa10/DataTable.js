import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './sud10_modal'
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
        <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>Дугаар</th>
            <th colspan="3"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>Хэвлэл, мэдээллийн байгууллагын</th>
            <th colspan="6"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Гэрээт ажлын мэдээлэл</th>
            <th colspan="3"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Бусад</th>
            <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th>


  <tr>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Нэр </th>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Регистрийн дугаар</th>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Төрөл</th>
  </tr>

  
  <tr>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Гэрээт ажлын нэр</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}> Огноо</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дугаар </th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хугацаа</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Гэрээний төлбөр</th>
    <th rowspan="4"   style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Худалдан авах ажиллагааны сонгон шалгаруулалтын хэлбэр  </th>
  </tr>

  <tr>
    <th  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зардлын төрөл</th>
    <th  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Худалдан авалтын төлөвлөгөөнд туссан эсэх</th>
    <th  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Он дамжиж хэрэгжиж байгаа эсэх</th>
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