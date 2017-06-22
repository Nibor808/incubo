
require('../styles/house.scss');

$(document).ready(function() {
  $('#house-imgs').carousel();
  $('#mapModal').modal('hide');

  $('#map-show').on('click', function() {
    $('#mapModal').modal('show');
  });
});