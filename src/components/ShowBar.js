import React, {Component} from "react";
import API from '../data/api'
class ShowBar extends Component {
  constructor(props){
    super();
    this.state = {}
  }
  
  componentWillMount(){
    fetch(API + "/api/v1/walk_thrus/" + this.props.showId)
    .then (response  => {
      return response.json()
    })
    .then(data => {
      this.setState({walkThrus: data})
    })
  }
  
  stepsToRender(data){
    var steps = data[0].steps.map(function(step){
      return (<tr className={step.id}>
                <td>
                  <img className='wt-image' src={step.img_source}/>
                </td>
                 <td className='step-title'>{step.title}</td>
                 <td>{step.description}</td>
              </tr>
             )
    })
    return steps
  }
  
  appendData(data){
    if(data){
      var steps = this.stepsToRender(data)
      return(
        <div>
          <tr className="walk-thru-title">
            <td><img src={data[0].image} className='wt-image'></img></td>
            <td className='title-wt'> {data[0].title}</td>
            <td className='description'>{data[0].description}</td>
          </tr>
          {steps}
        </div>
      )
    }
  }
  
  
  render(){
    return(
      <div className='show-bar'>
        <table id={this.props.tableId} >
          <tbody>
            {this.appendData(this.state.walkThrus)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ShowBar