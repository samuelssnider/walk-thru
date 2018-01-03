import API from '../data/api'
import collapse from '../data/collapse.png'
import expand from '../data/expand.png'
import instruction from '../data/instruction.png'
const $ = require('jquery')

var buildWT = function(data) {
  console.log(data)
  var row      = document.createElement('TR')
  var imageBox = document.createElement('TD')
  var image    = document.createElement('IMG'); image.src = instruction;
  var expandImage = document.createElement('IMG'); expandImage.src = expand;
  var title    = document.createElement('TD'); title.innerText = data.title;
  var content  = document.createElement('TD'); content.innerText = data.description;
  $(expandImage).addClass('expand-image')
  $(image).addClass('instruction-image')
  row.appendChild(imageBox)
  row.appendChild(title)
  row.appendChild(content)
  imageBox.appendChild(image)
  content.appendChild(expandImage)
  var table = document.getElementsByClassName('show-table')
  table[0].appendChild(row)
}

const show = function(input) {
  return $.ajax({
    url: API + "/api/v1/walk_thrus/" + input,
    method: 'GET',
  })
  .then(function(data) {
    data[0].steps.forEach(function(element) {
      buildWT(element)
    })
  })
  .catch(function() {
    console.err("Failure occured")
  })
}

$(document).ready(function(){
  
})

export default show