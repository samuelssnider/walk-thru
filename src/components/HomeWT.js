import React, {Component} from "react";
import three from '../requests/three_wt'

three()
class HomeWT extends Component {
  render(){
    return(
      <div>
        <table className="home-walk-thru">
          <tbody>
            <tr>
              <th className="image-column"/>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default HomeWT