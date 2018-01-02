import React, {Component} from "react";
import icon from "../data/icon.png"

class AppIcon extends Component {
  render(){
    return(
      <img className='walk-thru-logo' alt='walk through logo'src={icon}/>
    )
  }
}

export default AppIcon