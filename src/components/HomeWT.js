import React, {Component} from "react";
import three from '../requests/three_wt'
import AddButton from './AddButton'
import WTTable from './WTTable'


three()
class HomeWT extends Component {
  render(){
    return(
      <div>
        <AddButton />
        <WTTable />
      </div>
    )
  }
}

export default HomeWT