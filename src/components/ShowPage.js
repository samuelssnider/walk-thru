import React, {Component} from "react";
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import ShowBar from './ShowBar'
import show from '../requests/show_one'

class ShowPage extends Component {
  render() {
    show(this.props.match.params.id)
    return(
      <div className='categories-page'>
        <TopNav />
        <ShowBar />
        <BottomNav />
      </div>
    )
  }
}

export default ShowPage