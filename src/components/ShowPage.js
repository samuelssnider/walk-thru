import React, {Component} from "react";
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import ShowBar from './ShowBar'
import axios from 'axios';
import API from '../data/api'

// import show from '../requests/show_one'

class ShowPage extends Component {
  
  
  componentDidMount(){
    fetch(API + "/api/v1/walk_thrus/" + this.props.match.params.id)
    .then(function(response) {
      response.json()
      .then(function(data) {
        var table = document.getElementById('show-table')
        var row = document.createElement('th')
        var imageBox = document.createElement('td')
        var img = document.createElement('img'); img.src = data[0].img_source
        var title = document.createElement('td'); title.innerText = data[0].title
        var description = document.createElement('td'); description.innerText = data[0].description
        imageBox.appendChild(img)
        row.appendChild(imageBox)
        row.appendChild(title)
        row.appendChild(description)
        data[0].steps.forEach(function(step){
          var stepImageBox = document.createElement('tr')
          var stepImage = document.createElement('img'); stepImage.src = step.img_source
          var title = document.createElement('tr');
          var content = document.createElement('tr');
          
          
        })
        table.appendChild(row)
      })
    })
  }
  
  
  
  render() {
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