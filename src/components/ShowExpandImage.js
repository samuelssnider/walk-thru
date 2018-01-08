import React, {Component} from "react";
import expand from '../data/expand.png'
import collapse from '../data/collapse.png'
import API from '../data/api'

class ShowExpandImage extends Component {
  constructor(){
    super();
    this.state = { expanded: false,
                   image: expand,
                 }
  }
  
  renderInstructions(data){
    
  }
  
  componentWillMount(){
    fetch(API + '/api/v1/steps/' + this.props.stepID)
    .then (response => {
      return response.json()
    }).then(data => {
      this.setState({step: data})
    })
  }
  
  onExpandClicked(){
    if(this.state.image === expand){
      this.setState({image: collapse})
      var data = this.state.step
      var instructions = data[0].instructions
      var renderInstructions = instructions.map(function(instruction){
        return(<tr key={instruction.id}>
                 <td>{instruction.title}</td>
                 <td>{instruction.content}</td>
               </tr>
        )
      })
      this.setState({instructions: renderInstructions})
      
    } else {
      this.setState({image: expand, instructions: undefined})
    }
  }
  render(){
    return(<div className="instructions-bar">
            <img className='expand-image' onClick={() => this.onExpandClicked()} alt='expand' src={this.state.image}></img>
            {this.state.instructions}
          </div>
    )
  }
}

export default ShowExpandImage