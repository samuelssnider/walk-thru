import React, {Component} from "react";
class TopNav extends Component {
  render(){
    return(
      <div className="top-nav-bar">
        <button className="left-justify">Categories</button>
        <textarea className="left-justify ta-size" placeholder="Search">  </textarea>
      </div>
    )
  }
}

export default TopNav