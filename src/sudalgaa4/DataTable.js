import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './sud4_modal'
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
          <tr style={{border:'1px solid #ccc',}}>
            <th rowspan="2" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>Дугаар</th>
            <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Байршил</th>
            <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Түрээслүүлэгч байгууллагын регистрийн дугаар </th>
            <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Түрээслүүлэгч байгууллагын нэр</th>
            <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Зардлыг санхүүжүүлсэн эх үүсвэр </th>
            <tr style={{verticalAlign:'middle',textAlign:'center'}}>
    <th style={{borderRight:'1px solid #ccc'}} colspan="4">Байрны түрээсийн зардлын гүйцэтгэл</th>
  </tr>
  <tr>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Гэрээний дугаар</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Талбайн хэмжээ /м.кв/</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Нэгжийн үнэ</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Дүн</th>
  </tr>
  <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Тайлбар</th>
            <th style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Үйлдэл</th>
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