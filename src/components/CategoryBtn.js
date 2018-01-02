import React, {Component} from "react";
import DDButton from './DDButton'
class CategoryBtn extends Component {
  render(){
    return(
      <div className="left-justify categories">Categories <DDButton/> </div>
    )
  }
}

export default CategoryBtn