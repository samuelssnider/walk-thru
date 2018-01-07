import React, {Component} from "react";
import Steps from './Steps'
class ShowTitle extends Component {
  render(){
    var data = this.props.data
    return(
      <table id={this.props.id}>
        <thead>
          <tr className="walk-thru-title">
            <td><img src={data[0].image} className='wt-image'></img></td>
            <td className='title-wt'> {data[0].title}</td>
            <td className='description-wt'>{data[0].description}</td>
          </tr>
        </thead>
        <Steps data={this.props.data} />
      </table>
    ) 
  }
}

export default ShowTitle