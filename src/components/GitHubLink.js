import React, {Component} from "react";
import github from "../data/github.png"
class GitHubLink extends Component {
  render(){
    return(
      <img className='github-logo' alt='github' src={github}/>
    )
  }
}

export default GitHubLink