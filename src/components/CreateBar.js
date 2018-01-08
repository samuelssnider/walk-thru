import React, {Component} from "react";
import plus from '../data/plus.png'
class WelcomeSign extends Component {
  render(){
    return(
      <div className= 'wt-form'>
        <form >
          <input className='wt-title-in my-input' placeholder= "Your Walk Thru Title Here"></input> <br/>
          <input className='wt-description-in my-input' placeholder= "Your Walk Thru Description Here"></input> <br/> 
          <input className='wt-image-in my-input' placeholder= "Your Walk Thru Image (HTML link) Here"></input> <br/>
        </form>
        <img className='create-wt-image'src={plus}/>
      </div>
    )
  }
}

export default WelcomeSign