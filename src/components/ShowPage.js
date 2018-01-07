import React, {Component} from "react";
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import ShowBar from './ShowBar'

// import show from '../requests/show_one'

class ShowPage extends Component {
  constructor(props){
    super();
  }
  
  render() {
    return(
      <div className='categories-page'>
        <TopNav />
        <ShowBar  tableId='show-table' showId = {this.props.match.params.id}/>
        <BottomNav />
      </div>
    )
  }
}

export default ShowPage