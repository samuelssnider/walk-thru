import API from '../data/api'
const $ = require('jquery')

var appendWT = function(element) {
  var row   = document.createElement('tr'); $(row).addClass('walk-through-row');
  var imageBox = document.createElement('td'); $(imageBox).addClass('image-box');
  var image = document.createElement('img'); image.src = element.image; $(image).addClass('image-display')
  var title = document.createElement('td'); title.innerText = element.title;
  $(title).addClass('title-box')
  var description = document.createElement('td'); description.innerText = element.description;
  $(description).addClass('description-box')
  imageBox.appendChild(image)
  row.appendChild(imageBox)
  row.appendChild(title)
  row.appendChild(description)
  $('table.home-walk-thru').append(row)
}

const three = function() {
  return $.ajax({
    url: API + "/api/v1/walk_thrus",
    method: 'GET',
  })
  .then(function(data) {
    data.forEach(function(element) {
      appendWT(element)
    })
  })
  .catch(function() {
    console.err("Failure occured")
  })
}

// $(document).ready(function(){
//   three;
// })

export default three