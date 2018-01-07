import React, {Component} from "react";
import Steps from './Steps'
class ShowTable extends Component {
  
  constructor() {
    super();
    this.state = { expanded: false }
  }
  
  onChildChanged(newState) {
    this.setState( {expanded: newState})
  }
  render(){
    var data = this.props.data
    return(
      <table id={this.props.id}>
        <thead>
          <tr className="walk-thru-title">
            <td><img src={data[0].image} alt={data[0].title} className='wt-image'></img></td>
            <td className='title-wt'> {data[0].title}</td>
            <td className='description-wt'>{data[0].description}</td>
          </tr>
        </thead>
        <Steps data={this.props.data} callbackParent={(newState) => this.onChildChanged(newState) } />
      </table>
    ) 
  }
}

export default ShowTable