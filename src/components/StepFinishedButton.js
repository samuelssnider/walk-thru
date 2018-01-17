import React, {Component} from "react";
class StepFinishedButton extends Component {
  render(){
    return(
      <button onClick={this.state.unhideStep}>Click here if this step has all its instructions entered</button>
    )
  }
}

export default StepFinishedButton