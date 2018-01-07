import React, {Component} from "react";
import API from '../data/api'
import ShowTitle from './ShowTitle'
import Steps from './Steps'
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
  
  
  
  appendData(data){
    if(data){
      return(
        <ShowTitle data={data} id={this.props.tableId} />
      )
    }
  }
  
  
  render(){
    return(
      <div className='show-bar'>
        {this.appendData(this.state.walkThrus)}
      </div>
    )
  }
}

export default ShowBar