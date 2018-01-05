import React, {Component} from "react";
import API from '../data/api'
class ShowBar extends Component {
  constructor(props){
    super();
  }
  
  componentDidMount(){
    debugger
    fetch(API + "/api/v1/walk_thrus/" + this.props.showId)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      debugger
    })
  }
  
  
  render(){
    console.log(this)
    return(
      <div className='show-bar'>
        <table id={this.props.tableId} >
        </table>
      </div>
    )
  }
}

export default ShowBar