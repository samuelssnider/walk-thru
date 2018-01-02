import React, { Component } from "react";
import WelcomeSign from './WelcomeSign'
import TopNav from './TopNav'
import HomeWT from './HomeWT'
import BottomNav from './BottomNav.js'

class Homepage extends Component {
  render(){
    return(
      <div className='homepage'>
        <TopNav />
        <WelcomeSign />
        <HomeWT />
        <BottomNav />
      </div>
    )
  }
}

export default Homepage