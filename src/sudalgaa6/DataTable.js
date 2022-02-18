import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './sud6_modal'
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
            <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Хандив өгсөн иргэн, байгууллагын нэр</th>
            <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Хөрөнгийн ангилал</th>
              <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Хандивын орлогын дүн</th>
             <th style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}} colspan="2">Нягтлан бодох бүртгэлд тусгасан</th>
   <th  style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}} colspan="2">Хандивыг зарцуулах тухай шийдвэрийн</th>
   <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Хандивын зарцуулалтын дүн </th>  
    <th rowspan="2" style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}} colspan="1">Үүнээс: </th>
   <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үлдэгдэл дүн </th>
            <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th>
  <tr>
    <th rowspan="6"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дансны нэр</th>
    <th rowspan="6"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Мөнгөн дүн </th>
    
  </tr>

  <tr>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Огноо</th>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дугаар</th>
    
  </tr>

  <tr>
    <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Зориулалт бусаар зарцуулсан дүн</th>
    
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