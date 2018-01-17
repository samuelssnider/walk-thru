import React, {Component} from "react";
import { Link } from 'react-router-dom'

class FinishedButton extends Component {
  render(){
    return(
      <button className='try-center'><Link to='/'>Finish Creating Your Walkthru!</Link></button>
    )
  }
}

export default FinishedButton