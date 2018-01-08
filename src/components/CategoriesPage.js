import React, {Component} from "react";
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import CategoriesBar from './CategoriesBar'
class CategoriesPage extends Component {
  render() {
    return(
      <div className='categories-page'>
        <TopNav />
        <CategoriesBar />
        <BottomNav />
      </div>
    )
  }
}

export default CategoriesPage