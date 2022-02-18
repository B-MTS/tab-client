import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import './../App.css'
import Sudalgaa2_3 from './sudalgaa2-3'

class ModalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    } ;
  }



  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>

      const label = this.props.buttonLabel

      let button = ''
      let title = ''

      if(label === 'Засах'){
        button = <Button
                  color="warning"
                  onClick={this.toggle}
                  style={{float: "left", marginRight:"10px"}}>{label}
                </Button>
        title = 'Edit Item'
      } else {
        button = <Button
                  color="success"
                  onClick={this.toggle}
                  style={{float: "left", marginRight:"10px"}}>{label}
                </Button>
        title = 'ТӨРИЙН БОЛОН ОРОН НУТГИЙН ӨМЧИТ, ТЭДГЭЭРИЙН ОРОЛЦООТОЙ ХУУЛИЙН ЭТГЭЭДИЙН 2021 ОНЫ САНХҮҮГИЙН ТАЙЛАНГИЙН ЗАРИМ ҮЗҮҮЛЭЛТ'
        
      }


      return (
   
      <div>
        {button}
        <Modal size="lg" style={{maxWidth: '1600px',background: '#f2f2f2', width: '100%'}} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <Sudalgaa2_3
              addItemToState={this.props.addItemToState}
              updateState={this.props.updateState}
              toggle={this.toggle}
              item={this.props.item} />
          </ModalBody>
        </Modal>
      </div>

    )
  }
}

export default ModalForm