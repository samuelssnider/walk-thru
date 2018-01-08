import React, {Component} from "react";
import plus from '../data/plus.png'
class WelcomeSign extends Component {
  constructor(props){
    super();
    this.state = { title: '',
                   description: '',
                   image: ''      }
  }
  
  render(){
    return(
      <div className= 'wt-form'>
        <form >
          <input className='wt-title-in my-input' placeholder= "Your Walk Thru Title Here"
                 valueLink={this.linkState('email')}></input> <br/>
          <input className='wt-description-in my-input' placeholder= "Your Walk Thru Description Here"
                 onChange={this.handleDescriptionChange}></input> <br/> 
          <input className='wt-image-in my-input' placeholder= "Your Walk Thru Image (HTML link) Here"
                 onChange={this.handleImageChange}></input> <br/>
        </form>
        <img alt="plus" onClick={this.addWT} className='create-wt-image'src={plus}/>
      </div>
    )
  }
}

export default WelcomeSign