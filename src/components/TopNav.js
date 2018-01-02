import React, {Component} from "react";
import CategoryBtn from './CategoryBtn';
import AppIcon from './AppIcon'
class TopNav extends Component {
  render(){
    return(
      <div className="top-nav-bar">
        <AppIcon />
        <CategoryBtn />
          <textarea placeholder="search" className="left-justify ta-size"/>
      </div>
    )
  }
}

export default TopNav