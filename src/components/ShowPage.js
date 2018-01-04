import React, {Component} from "react";
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import ShowBar from './ShowBar'
import axios from 'axios';
import API from '../data/api'

// import show from '../requests/show_one'

class ShowPage extends Component {
  
  
  componentDidMount(){
    debugger
    fetch(API + "/api/v1/walk_thrus/" + this.props.match.params.id)
    .then(function(data) {
      console.log data
    })
  }
  
  
  
  render() {
    return(
      <div className='categories-page'>
        <TopNav />
        <ShowBar />
        <BottomNav />
      </div>
    )
  }
}

export default ShowPage