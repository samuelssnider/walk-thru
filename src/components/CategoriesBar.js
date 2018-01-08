import React, {Component} from "react";
import API from '../data/api'
class CategoriesBar extends Component {
  constructor(props){
    super();
    this.state = {}
  }
  
  componentWillMount(){
    fetch(API + "/api/v1/categories")
    .then (response  => {
      return response.json()
    })
    .then(data => {
      this.setState({categories: data})
    })
  }
  
  appendCategories(data){
    if(data){
      return(
        <tbody>
          <tr>
            <td>Title</td>
            <td>Walkthroughs</td>
          </tr>
        </tbody>
      )
    }
  }
  
  render(){
    return(
      <div>
        <table>
          {this.appendCategories(this.state.categories)}
        </table>
      </div>
    )
  }
}

export default CategoriesBar