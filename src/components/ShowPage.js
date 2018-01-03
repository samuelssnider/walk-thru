import React, {Component} from "react";
import TopNav from './TopNav'
import BottomNav from './BottomNav'
class ShowPage extends Component {
  render() {
    return(
      <div className='categories-page'>
        <TopNav />
        <BottomNav />
      </div>
    )
  }
}

export default ShowPage