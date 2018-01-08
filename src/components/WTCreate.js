import React, { Component } from "react";
import TopNav from './TopNav'
import BottomNav from './BottomNav.js'
import CreateBar from './CreateBar'

class Homepage extends Component {
  render(){
    return(
      <div className='homepage'>
        <TopNav />
        <CreateBar />
        <BottomNav />
      </div>
    )
  }
}

export default Homepage