import React, {Component} from "react";
import plus from '../data/plus.png'
import API from '../data/api'
class WelcomeSign extends Component {
  constructor(props){
    super();
    this.state = { title: '',
                   description: '',
                   image: ''      }
   this.handleTitleChange = this.handleTitleChange.bind(this);
   this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
   this.handleImageChange = this.handleImageChange.bind(this);
   
   this.addWT = this.addWT.bind(this);
  }
  
  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }
  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }
  handleImageChange(event) {
    this.setState({image: event.target.value});
  }
  
  createWalkThru(){
    fetch(API + '/api/v1/walk_thrus', {
      method: 'POST',
      body: JSON.stringify({"title": this.state.title, "description": this.state.description, "image": this.state.image }),
    })
    .then (response => {
      return response.json()
    })
  }
  
  addWT(event){
    var message = "Please fill in the fields for: "
    var passing = true
    if(this.state.title.length === 0){
      message += "Title "
      passing = false
    }
    if(this.state.description.length === 0){
      message += "Description"
      passing = false
    }
    if(passing){
      this.createWalkThru()
    } else{
      alert(message)
    }
    
  }
  
  render(){
    return(
      <div className= 'wt-form'>
        <form >
          <input type="text" value={this.state.value} className='wt-title-in my-input' placeholder= "Your Walk Thru Title Here"
                 onChange={this.handleTitleChange}></input> <br/>
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