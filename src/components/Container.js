import React, { Component } from "react";
import WelcomeSign from './WelcomeSign'
import TopNav from './TopNav'

class Container extends Component {
  render(){
    return(
      <div>
        <TopNav />
        <WelcomeSign />
      </div>
    )
  }
}

export default Container