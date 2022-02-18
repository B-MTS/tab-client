import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './sud3_modal'
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
            <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Овог нэр</th>
            <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Албан тушаалын нэр</th>
            <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Хамаарах албан тушаалын ангилал</th>
          
            <tr style={{verticalAlign:'middle',textAlign:'center'}}>
    <th style={{borderRight:'1px solid #ccc'}} colspan="5">Удирдах албан тушаалтны ажлын байрны талбайн хэмжээ /м.кв/</th>
  </tr>
  <tr>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Ажлын өрөө</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Амралтын өрөө</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Тусдаа ариун цэврийн өрөө</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Уулзалтын өрөө</th>
    <th style={{textAlign:'center',borderRight:'1px solid #ccc'}}>Бусад өрөө</th>
  </tr>
  <th rowspan="2"  style={{verticalAlign:'middle',textAlign:'center', borderRight:'1px solid #ccc'}}>Нийт талбайн хэмжээ /м.кв/</th>
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