import React, {Component} from "react";
import Steps from './Steps'
import edit from '../data/Edit.png'
import del from '../data/delete.png'
import API from '../data/api'
class ShowTable extends Component {
  
  constructor() {
    super();
    this.state = { expanded: false }
    this.deleteWT = this.deleteWT.bind(this)
  }
  
  deleteWT(event){
    fetch(API + "/api/v1/walk_thrus/" + this.props.wtID, {
      method: "DELETE"
    })
    // .then (response  => {
    //   debugger
    //   this.refs.table.hide()
    // })
  }
  
  onChildChanged(newState) {
    this.setState( {expanded: newState})
  }
  render(){
    var data = this.props.data
    return(
      <table ref='table'id={this.props.id}>
        <thead>
          <tr className="walk-thru-title">
            <td><img src={data[0].image} alt={data[0].title} className='wt-image'></img></td>
            <td className='title-wt'> {data[0].title}</td>
            <td className='description-wt'>
              {data[0].description}
              <img className= 'wt-delete-image' onClick={this.deleteWT} src={del} onClick={this.deleteWT} />
              <img className= 'wt-edit-image' src={edit} onClick={this.editWT} />
            </td>
          </tr>
        </thead>
        <Steps data={this.props.data} callbackParent={(newState) => this.onChildChanged(newState) } />
      </table>
    ) 
  }
}

export default ShowTable