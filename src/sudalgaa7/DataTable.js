import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './sud7_modal'
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
            <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc', Top:'200px'}}>Эрүүл мэндийн байгууллагын нэр</th>
            <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Коронавируст халдвараар өвчилсөн хүний тоо</th>
            <th rowspan="" colspan="1" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үүнээс:</th>
              <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Нэхэмжилсэн санхүүжилтийн дүн </th>
             <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}}>ЭМДС-аас олгосон санхүүжилт </th>

   <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}}>Коронавируст халдварын эмчилгээ үйлчилгээний нийт зардал</th>
   <th rowspan="2"  colspan="9" style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үүнээс:</th>  
    <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}}>ЭМДС-аас авах авлагын дүн /төгрөгөөр/ </th>
   <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Нэхэмжлэл олгосон санхүүжилтийн зөрүү</th>
   <th rowspan="4"  colspan="2" style={{verticalAlign:'middle',textAlign:'center',border:'1px solid #ccc'}}>Эмийн багцын үлдэгдэл </th>
   <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Тайлбар, тодруулга</th>
            <th rowspan="8"  style={{verticalAlign:'middle',textAlign:'center', border:'1px solid #ccc'}}>Үйлдэл</th>


  <tr>
    <th rowspan="6" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Гэрээр эмчлүүлсэн өвчтөний тоо</th>
  </tr>

  <tr>
    <th colspan="2" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Бэлтгэсэн эмийн багцын зардал</th>
    <th  colspan="7" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дэлгэрэнгүй</th>
    
  </tr>

  <tr>
    <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Тоо</th>
    <th rowspan="8" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дүн</th>
  </tr>

  <tr>
    <th rowspan="4" style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Нэг удаагийн хамгаалах хэрэгсэлийн зардал</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Шатахууны зардал</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Утасны зардал</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Цалин, хөлсний зардал</th>
    <th rowspan="4"  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Ашиглалтын зардал</th>
    <th rowspan="4"   style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Хөрөнгө бэлтгэсэн зардал</th>
    <th rowspan="4"   style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Бусад</th>
  </tr>

  <tr>
    <th  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Тоо</th>
    <th  style={{verticalAlign:'middle',textAlign:'center',borderRight:'1px solid #ccc'}}>Дүн</th>
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