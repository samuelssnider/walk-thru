import React, {Component} from "react";
import ShowExpandImage from './ShowExpandImage.js'

class Steps extends Component {
  constructor() {
    super();
    this.state = { expanded: false }
  }
  
  onChildChanged(newState) {
    this.setState({ expanded: newState })
  }
  
  render(){
    var data = this.props.data
    var steps = data[0].steps.map(function(step){
      return (<tr key={step.id} className={step.id}>
                <td>
                  <img className='wt-image' alt='walk through' src={step.img_source}/>
                </td>
                <td className='step-title'>{step.title}</td>
                <td className='step-description'>{step.description}
                  <ShowExpandImage stepID={step.id} callbackParent={() => this.onChildChanged} />
                </td>
              </tr>
            )
    })
    return(
      <tbody>
        {steps}
      </tbody>
    )
  }
}

export default Steps