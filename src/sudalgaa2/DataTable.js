import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './sud2-3_modal'
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
          <td>{item.hobby}</td>
          <td>{item.location}</td>
          <td>{item.hobby}</td>
          <td>{item.phone}</td>
          <td>{item.location}</td>
          <td>{item.phone}</td>
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
            <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>Дугаар</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>ТУЗ-ийн бүрэлдэхүүн</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>ТУЗ-ийн бүрэлдэхүүн болсон шийдвэрийн огноо</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>ТУЗ-ийн бүрэлдэхүүн болсон шийдвэрийн дугаар</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Овог нэр</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Одоо ажиллаж байгаа байгууллагын нэр</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Урамшуулал </th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>2021 онд ТУЗ гишүүнд олгосон нэг удаагийн тэтгэмж, орон сууцны хөнгөлөлт</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Одоо ажиллаж байгаа байгууллагын нэр</th>
            <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Урамшуулал </th>
 
           
    <th style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}} colspan="3" rowspan="1">2021 онд ТУЗ гишүүнд олгосон нэг удаагийн тэтгэмж, орон сууцны хөнгөлөлт</th>
  <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th>
  <tr>
    <th rowspan="2"  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Тушаал шийдвэрийн огноо</th>
    <th rowspan="2"  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Тушаал шийдвэрийн дугаар</th>
    <th rowspan="2"  style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Мөнгөн дүн</th>
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