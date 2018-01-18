import React, {Component} from "react";
import plus from '../data/plus.png'
import API from '../data/api'
import FinishedButton from './FinishedButton'
class CreateBar extends Component {
  constructor(props){
    super();
    this.state = { title: '',
                   description: '',
                   image: '',
                   hideWT: false,
                   hideStep: true,
                   steps: [],
                   instructions: [],
                   currentPH: "Walk Thru"
                   }
   this.handleTitleChange = this.handleTitleChange.bind(this);
   this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
   this.handleImageChange = this.handleImageChange.bind(this);
   this.addWT = this.addWT.bind(this);
   this.unhideStep = this.unhideStep.bind(this);
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
  // handleStepTitleChange(event) {
  //   this.setState({title: event.target.value});
  // }
  // handleStepDescriptionChange(event) {
  //   this.setState({description: event.target.value});
  // }
  // handleStepImageChange(event) {
  //   this.setState({image: event.target.value});
  // }
  // 
  // handleInstructionTitleChange(event) {
  //   this.setState({title: event.target.value});
  // }
  // handleInstructionDescriptionChange(event) {
  //   this.setState({description: event.target.value});
  // }
  // handleInstructionImageChange(event) {
  //   this.setState({image: event.target.value});
  // }
  
  clearFields(event){
    this.refs.titleField.value = ""
    this.refs.descriptionField.value = ""
    this.refs.imageField.value = ""
  }
  
  createWalkThru(event){
    this.clearFields(event)
    var bodyObject =JSON.stringify({"title": this.state.title, "description": this.state.description, "image": this.state.image })
    fetch(API + '/api/v1/walk_thrus', {
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
      method: 'POST',
      body: bodyObject,
    })
    .then (response => response.json())
    .then (response => this.setState({wtData: response, hideWT: true, hideStep: false, currentPH: "Step"}))
  }
  
  createStep(event){
    this.clearFields(event)
    var bodyObject =JSON.stringify({"walk_thruID": this.state.wtData[0].id, "title": this.state.title, "description": this.state.description, "image": this.state.image  })
    fetch(API + '/api/v1/steps', {
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
      method: 'POST',
      body: bodyObject,
    })
    .then (response => response.json())
    .then (response => this.setState({stepData: response, currentPH: "Instruction", hideStep: true}))
  }
  
  createInstruction(event){
    this.clearFields(event)
    var bodyObject =JSON.stringify({"stepID": this.state.stepData[0].id, "title": this.state.title, "content": this.state.description, "image": this.state.image })
    fetch(API + '/api/v1/instructions' , {
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json' },
      method: 'POST',
      body: bodyObject,
    })
    .then (response => response.json())
    .then (response => this.setState({step: response, instructions: (this.state.instructions.push(response))}))
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
      if(this.state.hideWT === false){
        this.createWalkThru(event)
      } else if (this.state.hideStep === false){
        this.createStep(event)
      } else {
        this.createInstruction(event)
      }
    } else{
      alert(message)
    }
  }
  
  // addStep(event){
  //   var message = "Please fill in the fields for: "
  //   var passing = true
  //   if(this.state.title.length === 0){
  //     message += "Title "
  //     passing = false
  //   }
  //   if(this.state.description.length === 0){
  //     message += "Description"
  //     passing = false
  //   }
  //   if(passing){
  //     this.createStep(event)
  //   } else{
  //     alert(message)
  //   }
  // }
  // 
  // addInstruction(event){
  //   var message = "Please fill in the fields for: "
  //   var passing = true
  //   if(this.state.title.length === 0){
  //     message += "Title "
  //     passing = false
  //   }
  //   if(this.state.description.length === 0){
  //     message += "Description"
  //     passing = false
  //   }
  //   if(passing){
  //     this.createInstruction(event)
  //   } else{
  //     alert(message)
  //   }
  // }
  
  unhideStep(){
    this.setState({hideStep: false, currentPH: "Step"})
  }
  
  soFar(){
    var stepTitles = this.state.steps.map(function(step) {
      this.state.wtData[0].id
    })
  }
  
  finishedButton(){
    if(this.state.hideWT){
      return(
        <FinishedButton />
      )
    }
  }
  
  stepFinishedButton(){
    if(this.state.hideStep && this.state.hideWT){
      return(
            <button onClick={this.unhideStep}>Click here if this step has all its instructions entered</button>
      )
    }
  }
  
  render(){
    return(
      <div className= 'wt-form'>
        {this.soFar()}
        {this.finishedButton()}
        {this.stepFinishedButton()}
        <form className='wt-thing'>
               <input ref="titleField"type="text" value={this.state.value} className='wt-title-in my-input' placeholder={this.state.currentPH +" Title"}
                 onChange={this.handleTitleChange}></input> <br/>
               <input ref="descriptionField" className='wt-description-in my-input' placeholder= {this.state.currentPH +" Description"}
                 onChange={this.handleDescriptionChange}></input> <br/> 
               <input ref="imageField"className='wt-image-in my-input' placeholder= {this.state.currentPH +" Image"}
                 onChange={this.handleImageChange}></input> <br/>
        </form>
        <img alt="plus" onClick={this.addWT} className='create-wt-image'src={plus}/>
      </div>
    )
    
    
    // else if(!this.state.hideStep) {
    //   return(
    //     <div className= 'step-form'>
    //    
    //       <form className='step-thing'>
    //         <input type="text" value={this.state.value} className='step-title-in my-input' placeholder= "Your Step Title Here"
    //                onChange={this.handleStepTitleChange}></input> <br/>
    //         <input className='step-description-in my-input' placeholder= "Your Step Description Here"
    //                onChange={this.handleStepDescriptionChange}></input> <br/> 
    //         <input className='step-image-in my-input' placeholder= "Your Step Image (HTML link) Here"
    //                onChange={this.handleStepImageChange}></input> <br/>
    //       </form>
    //       <img alt="plus" onClick={this.addStep} className='create-wt-image'src={plus}/>
    //     </div>
    //   )
    // }
    // else {
    //   return(
    //     <div className= 'instruction-form'>
    //       <form className='instruction-thing'>
    //         <input type="text" value={this.state.value} className='step-title-in my-input' placeholder= "Your Instruction Title Here"
    //                onChange={this.handleInstructionTitleChange}></input> <br/>
    //         <input className='step-description-in my-input' placeholder= "Your Instruction Description Here"
    //                onChange={this.handleInstructionDescriptionChange}></input> <br/> 
    //         <input className='step-image-in my-input' placeholder= "Your Instruction Image (HTML link) Here"
    //                onChange={this.handleInstructionImageChange}></input> <br/>
    //       </form>
    // 
    //       <img alt="plus" onClick={this.addInstruction} className='create-wt-image'src={plus}/>
    //     </div>
    //   )
    // }
  }
}

export default CreateBar