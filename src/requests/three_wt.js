import API from '../data/api'
const $ = require('jQuery')

const three = () => {
  return $.ajax({
    url: API,
    method: 'GET',
  })
  .then(function(data) {
    console.log(data)
  })
}

$(document).ready(function(){
  three;
})

export{
  three,
}