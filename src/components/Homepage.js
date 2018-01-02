import React, { Component } from "react";
import WelcomeSign from './WelcomeSign'
import TopNav from './TopNav'
import HomeWT from './HomeWT'

class Homepage extends Component {
  render(){
    return(
      <div>
        <TopNav />
        <WelcomeSign />
        <HomeWT />
      </div>
    )
  }
}

export default Homepage