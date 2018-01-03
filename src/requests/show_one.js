import API from '../data/api'
const $ = require('jquery')

var buildWT = function(data) {
  var row      = document.createElement('TR')
  var imageBox = document.createElement('TD')
  var image    = document.createElement('IMG'); image.src = data.img_source;
  var title    = document.createElement('TD'); title.innerText = data.title;
  var content  = document.createElement('TD'); content.innerText = data.content;
  row.appendChild(imageBox)
  row.appendChild(title)
  row.appendChild(content)
  imageBox.appendChild(image)
  var table = document.getElementsByClassName('show-table')
  table[0].appendChild(row)
}

const show = function(input) {
  return $.ajax({
    url: API + "/api/v1/walk_thrus/" + input,
    method: 'GET',
  })
  .then(function(data) {
    buildWT(data)
  })
  .catch(function() {
    console.err("Failure occured")
  })
}

export default show