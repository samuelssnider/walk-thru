import React, {Component} from "react";
import expand from '../data/expand.png'

class ShowExpandImage extends Component {
  appendInstructions(stepID){
    // this.setState({stepID: stepID})
    debugger
  }
  
  render(){
    return(
      <img className='expand-image' onClick={this.appendInstructions(this.props.stepID)} alt='expand' src={expand}></img>
    )
  }
}

export default ShowExpandImage