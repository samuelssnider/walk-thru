import React, {Component} from "react";
import expand from '../data/expand.png'

class ShowExpandImage extends Component {
  constructor({initialExpanded }){
    super();
    this.state = { expanded: initialExpanded }
  }
  
  onExpandClicked(stepID){
    console.log(1)
  }
  
  render(){
    return(
      <img className='expand-image' onClick={() => this.onExpandClicked(this.props.stepID)} alt='expand' src={expand}></img>
    )
  }
}

export default ShowExpandImage