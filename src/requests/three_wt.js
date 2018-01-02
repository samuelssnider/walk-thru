import API from '../data/api'
const $ = require('jquery')

var appendWT = function(element) {
  var row   = document.createElement('tr'); $(row).addClass('walk-through-row');
  var imageBox = document.createElement('td');
  var image = document.createElement('img'); image.src = element.image;
  var title = document.createElement('td'); title.innerText = element.title;
  var description = document.createElement('td'); description.innerText = element.description;
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
    console.log(data)
    data.forEach(function(element) {
      appendWT(element)
    })
  })
  .catch(function() {
    console.log("Failure occured")
  })
}

// $(document).ready(function(){
//   three;
// })

export default three