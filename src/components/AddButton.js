import React, {Component} from "react";
import plus from '../data/plus.png'
class AddButton extends Component {
  render(){
    return(
      <img className='add-wt-image' src={plus} alt="plus sign"/>
    )
  }
}

export default AddButton