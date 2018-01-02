import React, {Component} from "react";
import Email from './Email'
import GitHubLink from './GitHubLink'
class BottomNav extends Component {
  render(){
    return(
      <div className="bottom-nav-bar">
        <GitHubLink />
        <Email />
      </div>
    )
  }
}

export default BottomNav