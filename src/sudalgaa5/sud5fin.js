import React, { Component } from "react";
import ModalForm from "./sud5_modal";
import DataTable from './DataTable';
class Sud5_fin extends React.Component {
  
  state = {
    items: []
  }

  getItems(){
    fetch('')
      .then(response => response.json())
      .then(items => this.setState({items}))
      .catch(err => console.log(err))
  }

  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount(){
    this.getItems()
  }

    render() {
        return (
            
            <div class="columns">
               
                <div class="column">
               
                          <div class="card">   
            
                        <header class="card-header">
                            <p style={{color:"#002d74"}} class="card-header-title">
                          ТӨРИЙН БУС БАЙГУУЛЛАГУУДААС 2021 ОНД ХУДАЛДАН АВСАН БАРАА, АЖИЛ ҮЙЛЧИЛГЭЭНИЙ ТӨЛБӨРТ ОЛГОСОН САНХҮҮЖИЛТ
                            </p>
                        </header>
      <ModalForm buttonLabel="Судалгаа оруулах" addItemToState={this.addItemToState}/>     
                        <div class="card-body">
                            <div class="table-container">
                            <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
                         
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}
export default Sud5_fin;